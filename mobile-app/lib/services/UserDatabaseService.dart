import 'dart:async';
import 'dart:convert';
import 'package:http/http.dart' as http;
import 'package:cloud_firestore/cloud_firestore.dart';

import '../models/User.dart';
import '../models/HealthData.dart';
import '../models/HealthRecord.dart';

const URL = 'http://192.168.0.151:5000/api/v1';

class UserDatabaseService {
  var _httpClient = http.Client();
  final Firestore _db = Firestore.instance;

  Future<User> getUser(String id) async {
    DocumentSnapshot snapshot =
        await _db.collection('users').document(id).get();
    return User.fromFirestore(snapshot);
  }

  Stream<User> streamUser(String id) {
    return _db
        .collection('users')
        .document(id)
        .snapshots()
        .map((snapshot) => User.fromFirestore(snapshot));
  }

  Stream<List<HealthRecord>> streamAllHealthRecords(String userId) {
    return _db
        .collection('healthRecords')
        .where('userId', isEqualTo: userId)
        .snapshots()
        .map((list) => list.documents
            .map((snapshot) => HealthRecord.fromFirestore(snapshot))
            .toList());
  }

  Stream<HealthData> streamHealthData(String userId) async* {
    while (true) {
      HealthData healthData = await getHealthData(userId);
      yield healthData;
      await Future.delayed(Duration(seconds: 30));
    }
  }

  Future<HealthData> getHealthData(String userId) async {
    final res = await _httpClient.get(URL + '/tracker');
    final data = jsonDecode(res.body);
    final healthData = HealthData.fromJSON(data['data']);
    // TODO: Enable firestore upload before submission
    //updateHealthDataOnFirestore(userId, healthData);
    return healthData;
  }

  Future<List> getTestResults(HealthData healthData) async {
    final postData = {
      'bloodPressure': healthData.data.bloodPressure,
      'bodyTemperature': healthData.data.bodyTemperature,
      'electroCardiogram': healthData.data.electroCardiogram,
      'glucose': healthData.data.glucose,
      'heartRate': healthData.data.heartRate,
      'oxygenSaturation': healthData.data.oxygenSaturation,
      'respiration': healthData.data.respiration,
      'steps': healthData.data.steps,
    };
    final res = await _httpClient.post(URL + '/tracker/results',
        headers: {'Content-Type': 'application/json'},
        body: jsonEncode(postData));
    final data = jsonDecode(res.body);
    final List results = data['data']['results'];
    //uploadResultsToFirestore();
    return results;
  }

  void uploadResultsToFirestore() {}

  void updateHealthDataOnFirestore(String userId, HealthData healthData) {
    _db.collection('users').document(userId).updateData({
      'lastUpdated': healthData.lastUpdated,
      'data': {
        'bloodPressure': healthData.data.bloodPressure,
        'bodyTemperature': healthData.data.bodyTemperature,
        'electroCardiogram': healthData.data.electroCardiogram,
        'glucose': healthData.data.glucose,
        'heartRate': healthData.data.heartRate,
        'oxygenSaturation': healthData.data.oxygenSaturation,
        'respiration': healthData.data.respiration,
        'steps': healthData.data.steps,
      },
    });
  }
}
