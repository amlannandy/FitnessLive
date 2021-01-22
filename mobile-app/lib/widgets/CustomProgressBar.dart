import 'package:flutter/material.dart';

class CustomProgressBar extends StatelessWidget {
  final String message;

  CustomProgressBar({this.message = 'Please wait a moment...'});

  @override
  Widget build(BuildContext context) {
    return Container(
      color: Colors.white,
      width: MediaQuery.of(context).size.width,
      height: 110,
      padding: const EdgeInsets.symmetric(
        vertical: 20,
        horizontal: 10,
      ),
      child: Column(
        children: [
          SizedBox(height: 20),
          LinearProgressIndicator(
            backgroundColor: Colors.grey[200],
            valueColor: AlwaysStoppedAnimation<Color>(
              Theme.of(context).primaryColor,
            ),
          ),
          SizedBox(height: 20),
          Text(
            message,
            style: TextStyle(
              fontFamily: 'Lato',
              fontSize: 20,
              fontWeight: FontWeight.w300,
              color: Colors.black.withOpacity(0.8),
            ),
          ),
        ],
      ),
    );
  }
}
