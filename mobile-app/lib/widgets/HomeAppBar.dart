import 'package:flutter/material.dart';

import '../services/UserDatabaseService.dart';

final userDatabaseService = UserDatabaseService();

class HomeAppBar extends StatelessWidget with PreferredSizeWidget {
  @override
  Size get preferredSize => Size.fromHeight(kToolbarHeight);

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.fromLTRB(15, 45, 10, 5),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          Row(children: [
            Container(
              decoration: BoxDecoration(
                color: Colors.white,
                shape: BoxShape.circle,
                boxShadow: [
                  BoxShadow(
                    color: Colors.grey[350],
                    blurRadius: 20.0,
                    spreadRadius: 0.02,
                  ),
                ],
              ),
              child: IconButton(
                icon: Icon(
                  Icons.menu,
                  color: Colors.black.withOpacity(0.8),
                ),
                padding: const EdgeInsets.all(5),
                color: Colors.white,
                onPressed: () => Scaffold.of(context).openDrawer(),
              ),
            ),
            SizedBox(width: 10),
            Text(
              'FitnessLive',
              style: TextStyle(
                color: Colors.black.withOpacity(0.8),
                fontFamily: 'Lato',
                fontSize: 22,
              ),
            ),
          ]),
          IconButton(
            icon: Icon(
              Icons.notifications,
              color: Colors.black.withOpacity(0.8),
              size: 25,
            ),
            onPressed: null,
          ),
        ],
      ),
    );
  }
}
