import 'package:flutter/material.dart';
import 'package:pedometer/pedometer.dart';

import '../widgets/CustomAppBar.dart';

class PedometerScreen extends StatefulWidget {
  @override
  _PedometerScreenState createState() => _PedometerScreenState();
}

class _PedometerScreenState extends State<PedometerScreen> {
  String _status = '';
  int _steps = 0;

  Stream<StepCount> _stepCountStream;
  Stream<PedestrianStatus> _pedestrianStatusStream;

  @override
  void initState() {
    super.initState();
    initPlatformState();
  }

  void initPlatformState() {
    _pedestrianStatusStream = Pedometer.pedestrianStatusStream;
    _pedestrianStatusStream
        .listen(onPedestrianStatusChanged)
        .onError(onPedestrianStatusError);
    _stepCountStream = Pedometer.stepCountStream;
    _stepCountStream.listen(onStepCount).onError(onStepCountError);
    if (!mounted) return;
  }

  void onStepCount(StepCount event) => setState(() => _steps = event.steps);

  void onPedestrianStatusChanged(PedestrianStatus event) =>
      setState(() => _status = event.status);

  void onPedestrianStatusError(error) =>
      setState(() => _status = 'Pedestrian Status not available');

  void onStepCountError(error) => setState(() => _steps = null);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: CustomAppBar('Pedometer'),
      backgroundColor: Colors.white,
      body: Column(
        children: [
          Container(
            decoration: BoxDecoration(
              shape: BoxShape.circle,
              color: Theme.of(context).accentColor.withOpacity(0.6),
            ),
            child: Column(
              children: [
                Text('Steps'),
                Text(_steps.toString()),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
