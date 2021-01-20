import 'package:flutter/material.dart';

class UtilityService {
  static void showSnackBar(
    GlobalKey<ScaffoldState> scaffoldKey,
    String snackBarMessage, {
    Color bodyColor = Colors.red,
    Color textColor = Colors.white,
  }) {
    scaffoldKey.currentState.showSnackBar(
      SnackBar(
        backgroundColor: bodyColor,
        content: Text(
          snackBarMessage,
          style: TextStyle(
            color: textColor.withOpacity(0.8),
            fontFamily: 'Varela',
            fontSize: 14,
          ),
        ),
      ),
    );
  }
}
