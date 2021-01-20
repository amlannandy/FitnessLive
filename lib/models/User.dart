import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:flutter/material.dart';

class User {
  final String id;
  final String name;
  final String email;
  final String phone;
  final String imageUrl;
  final int age;
  final double height;
  final double weight;
  final bool isDiabetic;

  const User({
    @required this.id,
    @required this.name,
    @required this.email,
    @required this.phone,
    @required this.imageUrl,
    @required this.age,
    @required this.height,
    @required this.weight,
    @required this.isDiabetic,
  });

  factory User.fromFirestore(DocumentSnapshot snapshot) {
    Map data = snapshot.data;
    if (data == null) return null;
    final user = User(
      id: snapshot.documentID,
      name: data['name'] ?? null,
      email: data['email'] ?? null,
      phone: data['phone'] ?? null,
      imageUrl: data['imageUrl'] ?? null,
      age: data['age'] ?? null,
      height: data['height'] ?? null,
      weight: data['weight'] ?? null,
      isDiabetic: data['isDiabetic'] ?? false,
    );
    return user;
  }
}
