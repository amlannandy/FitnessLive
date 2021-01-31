import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:firebase_auth/firebase_auth.dart';

import './screens/InitScreen.dart';
import './screens/HomeScreen.dart';
import './screens/LoginScreen.dart';
import './screens/ProfileScreen.dart';
import './screens/EnquiryScreen.dart';
import './screens/UserInfoScreen.dart';
import './screens/GoogleFitScreen.dart';
import './screens/MedicalHistroyScreen.dart';
import './screens/AddHealthRecordScreen.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MultiProvider(
      providers: [
        StreamProvider<FirebaseUser>.value(
          value: FirebaseAuth.instance.onAuthStateChanged,
        ),
      ],
      child: MaterialApp(
        title: 'FitnessLive',
        theme: ThemeData(
          primaryColor: Colors.black,
          accentColor: Colors.black,
          textTheme: TextTheme(
            headline1: TextStyle(
              color: Colors.white.withOpacity(0.9),
              fontFamily: 'Lato',
              fontSize: 24,
            ),
            headline2: TextStyle(
              color: Colors.black.withOpacity(0.9),
              fontFamily: 'Lato',
              fontSize: 24,
            ),
          ),
          buttonTheme: ButtonThemeData(
            buttonColor: Color(0xff937FF1),
          ),
        ),
        initialRoute: '/init',
        routes: {
          '/init': (ctx) => InitScreen(),
          '/home': (ctx) => HomeScreen(),
          '/login': (ctx) => LoginScreen(),
          '/enquiry': (ctx) => EnquiryScreen(),
          '/profile': (ctx) => ProfileScreen(),
          '/userinfo': (ctx) => UserInfoScreen(),
          '/googlefit': (ctx) => GoogleFitScreen(),
          '/medicalhistory': (ctx) => MedicalHistoryScreen(),
          '/addhealthrecord': (ctx) => AddHealthRecordScreen(),
        },
      ),
    );
  }
}
