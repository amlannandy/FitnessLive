import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:flutter/material.dart';

class User {
  final String id;
  final String name;
  final String email;
  final int age;
  final double height;
  final double weight;
  final bool isDiabetic;

  const User({
    @required this.id,
    @required this.name,
    @required this.email,
    @required this.age,
    @required this.height,
    @required this.weight,
    @required this.isDiabetic,
  });

  factory User.fromFirestore(DocumentSnapshot snapshot) {
    if (snapshot == null) return null;
    final data = snapshot.data;
    final user = User(
      id: snapshot.documentID,
      name: data['name'] ?? null,
      email: data['email'] ?? null,
      age: data['age'] ?? null,
      height: data['height'] ?? null,
      weight: data['weight'] ?? null,
      isDiabetic: data['isDiabetic'] ?? false,
    );
    return user;
  }
}
