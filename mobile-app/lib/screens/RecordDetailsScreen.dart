import 'package:fitness_live/widgets/PrimaryButton.dart';
import 'package:flutter/material.dart';

import '../models/HealthRecord.dart';
import '../widgets/MedicalHistoryCard.dart';
import '../services/HealthRecordProvider.dart';

class RecordDetailsScreen extends StatelessWidget {
  final HealthRecord healthRecord;

  RecordDetailsScreen(this.healthRecord);

  void _deleteRecord(BuildContext context) {
    showDialog(
      context: context,
      builder: (ctx) => AlertDialog(
        title: Text(
          'Confirmation',
          style: TextStyle(color: Colors.black, fontFamily: 'Lato'),
        ),
        content: Text(
          'Are you sure you delete this record?',
          style: TextStyle(color: Colors.black, fontFamily: 'Lato'),
        ),
        actions: <Widget>[
          FlatButton(
            onPressed: () => Navigator.of(context).pop(),
            child: Text(
              'No',
              style: TextStyle(
                fontSize: 16,
                fontFamily: 'Lato',
                color: Theme.of(context).primaryColor,
                fontWeight: FontWeight.bold,
              ),
            ),
          ),
          FlatButton(
            onPressed: () => HealthRecordProvider.deleteHealthRecord(
              context,
              healthRecord.id,
            ),
            child: Text(
              'Yes',
              style: TextStyle(
                fontSize: 16,
                fontFamily: 'Lato',
                color: Theme.of(context).primaryColor,
                fontWeight: FontWeight.bold,
              ),
            ),
          ),
        ],
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Stack(
        alignment: Alignment.topLeft,
        children: [
          Column(
            children: [
              Container(
                color: Colors.black,
                height: MediaQuery.of(context).size.height * 0.4,
                width: MediaQuery.of(context).size.width,
                child: Image.network(
                  healthRecord.imageUrl,
                  fit: BoxFit.cover,
                ),
              ),
              Container(
                height: MediaQuery.of(context).size.height * 0.6,
                padding: const EdgeInsets.symmetric(
                  vertical: 10,
                  horizontal: 15,
                ),
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    Column(
                      children: [
                        Text(
                          healthRecord.title,
                          style: TextStyle(
                            color: Colors.black.withOpacity(0.9),
                            fontFamily: 'Lato',
                            fontSize: 24,
                          ),
                        ),
                        Text(
                          healthRecord.subtitle,
                          style: TextStyle(
                            color: Colors.black.withOpacity(0.8),
                            fontFamily: 'Lato',
                            fontSize: 16,
                          ),
                        ),
                        SizedBox(height: 20),
                        Row(
                          mainAxisAlignment: MainAxisAlignment.spaceBetween,
                          children: [
                            pocketData(
                              'Date Issued',
                              HealthRecordProvider.getFormattedDate(
                                  healthRecord.dateIssued),
                            ),
                            SizedBox(height: 10),
                            pocketData(
                              'Date Uploaded',
                              HealthRecordProvider.getFormattedDate(
                                healthRecord.dateUploaded,
                              ),
                            ),
                          ],
                        ),
                      ],
                    ),
                    PrimaryButton(
                      text: 'Delete Record',
                      onPress: () => _deleteRecord(context),
                      color: Colors.red,
                    ),
                  ],
                ),
              ),
            ],
          ),
          Container(
            padding: EdgeInsets.only(
              top: MediaQuery.of(context).size.height * 0.05,
              left: MediaQuery.of(context).size.width * 0.05,
            ),
            child: IconButton(
              icon: Icon(
                Icons.arrow_back_ios,
                color: Colors.white,
              ),
              color: Colors.transparent,
              onPressed: () => Navigator.of(context).pop(),
            ),
          ),
        ],
      ),
    );
  }
}
