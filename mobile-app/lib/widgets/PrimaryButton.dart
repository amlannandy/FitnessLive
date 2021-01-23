import 'package:flutter/material.dart';

class PrimaryButton extends StatelessWidget {
  final String text;
  final Color color;
  final Color textColor;
  final Function onPress;

  PrimaryButton({
    @required this.text,
    this.color,
    this.textColor,
    @required this.onPress,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      width: MediaQuery.of(context).size.width * 0.6,
      margin: const EdgeInsets.all(5),
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(15),
      ),
      child: ClipRRect(
        borderRadius: BorderRadius.circular(15),
        child: RaisedButton(
          padding: const EdgeInsets.all(12.5),
          onPressed: onPress,
          color: color ?? Theme.of(context).primaryColor.withOpacity(0.8),
          child: Text(
            text,
            style: TextStyle(
              color: textColor ?? Colors.white,
              fontFamily: 'Varela',
              fontSize: 16,
            ),
          ),
        ),
      ),
    );
  }
}
