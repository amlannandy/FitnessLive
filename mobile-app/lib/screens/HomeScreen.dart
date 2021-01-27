import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:line_icons/line_icons.dart';
import 'package:firebase_auth/firebase_auth.dart';

import '../models/HealthData.dart';
import '../widgets/HomeAppBar.dart';
import '../screens/TestsScreen.dart';
import '../widgets/CustomDrawer.dart';
import '../widgets/ErrorMessage.dart';
import '../widgets/PrimaryButton.dart';
import '../widgets/CustomGridItem.dart';
import '../widgets/CustomListShimmer.dart';
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
                  return customListShimmer(15);
                }
                if (!snapshot.hasData || snapshot.hasError) {
                  return errorMessage(
                    context,
                    message: 'Couldn\'t connect to Tracker',
                  );
                }
                final healthData = snapshot.data;
                return Stack(
                  alignment: Alignment.bottomCenter,
                  children: [
                    Container(
                      padding: const EdgeInsets.all(10),
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
                            subtitle: '${healthData.data.heartRate} bpm',
                            icon: LineIcons.heart_o,
                            color: Colors.red,
                          ),
                          CustomGridItem(
                            title: 'Body Temperature',
                            subtitle: '${healthData.data.bodyTemperature} °C',
                            icon: LineIcons.sun_o,
                            color: Colors.orange,
                          ),
                          CustomGridItem(
                            title: 'Glusoce',
                            subtitle: '${healthData.data.glucose} mg/dL',
                            icon: LineIcons.lightbulb_o,
                            color: Colors.blue,
                          ),
                          CustomGridItem(
                            title: 'Respiration',
                            subtitle: '${healthData.data.respiration} bpm',
                            icon: LineIcons.user,
                            color: Colors.green,
                          ),
                          CustomGridItem(
                            title: 'Blood Pressure',
                            subtitle: healthData.data.bloodPressure,
                            icon: LineIcons.flask,
                            color: Colors.purple,
                          ),
                          CustomGridItem(
                            title: 'O2 Saturation',
                            subtitle: '${healthData.data.oxygenSaturation}%',
                            icon: LineIcons.anchor,
                            color: Colors.pink,
                          ),
                          CustomGridItem(
                            title: 'Electro Cardiogram',
                            subtitle: '${healthData.data.electroCardiogram} ms',
                            icon: LineIcons.heart_o,
                            color: Colors.blue[900],
                          ),
                          CustomGridItem(
                            title: 'Steps walked',
                            subtitle: healthData.data.steps.toString(),
                            icon: Icons.directions_walk,
                            color: Colors.amber[900],
                          ),
                        ],
                      ),
                    ),
                    Container(
                      padding: const EdgeInsets.all(15),
                      child: PrimaryButton(
                        color: Colors.black.withOpacity(0.6),
                        text: 'Test Results',
                        onPress: () => Navigator.of(context).push(
                          MaterialPageRoute(
                            builder: (ctx) => TestsScreen(healthData),
                          ),
                        ),
                      ),
                    ),
                  ],
                );
              },
            ),
    );
  }
}
