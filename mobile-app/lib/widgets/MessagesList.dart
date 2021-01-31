import 'package:flutter/material.dart';

import '../models/Message.dart';
import './MessageBubble.dart';

class MessagesList extends StatelessWidget {
  final List<Message> messages;

  MessagesList(this.messages);

  @override
  Widget build(BuildContext context) {
    final finalQueries = [...messages.reversed];

    return Expanded(
      child: ListView.builder(
        reverse: true,
        itemBuilder: (ctx, index) => queryBubble(context, finalQueries[index]),
        itemCount: finalQueries.length,
      ),
    );
  }
}
