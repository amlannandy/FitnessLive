import 'package:flutter/material.dart';

import './screens/InitScreen.dart';
import './screens/LoginScreen.dart';
import './screens/UserInfoScreen.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'FitnessLive',
      theme: ThemeData(
        primaryColor: Color(0xff8074F3),
        accentColor: Color(0xff937FF1),
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
      ),
      initialRoute: '/init',
      routes: {
        '/init': (ctx) => InitScreen(),
        '/login': (ctx) => LoginScreen(),
        '/userinfo': (ctx) => UserInfoScreen(),
      },
    );
  }
}
