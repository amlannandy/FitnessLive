import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:firebase_auth/firebase_auth.dart';

import '../models/User.dart';
import '../services/UserDatabaseService.dart';

class UserInfo extends StatelessWidget {
  final UserDatabaseService userDatabaseService = UserDatabaseService();

  @override
  Widget build(BuildContext context) {
    final user = Provider.of<FirebaseUser>(context);

    return Container(
      height: 180,
      padding: const EdgeInsets.all(10),
      child: user == null
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
                  children: [
                    SizedBox(
                      height: MediaQuery.of(context).size.height * 0.05,
                    ),
                    Container(
                      height: 70,
                      decoration: BoxDecoration(
                        color: Colors.white,
                        image: DecorationImage(
                          image: NetworkImage(user.imageUrl),
                          fit: BoxFit.contain,
                        ),
                        shape: BoxShape.circle,
                      ),
                    ),
                    SizedBox(height: 5),
                    Text(
                      user.name,
                      style: TextStyle(
                        fontSize: 16,
                        color: Colors.black.withOpacity(0.8),
                        fontFamily: 'Varela',
                      ),
                    ),
                    Text(
                      user.email,
                      style: TextStyle(
                        fontSize: 14,
                        color: Colors.black.withOpacity(0.5),
                        fontFamily: 'Varela',
                      ),
                    ),
                  ],
                );
              },
            ),
    );
  }
}
