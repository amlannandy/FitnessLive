import 'package:flutter/material.dart';

List<Widget> getBackground(BuildContext context) {
  return [
    Positioned(
      top: -150,
      left: -150,
      child: Container(
        width: 350,
        height: 350,
        decoration: BoxDecoration(
          color: Theme.of(context).primaryColor.withOpacity(0.4),
          shape: BoxShape.circle,
        ),
      ),
    ),
    Positioned(
      top: -100,
      left: -150,
      child: Container(
        width: 470,
        height: 360,
        decoration: BoxDecoration(
          color: Theme.of(context).primaryColor.withOpacity(0.2),
          shape: BoxShape.circle,
        ),
      ),
    ),
    Positioned(
      top: -120,
      left: -120,
      child: Container(
        width: 240,
        height: 240,
        decoration: BoxDecoration(
          color: Theme.of(context).primaryColor.withOpacity(0.6),
          shape: BoxShape.circle,
        ),
      ),
    ),
  ];
}
