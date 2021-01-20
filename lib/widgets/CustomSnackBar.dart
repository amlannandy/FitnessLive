import 'package:flutter/material.dart';

class CustomSnackBar extends StatelessWidget {
  final String snackBarMessage;
  final Color bodyColor;
  final Color textColor;

  CustomSnackBar({
    @required this.snackBarMessage,
    this.bodyColor = Colors.red,
    this.textColor = Colors.white,
  });

  @override
  SnackBar build(BuildContext context) {
    return SnackBar(
      backgroundColor: bodyColor,
      content: Text(
        snackBarMessage,
        style: TextStyle(
          color: textColor.withOpacity(0.8),
          fontFamily: 'Varela',
          fontSize: 16,
        ),
      ),
    );
  }
}
