import 'dart:async';
import 'dart:convert';
import 'package:http/http.dart' as http;
import 'package:cloud_firestore/cloud_firestore.dart';

import '../models/User.dart';
import '../models/HealthData.dart';

const URL = 'http://192.168.0.151:5000';

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

  Stream<HealthData> streamHealthData(String userId) async* {
    yield* Stream.periodic(Duration(seconds: 30), (_) {
      return getHealthData(userId);
    }).asyncMap((value) async => await value);
  }

  Future<HealthData> getHealthData(String userId) async {
    final res = await _httpClient.get(URL);
    final data = jsonDecode(res.body);
    final healthData = HealthData.fromJSON(data['data']);
    //updateHealthDataOnFirestore(userId, healthData);
    return healthData;
  }

  void updateHealthDataOnFirestore(String userId, HealthData healthData) {
    _db.collection('users').document(userId).updateData({
      'lastUpdated': healthData.lastUpdated,
      'data': {
        'bloodPressure': healthData.data.bloodPressure,
        'bodyTemperature': healthData.data.bodyTemperature,
      },
    });
  }
}