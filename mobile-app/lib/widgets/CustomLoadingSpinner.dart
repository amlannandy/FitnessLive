import 'package:flutter/material.dart';

Widget customLoadingSpinner({String message = 'Loading...'}) {
  return Center(
    child: Column(
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        CircularProgressIndicator(),
        SizedBox(height: 10),
        Text(
          message,
          style: TextStyle(
            color: Colors.black.withOpacity(0.8),
            fontFamily: 'Varela',
            fontSize: 14,
          ),
        ),
      ],
    ),
  );
}
