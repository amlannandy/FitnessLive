import 'package:fitness_live/services/HealthRecordProvider.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:firebase_auth/firebase_auth.dart';

import '../models/Message.dart';
import '../widgets/AnswerField.dart';
import '../widgets/MessagesList.dart';
import '../widgets/CustomAppBar.dart';
import '../widgets/CustomListShimmer.dart';

class EnquiryScreen extends StatefulWidget {
  @override
  _EnquiryScreenState createState() => _EnquiryScreenState();
}

class _EnquiryScreenState extends State<EnquiryScreen> {
  final _answerController = TextEditingController();

  List<Message> _messages = [
    Message(message: 'Welcome to FitnessLive Chat'),
    Message(message: 'Enter name of the record you\'re looking for'),
  ];

  void _onSend(String userId) async {
    String text = _answerController.text;
    setState(() {
      _messages.add(Message(
        message: text,
        fromBot: false,
      ));
      _answerController.clear();
    });
    List<Message> results = await HealthRecordProvider.executeQuery(
      text,
      userId,
    );
    setState(() => _messages.addAll(results));
  }

  @override
  Widget build(BuildContext context) {
    final user = Provider.of<FirebaseUser>(context);

    return Scaffold(
      appBar: CustomAppBar('Enquiry Section'),
      backgroundColor: Colors.white,
      body: user == null
          ? customListShimmer(10)
          : Column(
              children: [
                MessagesList(_messages),
                answerField(
                  context: context,
                  controller: _answerController,
                  onSend: () => _onSend(user.uid),
                ),
              ],
            ),
    );
  }
}
