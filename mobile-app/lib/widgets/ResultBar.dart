import 'package:flutter/material.dart';

import '../screens/WebViewScreen.dart';

class ResultBar extends StatelessWidget {
  final String label;
  final double value;
  final Color color;
  final String link;

  ResultBar(this.label, this.value, this.color, this.link);

  @override
  Widget build(BuildContext context) {
    final maxValue = MediaQuery.of(context).size.width * 0.8;

    return GestureDetector(
      onTap: () => Navigator.of(context).push(
        MaterialPageRoute(
          builder: (ctx) => WebViewScreen('Article', link),
        ),
      ),
      child: Container(
        alignment: Alignment.center,
        padding: const EdgeInsets.symmetric(
          vertical: 5,
        ),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              label,
              style: TextStyle(
                fontFamily: 'Varela',
                fontSize: 14,
                color: Colors.black.withOpacity(0.8),
              ),
            ),
            SizedBox(height: 3),
            Stack(
              children: [
                Container(
                  decoration: BoxDecoration(
                    color: Colors.grey[100],
                    borderRadius: BorderRadius.circular(10),
                  ),
                  height: 25,
                  width: maxValue,
                ),
                Container(
                  decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(10),
                    color: color,
                  ),
                  alignment: Alignment.centerLeft,
                  height: 25,
                  width: (value / 100) * maxValue,
                  child: Padding(
                    padding: const EdgeInsets.symmetric(
                      vertical: 2.5,
                      horizontal: 10,
                    ),
                    child: Text(
                      value < 15
                          ? value.toStringAsFixed(0)
                          : value.toStringAsFixed(2),
                      style: TextStyle(
                        color: Colors.white.withOpacity(0.7),
                        fontFamily: 'Lato',
                        fontSize: 8,
                      ),
                    ),
                  ),
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}
