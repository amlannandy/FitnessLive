import 'package:flutter/material.dart';

import '../widgets/CustomDrawer.dart';

class HomeScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(),
      drawer: CustomDrawer(),
    );
  }
}
