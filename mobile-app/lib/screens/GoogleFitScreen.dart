import 'package:fit_kit/fit_kit.dart';
import 'package:flutter/material.dart';
import 'package:line_icons/line_icons.dart';

import '../widgets/CustomAppBar.dart';
import '../widgets/CustomGridItem.dart';

class GoogleFitScreen extends StatefulWidget {
  @override
  _GoogleFitScreenState createState() => _GoogleFitScreenState();
}

class _GoogleFitScreenState extends State<GoogleFitScreen> {
  double _height = 175.4, _weight = 71.2, _distance = 4.56, _heartRate = 61;

  @override
  void initState() {
    _requestPermission();
    super.initState();
  }

  void _requestPermission() async {
    final result = await FitKit.hasPermissions([
      DataType.STEP_COUNT,
      DataType.DISTANCE,
      DataType.EXERCISE_TIME,
      DataType.STAND_TIME,
      DataType.HEART_RATE,
      DataType.HEIGHT,
      DataType.WATER,
    ]);
    print('Permission Result - ' + result.toString());
    _getData();
  }

  void _getData() async {
    final distanceData = await FitKit.read(
      DataType.DISTANCE,
      dateFrom: DateTime.now().subtract(Duration(days: 1)),
      dateTo: DateTime.now(),
      limit: 1,
    );
    setState(() => _distance = distanceData[0].value);
    final heightData = await FitKit.read(
      DataType.HEIGHT,
      dateFrom: DateTime.now().subtract(Duration(days: 1)),
      dateTo: DateTime.now(),
      limit: 1,
    );
    setState(() => _height = heightData[0].value);
    final weightData = await FitKit.read(
      DataType.WEIGHT,
      dateFrom: DateTime.now().subtract(Duration(days: 1)),
      dateTo: DateTime.now(),
      limit: 1,
    );
    setState(() => _weight = weightData[0].value);
    final heartRateData = await FitKit.read(
      DataType.HEART_RATE,
      dateFrom: DateTime.now().subtract(Duration(days: 1)),
      dateTo: DateTime.now(),
      limit: 1,
    );
    setState(() => _heartRate = heartRateData[0].value);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: CustomAppBar(''),
      backgroundColor: Colors.white,
      body: SingleChildScrollView(
        child: Column(
          children: [
            Image.asset(
              'assets/images/googlefit.png',
              height: 100,
            ),
            SizedBox(height: 15),
            Text(
              'Data for last 24 hours',
              style: TextStyle(
                color: Colors.black.withOpacity(0.7),
                fontFamily: 'Varela',
                fontSize: 14,
              ),
            ),
            SizedBox(height: 15),
            Container(
              height: MediaQuery.of(context).size.height * 0.7,
              padding: const EdgeInsets.all(15),
              child: GridView(
                gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
                  childAspectRatio: 1,
                  crossAxisCount: 2,
                  mainAxisSpacing: 10,
                  crossAxisSpacing: 10,
                ),
                children: [
                  CustomGridItem(
                    title: 'Heart Rate',
                    subtitle: '${_heartRate.toStringAsFixed(0)} bpm',
                    icon: LineIcons.heart_o,
                    color: Colors.red,
                  ),
                  CustomGridItem(
                    title: 'Distance',
                    subtitle: '${_distance.toStringAsFixed(2)} km',
                    icon: Icons.directions_walk,
                    color: Colors.yellow[700],
                  ),
                  CustomGridItem(
                    title: 'Height',
                    subtitle: '${_height.toStringAsFixed(2)} cm',
                    icon: LineIcons.sort_numeric_asc,
                    color: Colors.blue,
                  ),
                  CustomGridItem(
                    title: 'Weight',
                    subtitle: '${_weight.toStringAsFixed(2)} kg',
                    icon: LineIcons.balance_scale,
                    color: Colors.green,
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}
