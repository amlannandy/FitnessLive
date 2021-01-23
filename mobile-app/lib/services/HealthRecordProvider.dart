import 'dart:io';
import 'package:intl/intl.dart';
import 'package:flutter/material.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:cloud_firestore/cloud_firestore.dart';

import '../services/UtilityService.dart';
import '../services/UserInfoProvider.dart';

class HealthRecordProvider {
  static Firestore _db = Firestore.instance;
  static final _auth = FirebaseAuth.instance;

  static void uploadHealthRecord(
      {GlobalKey<ScaffoldState> scaffoldKey,
      String title,
      String subtitle,
      File image,
      Timestamp dateIssued,
      Function toggleSwitching}) async {
    try {
      toggleSwitching();
      FirebaseUser user = await _auth.currentUser();
      String imageUrl = await UserInfoProvider.uploadImage(image, user.uid);
      await _db.collection('healthRecords').document().setData({
        'title': title,
        'subtitle': subtitle,
        'imageUrl': imageUrl,
        'dateIssued': dateIssued,
        'dateUploaded': Timestamp.now(),
        'userId': user.uid,
      });
      UtilityService.showSnackBar(
        scaffoldKey,
        'Health Record added',
        bodyColor: Colors.green,
      );
      toggleSwitching();
      Navigator.of(scaffoldKey.currentContext).pop();
    } catch (e) {
      toggleSwitching();
      UtilityService.showSnackBar(scaffoldKey, e.message);
    }
  }

  static Future<Timestamp> getPickedDate(BuildContext context) async {
    DateTime dateTime = await showDatePicker(
      context: context,
      initialDate: DateTime.now(),
      firstDate: DateTime(1960),
      lastDate: DateTime.now(),
      builder: (BuildContext context, Widget child) {
        return Theme(
          data: ThemeData.light().copyWith(
            primaryColor: Colors.black,
            accentColor: Colors.black,
            colorScheme: ColorScheme.light(primary: Colors.black),
            buttonTheme: ButtonThemeData(textTheme: ButtonTextTheme.primary),
          ),
          child: child,
        );
      },
    );
    Timestamp timestamp = Timestamp.fromDate(dateTime);
    return timestamp;
  }

  static String getFormattedDate(Timestamp timestamp) {
    return DateFormat('dd-MM-yyyy').format(timestamp.toDate()).toString();
  }
}
