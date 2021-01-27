import 'package:flutter/material.dart';

import '../models/HealthData.dart';
import '../widgets/ResultBar.dart';
import '../widgets/CustomAppBar.dart';
import '../widgets/ErrorMessage.dart';
import '../widgets/CustomListShimmer.dart';
import '../services/UserDatabaseService.dart';

class TestsScreen extends StatefulWidget {
  final HealthData healthData;

  TestsScreen(this.healthData);

  @override
  _TestsScreenState createState() => _TestsScreenState();
}

class _TestsScreenState extends State<TestsScreen> {
  bool _isLoading = true;
  List _results = [];
  final UserDatabaseService userDatabaseService = UserDatabaseService();

  void _generateTestResults() async {
    try {
      var response = await userDatabaseService.getTestResults(
        widget.healthData,
      );
      setState(() {
        _results = response;
        _isLoading = false;
      });
    } catch (error) {
      setState(() => _isLoading = true);
    }
  }

  double _getAverage() {
    double sum = 0;
    int count = _results.length;
    _results.forEach((result) => sum += result['value']);
    return sum / count;
  }

  Color _getColor(double value) {
    if (value > 85) {
      return Colors.red[700];
    } else if (value > 70) {
      return Colors.orange[700];
    } else if (value > 50) {
      return Colors.yellow[700];
    } else {
      return Colors.green[400];
    }
  }

  String _getGrade() {
    var average = _getAverage();
    if (average > 80) {
      return 'D-';
    } else if (average > 65) {
      return 'C-';
    } else if (average > 50) {
      return 'B+';
    } else {
      return 'A+';
    }
  }

  @override
  void initState() {
    _generateTestResults();
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: CustomAppBar('Test Result'),
      backgroundColor: Colors.white,
      body: _isLoading
          ? customListShimmer(10)
          : _results.isEmpty
              ? errorMessage(context)
              : SingleChildScrollView(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.center,
                    children: [
                      gradeTile(),
                      SizedBox(height: 20),
                      for (var item in _results)
                        ResultBar(item['parameter'], item['value'],
                            _getColor(item['value']))
                    ],
                  ),
                ),
    );
  }

  Widget gradeTile() {
    return Container(
      alignment: Alignment.center,
      padding: const EdgeInsets.all(15),
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Container(
            alignment: Alignment.center,
            padding: const EdgeInsets.all(15),
            decoration: BoxDecoration(
              border: Border.all(
                width: 3,
                color: _getColor(_getAverage()),
              ),
              shape: BoxShape.circle,
            ),
            child: Text(
              _getGrade(),
              style: TextStyle(
                fontSize: 34,
                fontFamily: 'Lato',
                fontWeight: FontWeight.bold,
                color: _getColor(_getAverage()),
              ),
            ),
          ),
          SizedBox(height: 10),
          Text(
            'Total Score',
            style: TextStyle(
              fontSize: 22,
              fontFamily: 'Lato',
              fontWeight: FontWeight.bold,
              color: Colors.black.withOpacity(0.8),
            ),
          ),
        ],
      ),
    );
  }
}
