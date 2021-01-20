import 'dart:io';
import 'package:flutter/material.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:cloud_firestore/cloud_firestore.dart';

import '../services/UtilityService.dart';

class UserInfoProvider {
  static final _firestore = Firestore.instance;

  static void uploadUserData({
    GlobalKey<ScaffoldState> scaffoldKey,
    String name,
    String phone,
    String age,
    String gender,
    String height,
    String weight,
    bool isDiabetic,
    File image,
    Function toggleSwitching,
  }) async {
    try {
      toggleSwitching();
      FirebaseUser firebaseUser = await FirebaseAuth.instance.currentUser();
      if (firebaseUser == null) {
        UtilityService.showSnackBar(scaffoldKey, 'Permission Denied');
        return;
      }
      await _firestore.collection('users').document(firebaseUser.uid).setData({
        'name': name,
        'phone': phone,
        'email': firebaseUser.email,
        'age': int.parse(age),
        'gender': gender,
        'height': double.parse(height),
        'weight': double.parse(weight),
        'isDiabetic': isDiabetic,
      });
      toggleSwitching();
      Navigator.of(scaffoldKey.currentContext).pushReplacementNamed('/home');
    } catch (error) {
      toggleSwitching();
      UtilityService.showSnackBar(scaffoldKey, error.message);
    }
  }
}
