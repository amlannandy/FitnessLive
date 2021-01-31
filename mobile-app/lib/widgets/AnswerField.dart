import 'package:flutter/material.dart';
import 'package:line_icons/line_icons.dart';

Widget answerField({
  BuildContext context,
  TextEditingController controller,
  Function onSend,
}) {
  return Container(
    margin: EdgeInsets.all(10.0),
    decoration: BoxDecoration(
      border: Border.all(color: Colors.black.withOpacity(0.8), width: 0.4),
      borderRadius: BorderRadius.circular(25),
    ),
    child: Row(
      crossAxisAlignment: CrossAxisAlignment.center,
      children: <Widget>[
        Expanded(
          child: ConstrainedBox(
            constraints: new BoxConstraints(
              minHeight: 50,
              maxHeight: 100,
            ),
            child: SingleChildScrollView(
              scrollDirection: Axis.vertical,
              reverse: true,
              child: TextField(
                cursorColor: Colors.grey,
                controller: controller,
                onSubmitted: (message) {
                  onSend();
                },
                keyboardType: TextInputType.multiline,
                maxLines: null,
                decoration: InputDecoration(
                  contentPadding: EdgeInsets.symmetric(
                    vertical: 10.0,
                    horizontal: 20.0,
                  ),
                  hintText: 'Answer here...',
                  border: InputBorder.none,
                  hintStyle: TextStyle(
                    color: Colors.grey[400],
                    fontFamily: 'Lato',
                  ),
                ),
              ),
            ),
          ),
        ),
        IconButton(
          onPressed: onSend,
          icon: Icon(
            LineIcons.chevron_circle_right,
            color: Colors.black.withOpacity(0.8),
            size: 30,
          ),
        ),
      ],
    ),
  );
}
