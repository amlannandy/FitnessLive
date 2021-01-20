import 'dart:io';
import 'package:image_picker/image_picker.dart';
import 'package:path/path.dart' as Path;
import 'package:flutter/material.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:firebase_storage/firebase_storage.dart';

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
      String imageUrl;
      if (image != null) {
        imageUrl = await uploadImage(image, firebaseUser.uid);
      }
      await _firestore.collection('users').document(firebaseUser.uid).setData({
        'name': name,
        'phone': phone,
        'email': firebaseUser.email,
        'imageUrl': imageUrl,
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

  static Future<String> uploadImage(File imageFile, String userId) async {
    StorageReference firebaseStorageRef = FirebaseStorage.instance
        .ref()
        .child('userPictures/$userId/${Path.basename(imageFile.path)}}');
    StorageUploadTask uploadTask = firebaseStorageRef.putFile(imageFile);
    await uploadTask.onComplete;
    final String imageUrl = await firebaseStorageRef.getDownloadURL();
    return imageUrl;
  }

  static void takePicture(ImageSource imageSource, Function callback) async {
    File image = await ImagePicker.pickImage(
      source: imageSource,
      maxWidth: 600,
    );
    callback(image);
  }
}
