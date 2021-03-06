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
            () => Navigator.of(context).pushNamed('/profile'),
          ),
          customListTile(
            LineIcons.history,
            'Medical History',
            'View your health records',
            () => Navigator.of(context).pushNamed('/enquiry'),
          ),
          customListTile(
            LineIcons.comment_o,
            'Health Record Form',
            'Add a new health record',
            () => Navigator.of(context).pushNamed('/addhealthrecord'),
          ),
          customListTile(
            LineIcons.google,
            'Google Fit',
            'Connect with fitness app',
            () => Navigator.of(context).pushNamed('/googlefit'),
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
