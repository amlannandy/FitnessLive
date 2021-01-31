import 'package:fitness_live/screens/RecordDetailsScreen.dart';
import 'package:flutter/material.dart';

import '../models/Message.dart';

Widget queryBubble(BuildContext context, Message message) {
  return Container(
    margin: EdgeInsets.only(
      top: 10,
      left: !message.fromBot ? 0 : 10,
      right: !message.fromBot ? 10 : 0,
    ),
    width: MediaQuery.of(context).size.width,
    alignment: !message.fromBot ? Alignment.centerRight : Alignment.centerLeft,
    child: Container(
      padding: const EdgeInsets.all(15),
      decoration: BoxDecoration(
        color: !message.fromBot
            ? Theme.of(context).primaryColor.withOpacity(0.6)
            : Theme.of(context).accentColor,
        borderRadius: BorderRadius.circular(25),
      ),
      width: MediaQuery.of(context).size.width * 0.6,
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          message.record == null
              ? Container()
              : Text(
                  'We found a matching record',
                  style: TextStyle(
                    fontFamily: 'Varela',
                    fontSize: 11,
                    color: Colors.white.withOpacity(0.7),
                  ),
                ),
          message.record == null ? Container() : SizedBox(height: 2.5),
          Text(
            message.message,
            style: TextStyle(
              fontFamily: 'Varela',
              fontSize: 14,
              color: Colors.white,
            ),
          ),
          message.record == null ? Container() : SizedBox(height: 5),
          message.record == null
              ? Container()
              : OutlineButton.icon(
                  icon: Icon(
                    Icons.note,
                  ),
                  borderSide: BorderSide(
                    color: Colors.white,
                    width: 1,
                  ),
                  textColor: Colors.white,
                  label: Text('View'),
                  onPressed: () => Navigator.of(context).push(
                    MaterialPageRoute(
                      builder: (ctx) => RecordDetailsScreen(message.record),
                    ),
                  ),
                ),
        ],
      ),
    ),
  );
}
