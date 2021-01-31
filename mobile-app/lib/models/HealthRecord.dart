import 'package:flutter/material.dart';
import 'package:cloud_firestore/cloud_firestore.dart';

class HealthRecord {
  final String id;
  final String title;
  final String subtitle;
  final Timestamp dateIssued;
  final Timestamp dateUploaded;
  final String imageUrl;
  final String userId;

  HealthRecord({
    @required this.id,
    @required this.title,
    @required this.subtitle,
    @required this.dateIssued,
    @required this.dateUploaded,
    @required this.imageUrl,
    @required this.userId,
  });

  factory HealthRecord.fromFirestore(DocumentSnapshot snapshot) {
    final data = snapshot.data;
    if (data == null) return null;
    HealthRecord healthRecord = HealthRecord(
      id: snapshot.documentID,
      title: data['title'] ?? null,
      subtitle: data['subtitle'] ?? null,
      dateIssued: data['dateIssued'] ?? null,
      dateUploaded: data['dateUploaded'] ?? null,
      imageUrl: data['imageUrl'] ?? null,
      userId: data['userId'] ?? null,
    );
    return healthRecord;
  }
}
