import 'package:flutter/material.dart';

class HealthData {
  final String lastUpdated;
  final Data data;

  HealthData({
    @required this.lastUpdated,
    @required this.data,
  });

  factory HealthData.fromJSON(Map data) {
    if (data == null) return null;
    return HealthData(
      lastUpdated: data['lastUpdated'],
      data: Data(
        heartRate: data['data']['heartRate'],
        bloodPressure: data['data']['bloodPressure'],
        glucose: data['data']['glucose'],
        bodyTemperature: data['data']['bodyTemperature'],
        respiration: data['data']['respiration'],
        oxygenSaturation: data['data']['oxygenSaturation'],
        electroCardiogram: data['data']['electroCardiogram'],
        steps: data['data']['steps'],
      ),
    );
  }
}

class Data {
  final int heartRate;
  final String bloodPressure;
  final int glucose;
  final int bodyTemperature;
  final int respiration;
  final int oxygenSaturation;
  final int electroCardiogram;
  final int steps;

  Data({
    @required this.heartRate,
    @required this.bloodPressure,
    @required this.glucose,
    @required this.bodyTemperature,
    @required this.respiration,
    @required this.oxygenSaturation,
    @required this.electroCardiogram,
    @required this.steps,
  });
}
