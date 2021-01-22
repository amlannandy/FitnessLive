import 'package:flutter/material.dart';

class CustomTextField extends StatelessWidget {
  final TextEditingController controller;
  final String labelText;
  final IconData icon;
  final bool obscureText;
  final TextInputType inputType;
  final bool isEnabled;
  final Function validations;

  CustomTextField({
    @required this.controller,
    @required this.labelText,
    @required this.icon,
    this.obscureText = false,
    this.inputType = TextInputType.text,
    this.isEnabled = true,
    this.validations,
  });

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(10),
      child: TextFormField(
        style: TextStyle(
          fontFamily: 'Varela',
        ),
        validator: (text) {
          if (text.isEmpty) {
            return 'Field cannot be empty';
          }
          if (validations != null) {
            return validations(text);
          }
          return null;
        },
        keyboardType: inputType,
        obscureText: obscureText,
        controller: controller,
        enabled: isEnabled,
        decoration: InputDecoration(
          hintText: labelText,
          hintStyle: TextStyle(
            color: Theme.of(context).accentColor.withOpacity(0.5),
          ),
          prefixIcon: Icon(
            icon,
            color: Theme.of(context).accentColor.withOpacity(0.9),
          ),
          enabledBorder: OutlineInputBorder(
            borderSide: BorderSide(
              color: Theme.of(context).accentColor,
              width: 1,
            ),
            borderRadius: BorderRadius.circular(15),
          ),
          border: OutlineInputBorder(
            borderRadius: BorderRadius.circular(15),
          ),
          contentPadding: const EdgeInsets.only(top: 20),
          filled: true,
          fillColor: Colors.white,
          errorStyle: TextStyle(
            color: Colors.red[900],
            fontFamily: 'Varela',
            fontWeight: FontWeight.w500,
          ),
          errorBorder: OutlineInputBorder(
            borderSide: BorderSide(
              color: Colors.red[800],
              width: 1,
            ),
            borderRadius: BorderRadius.circular(15),
          ),
        ),
      ),
    );
  }
}
