import 'package:flutter/material.dart';

import './HealthRecord.dart';

class Message {
  final bool isTextType;
  final String message;
  final bool fromBot;
  final HealthRecord record;

  Message({
    this.isTextType = true,
    @required this.message,
    this.fromBot = true,
    this.record,
  });
}
