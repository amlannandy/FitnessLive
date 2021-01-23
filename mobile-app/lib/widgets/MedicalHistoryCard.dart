import 'package:fitness_live/screens/RecordDetailsScreen.dart';
import 'package:flutter/material.dart';
import 'package:line_icons/line_icons.dart';

import '../models/HealthRecord.dart';
import '../services/HealthRecordProvider.dart';

class MedicalHistoryCard extends StatelessWidget {
  final HealthRecord healthRecord;

  MedicalHistoryCard(this.healthRecord);

  void _goToDetails(BuildContext context) {
    Navigator.of(context).push(
        MaterialPageRoute(builder: (ctx) => RecordDetailsScreen(healthRecord)));
  }

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: () => _goToDetails(context),
      child: Container(
        height: 120,
        margin: const EdgeInsets.fromLTRB(10, 10, 10, 0),
        padding: const EdgeInsets.all(15),
        decoration: BoxDecoration(
          color: Colors.white,
          boxShadow: [
            BoxShadow(
              color: Colors.grey[350],
              blurRadius: 20.0,
              spreadRadius: 0.02,
            ),
          ],
          borderRadius: BorderRadius.circular(5),
        ),
        child: Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            Column(
              crossAxisAlignment: CrossAxisAlignment.start,
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
            Column(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              crossAxisAlignment: CrossAxisAlignment.end,
              children: [
                Text(
                  healthRecord.title,
                  style: TextStyle(
                    color: Colors.black.withOpacity(0.9),
                    fontFamily: 'Lato',
                    fontSize: 18,
                  ),
                ),
                SizedBox(height: 10),
                OutlineButton.icon(
                  onPressed: () => _goToDetails(context),
                  icon: Icon(
                    LineIcons.arrow_circle_o_right,
                  ),
                  label: Text(
                    'Details',
                  ),
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}

Widget pocketData(String upperText, String lowerText) {
  return Column(
    crossAxisAlignment: CrossAxisAlignment.start,
    children: [
      Text(
        upperText,
        style: TextStyle(
          color: Colors.black.withOpacity(0.6),
          fontFamily: 'Varela',
          fontSize: 12,
        ),
      ),
      Text(
        lowerText,
        style: TextStyle(
          color: Colors.black.withOpacity(0.8),
          fontFamily: 'Varela',
          fontSize: 14,
        ),
      ),
    ],
  );
}
