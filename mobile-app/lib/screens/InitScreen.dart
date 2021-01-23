import 'package:flutter/material.dart';
import 'package:firebase_auth/firebase_auth.dart';

import '../models/User.dart';
import '../widgets/Background.dart';
import '../services/UserDatabaseService.dart';

class InitScreen extends StatefulWidget {
  @override
  _InitScreenState createState() => _InitScreenState();
}

class _InitScreenState extends State<InitScreen> {
  bool _redirect;
  String _redirectURL;

  Future<bool> _checkAuthStatus(BuildContext ctx) async {
    try {
      FirebaseUser currentUser = await FirebaseAuth.instance.currentUser();
      if (currentUser == null) {
        _redirect = true;
        _redirectURL = '/login';
        return true;
      }
      UserDatabaseService userDatabaseService = UserDatabaseService();
      User user = await userDatabaseService.getUser(currentUser.uid);
      if (user == null) {
        _redirect = true;
        _redirectURL = '/userinfo';
        return true;
      }
      _redirectURL = '/home';
      _redirect = true;
      return true;
    } catch (err) {
      return false;
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Stack(
        alignment: Alignment.center,
        children: [
          Container(
            color: Colors.transparent,
            width: MediaQuery.of(context).size.width,
            height: MediaQuery.of(context).size.height,
            alignment: Alignment.center,
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              crossAxisAlignment: CrossAxisAlignment.center,
              children: [
                Padding(
                  padding: const EdgeInsets.all(30),
                  child: Text(
                    "Fitness Live",
                    style: TextStyle(
                      color: Colors.black,
                      fontFamily: 'Lato',
                      fontWeight: FontWeight.bold,
                      fontSize: 40,
                    ),
                    textAlign: TextAlign.center,
                  ),
                ),
                FutureBuilder<bool>(
                  future: _checkAuthStatus(context),
                  builder: (BuildContext c, AsyncSnapshot<bool> snapshot) {
                    List<Widget> children = [];
                    if (snapshot.hasData && snapshot.data) {
                      new Future.delayed(Duration(milliseconds: 500), () {
                        if (_redirect)
                          Navigator.of(context)
                              .pushReplacementNamed(_redirectURL);
                      });
                      return Container();
                    } else if (snapshot.hasError) {
                      Text(
                        "Authentication Error",
                        style: TextStyle(
                          fontFamily: 'Lato',
                          fontSize: 28,
                          fontWeight: FontWeight.w300,
                          color: Colors.red,
                        ),
                      );
                    }
                    return Column(
                      children: children,
                    );
                  },
                ),
                CircularProgressIndicator(
                  backgroundColor: Colors.grey[200],
                  valueColor: AlwaysStoppedAnimation<Color>(
                    Theme.of(context).primaryColor,
                  ),
                ),
                SizedBox(height: 20),
                Text(
                  "Please wait a moment...",
                  style: TextStyle(
                    fontFamily: 'Lato',
                    fontSize: 20,
                    fontWeight: FontWeight.w300,
                    color: Colors.black.withOpacity(0.8),
                  ),
                ),
              ],
            ),
          ),
          ...getBackground(context),
        ],
      ),
    );
  }
}
