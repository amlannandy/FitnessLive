import 'package:fit_kit/fit_kit.dart';
import 'package:flutter/material.dart';

import '../widgets/CustomAppBar.dart';

class GoogleFitScreen extends StatefulWidget {
  @override
  _GoogleFitScreenState createState() => _GoogleFitScreenState();
}

class _GoogleFitScreenState extends State<GoogleFitScreen> {
  @override
  void initState() {
    hasPermissions();
    super.initState();
  }

  Future<void> hasPermissions() async {
    // try {
    //   var permissions = await FitKit.hasPermissions(DataType.values);
    // } catch (e) {
    //   var result = 'hasPermissions: $e';
    // }

    // if (!mounted) return;

    // setState(() {});
  }

  void _requestPermission() async {
    await FitKit.hasPermissions([
      DataType.HEART_RATE,
      DataType.STEP_COUNT,
      DataType.HEIGHT,
      DataType.WEIGHT,
      DataType.DISTANCE,
      DataType.ENERGY,
      DataType.WATER
    ]);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: CustomAppBar('Google Fit'),
      backgroundColor: Colors.white,
      body: FutureBuilder<List<FitData>>(
        future: FitKit.read(
          DataType.DISTANCE,
          dateFrom: DateTime.now().subtract(Duration(days: 1)),
          dateTo: DateTime.now(),
          limit: 1,
        ),
        builder: (context, snapshot) {
          if (snapshot.connectionState == ConnectionState.waiting ||
              !snapshot.hasData) {
            return Container();
          }
          final data = snapshot.data[0].toString();
          return Column(
            children: [
              Text(data),
            ],
          );
        },
      ),
    );
  }
}
