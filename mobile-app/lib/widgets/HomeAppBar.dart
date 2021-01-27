import 'package:flutter/material.dart';
import 'package:line_icons/line_icons.dart';
import 'package:provider/provider.dart';
import 'package:firebase_auth/firebase_auth.dart';

import '../models/User.dart';
import '../services/UserDatabaseService.dart';

final userDatabaseService = UserDatabaseService();

class HomeAppBar extends StatelessWidget with PreferredSizeWidget {
  @override
  Size get preferredSize => Size.fromHeight(kToolbarHeight);

  @override
  Widget build(BuildContext context) {
    final user = Provider.of<FirebaseUser>(context);

    return Container(
      height: MediaQuery.of(context).size.height * 0.15,
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
            user == null
                ? Container()
                : StreamBuilder<User>(
                    stream: userDatabaseService.streamUser(user.uid),
                    builder: (context, snapshot) {
                      if (snapshot.connectionState == ConnectionState.waiting ||
                          !snapshot.hasData) {
                        return Container();
                      }
                      final user = snapshot.data;
                      return Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text(
                            'Hello!',
                            style: TextStyle(
                              fontFamily: 'Lato',
                              color: Colors.black.withOpacity(0.6),
                              fontSize: 12,
                            ),
                          ),
                          Text(
                            user.name,
                            style: TextStyle(
                              fontFamily: 'Lato',
                              color: Colors.black.withOpacity(0.8),
                              fontSize: 16,
                              fontWeight: FontWeight.bold,
                            ),
                          ),
                        ],
                      );
                    },
                  )
          ]),
          IconButton(
            icon: Icon(
              LineIcons.gear,
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
