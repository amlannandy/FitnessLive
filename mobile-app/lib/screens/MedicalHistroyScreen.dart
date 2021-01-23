import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:firebase_auth/firebase_auth.dart';

import '../models/HealthRecord.dart';
import '../widgets/CustomAppBar.dart';
import '../widgets/MedicalHistoryCard.dart';
import '../widgets/CustomLoadingSpinner.dart';
import '../services/UserDatabaseService.dart';

class MedicalHistoryScreen extends StatelessWidget {
  final UserDatabaseService userDatabaseService = UserDatabaseService();

  @override
  Widget build(BuildContext context) {
    final user = Provider.of<FirebaseUser>(context);

    return Scaffold(
      appBar: CustomAppBar('Medical History'),
      backgroundColor: Colors.white,
      body: user == null
          ? customLoadingSpinner()
          : StreamBuilder<List<HealthRecord>>(
              stream: userDatabaseService.streamAllHealthRecords(user.uid),
              builder: (context, snapshot) {
                if (snapshot.connectionState == ConnectionState.waiting) {
                  return customLoadingSpinner();
                }
                if (!snapshot.hasData) {
                  return Container();
                }
                final records = snapshot.data;
                if (records.isEmpty) {}
                print(records);
                return ListView.builder(
                  itemBuilder: (ctx, index) =>
                      MedicalHistoryCard(records[index]),
                  itemCount: records.length,
                );
              },
            ),
    );
  }
}
