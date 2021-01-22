import 'package:flutter/material.dart';
import 'package:firebase_auth/firebase_auth.dart';

import '../services/UtilityService.dart';

class FirebaseAuthenticationService {
  static final FirebaseAuth _auth = FirebaseAuth.instance;

  static Future<void> registerWithEmail(
    GlobalKey<ScaffoldState> scaffoldKey,
    String email,
    String password,
    Function switchLoading,
  ) async {
    switchLoading();
    try {
      await _auth.createUserWithEmailAndPassword(
        email: email,
        password: password,
      );
      switchLoading();
      Navigator.of(scaffoldKey.currentContext).pushReplacementNamed('/init');
    } catch (error) {
      switchLoading();
      UtilityService.showSnackBar(scaffoldKey, error.message);
    }
  }

  static Future<void> loginWithEmail(
    GlobalKey<ScaffoldState> scaffoldKey,
    String email,
    String password,
    Function switchLoading,
  ) async {
    switchLoading();
    try {
      await _auth.signInWithEmailAndPassword(email: email, password: password);
      switchLoading();
      Navigator.of(scaffoldKey.currentContext).pushReplacementNamed('/init');
    } catch (error) {
      switchLoading();
      UtilityService.showSnackBar(scaffoldKey, error.message);
    }
  }

  static Future<void> logOut(BuildContext context) async {
    await _auth.signOut();
    Navigator.pushNamedAndRemoveUntil(context, '/init', (_) => false);
  }
}
