import 'package:flutter/material.dart';

Widget errorMessage(
  BuildContext context, {
  String message = 'Unexpected error occured',
}) {
  return Center(
    child: Column(
      mainAxisSize: MainAxisSize.min,
      mainAxisAlignment: MainAxisAlignment.center,
      crossAxisAlignment: CrossAxisAlignment.center,
      children: <Widget>[
        Image.asset(
          'assets/images/error.png',
          height: 200,
        ),
        SizedBox(height: 20),
        Text(
          message,
          style: TextStyle(
            color: Theme.of(context).primaryColor.withOpacity(0.8),
            fontSize: 16,
            fontFamily: 'Varela',
          ),
          textAlign: TextAlign.center,
        ),
      ],
    ),
  );
}
