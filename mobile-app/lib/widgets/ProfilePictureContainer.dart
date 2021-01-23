import 'dart:io';
import 'package:flutter/material.dart';
import 'package:line_icons/line_icons.dart';

import '../widgets/UploadDialog.dart';

class ProfilePictureContainer extends StatelessWidget {
  final File image;
  final Function callback;

  ProfilePictureContainer(this.image, this.callback, {String imageUrl});

  void _openUploadDialogModal(BuildContext context) {
    showModalBottomSheet(
      isScrollControlled: true,
      backgroundColor: Colors.transparent,
      context: context,
      builder: (ctx) => uploadDialog(
        context: context,
        notifyChanges: callback,
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: const EdgeInsets.all(10),
      child: Stack(
        alignment: Alignment.bottomRight,
        children: [
          image == null
              ? Container(
                  decoration: BoxDecoration(
                    border: Border.all(
                      color: Theme.of(context).accentColor.withOpacity(0.8),
                      width: 0.8,
                    ),
                    shape: BoxShape.circle,
                  ),
                  child: CircleAvatar(
                    radius: 70,
                    child: Icon(
                      LineIcons.user,
                      color: Theme.of(context).accentColor.withOpacity(0.8),
                      size: 60,
                    ),
                    backgroundColor: Colors.white,
                  ),
                )
              : CircleAvatar(
                  radius: 70,
                  backgroundColor: Colors.transparent,
                  backgroundImage: FileImage(image),
                ),
          GestureDetector(
            onTap: () => _openUploadDialogModal(context),
            child: Container(
              decoration: BoxDecoration(
                shape: BoxShape.circle,
                color: Colors.white,
                boxShadow: [
                  BoxShadow(
                    color: Colors.grey[500],
                    blurRadius: 20.0,
                    spreadRadius: 0.02,
                  ),
                ],
              ),
              child: CircleAvatar(
                backgroundColor: Colors.white,
                child: Icon(
                  Icons.camera_alt,
                  color: Colors.black.withOpacity(0.5),
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }
}
