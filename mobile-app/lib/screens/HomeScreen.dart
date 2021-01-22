import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

import '../models/HealthData.dart';
import '../widgets/HomeAppBar.dart';
import '../widgets/CustomDrawer.dart';
import '../services/UserDatabaseService.dart';

class HomeScreen extends StatelessWidget {
  final UserDatabaseService userDatabaseService = UserDatabaseService();

  @override
  Widget build(BuildContext context) {
    final user = Provider.of<FirebaseUser>(context);

    return Scaffold(
      appBar: HomeAppBar(),
      drawer: CustomDrawer(),
      body: user == null
          ? Container()
          : StreamBuilder<HealthData>(
              stream: userDatabaseService.streamHealthData(user.uid),
              builder: (context, snapshot) {
                if (snapshot.connectionState == ConnectionState.waiting) {
                  return CircularProgressIndicator();
                }
                final healthData = snapshot.data;
                return Column(
                  children: [
                    Text(healthData.lastUpdated),
                  ],
                );
              },
            ),
    );
  }
}
