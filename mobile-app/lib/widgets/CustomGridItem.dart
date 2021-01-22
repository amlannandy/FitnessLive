import 'package:flutter/material.dart';

class CustomGridItem extends StatelessWidget {
  final String title;
  final String subtitle;
  final IconData icon;
  final Color color;

  CustomGridItem({
    @required this.title,
    @required this.subtitle,
    @required this.icon,
    @required this.color,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(10),
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(5),
        color: color.withOpacity(0.3),
      ),
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Icon(
            icon,
            color: color,
            size: 50,
          ),
          Text(
            title,
            style: TextStyle(
              color: color,
              fontFamily: 'Varela',
              fontSize: 12,
            ),
          ),
          Text(
            subtitle,
            style: TextStyle(
              color: color,
              fontFamily: 'Lato',
              fontSize: 18,
            ),
          ),
        ],
      ),
    );
  }
}
