import 'package:flutter/material.dart';
import 'package:line_icons/line_icons.dart';

import '../widgets/UserInfo.dart';
import '../services/FirebaseAuthenticationService.dart';

class CustomDrawer extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Drawer(
      child: Column(
        children: [
          UserInfo(),
          customListTile(
            LineIcons.user,
            'Your Profile',
            'View and edit your profile',
            () => Navigator.of(context).pushNamed('/pedometer'),
          ),
          customListTile(
            LineIcons.comment_o,
            'Health Chatbot',
            'Consult an AI Assistant',
            () => Navigator.of(context).pushNamed('/pedometer'),
          ),
          customListTile(
            LineIcons.heart_o,
            'Heart Rate Monitor',
            'Monitor your pulse',
            () => Navigator.of(context).pushNamed('/pedometer'),
          ),
          customListTile(
            Icons.directions_walk,
            'Pedometer',
            'Check your daily activity',
            () => Navigator.of(context).pushNamed('/pedometer'),
          ),
          customListTile(
            Icons.exit_to_app,
            'Log out',
            'Exit your account',
            () => FirebaseAuthenticationService.logOut(context),
          ),
        ],
      ),
    );
  }

  Widget customListTile(
    IconData icon,
    String title,
    String subtitle,
    Function onPress,
  ) {
    return GestureDetector(
      onTap: onPress,
      child: Container(
        margin: const EdgeInsets.symmetric(horizontal: 10),
        padding: const EdgeInsets.symmetric(
          horizontal: 10,
          vertical: 15,
        ),
        child: Row(
          children: [
            Icon(
              icon,
              size: 28,
            ),
            SizedBox(width: 12.5),
            Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  title,
                  style: TextStyle(
                    fontSize: 16,
                    color: Colors.black.withOpacity(0.8),
                    fontFamily: 'Varela',
                  ),
                ),
                Text(
                  subtitle,
                  style: TextStyle(
                    fontSize: 14,
                    color: Colors.black.withOpacity(0.5),
                    fontFamily: 'Varela',
                  ),
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}
