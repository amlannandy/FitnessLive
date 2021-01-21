import 'package:flutter/material.dart';

class CustomAppBar extends StatelessWidget with PreferredSizeWidget {
  final String title;
  final IconButton iconButton;

  CustomAppBar(this.title, {this.iconButton});

  @override
  Size get preferredSize => Size.fromHeight(kToolbarHeight);

  @override
  Widget build(BuildContext context) {
    return AppBar(
      elevation: 0,
      leading: IconButton(
        icon: Icon(
          Icons.arrow_back_ios,
          color: Colors.black.withOpacity(0.7),
        ),
        onPressed: () => Navigator.of(context).pop(),
      ),
      centerTitle: true,
      backgroundColor: Colors.white,
      title: Text(
        title,
        style: TextStyle(
          color: Colors.black.withOpacity(0.8),
          fontFamily: 'Lato',
          fontSize: 22,
        ),
      ),
      actions: [
        iconButton ?? Container(),
      ],
    );
  }
}
