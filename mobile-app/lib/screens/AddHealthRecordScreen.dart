import 'dart:io';
import 'package:flutter/material.dart';
import 'package:line_icons/line_icons.dart';
import 'package:cloud_firestore/cloud_firestore.dart';

import '../widgets/UploadDialog.dart';
import '../widgets/CustomAppBar.dart';
import '../widgets/PrimaryButton.dart';
import '../services/UtilityService.dart';
import '../widgets/CustomTextField.dart';
import '../widgets/CustomLoadingSpinner.dart';
import '../services/HealthRecordProvider.dart';

class AddHealthRecordScreen extends StatefulWidget {
  @override
  _AddHealthRecordScreenState createState() => _AddHealthRecordScreenState();
}

class _AddHealthRecordScreenState extends State<AddHealthRecordScreen> {
  bool _isLoading = false;
  final _formKey = GlobalKey<FormState>();
  GlobalKey<ScaffoldState> _scaffoldKey = GlobalKey<ScaffoldState>();

  File _image;
  Timestamp _dateIssued;
  final _titleController = TextEditingController();
  final _subtitleController = TextEditingController();

  void _toggleLoading() => setState(() => _isLoading = !_isLoading);

  void _setDateIssued() async {
    _dateIssued = await HealthRecordProvider.getPickedDate(context);
    setState(() {});
  }

  void _openUploadDialogModal(BuildContext context) {
    showModalBottomSheet(
      isScrollControlled: true,
      backgroundColor: Colors.transparent,
      context: context,
      builder: (ctx) => uploadDialog(
        context: context,
        notifyChanges: (file) {
          setState(() {
            _image = file;
          });
        },
      ),
    );
  }

  void _uploadRecord() {
    if (_formKey.currentState.validate()) {
      if (_image == null) {
        UtilityService.showSnackBar(_scaffoldKey, 'Please add a document');
        return;
      }
      if (_dateIssued == null) {
        UtilityService.showSnackBar(_scaffoldKey, 'Please select a date');
        return;
      }
      HealthRecordProvider.uploadHealthRecord(
        scaffoldKey: _scaffoldKey,
        title: _titleController.text,
        subtitle: _subtitleController.text,
        image: _image,
        dateIssued: _dateIssued,
        toggleSwitching: _toggleLoading,
      );
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      resizeToAvoidBottomPadding: false,
      appBar: CustomAppBar('Add Health Record'),
      key: _scaffoldKey,
      backgroundColor: Colors.white,
      body: _isLoading
          ? customLoadingSpinner()
          : Column(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Form(
                  key: _formKey,
                  child: Column(
                    children: [
                      CustomTextField(
                        controller: _titleController,
                        labelText: 'Name of the health problem',
                        icon: LineIcons.newspaper_o,
                      ),
                      CustomTextField(
                        controller: _subtitleController,
                        labelText: 'Give a brief description',
                        icon: LineIcons.desktop,
                      ),
                      Container(
                        margin: const EdgeInsets.symmetric(
                          horizontal: 15,
                          vertical: 10,
                        ),
                        child: Row(
                          mainAxisAlignment: MainAxisAlignment.spaceBetween,
                          children: [
                            Text(
                              _dateIssued == null
                                  ? 'Select date it was issued'
                                  : HealthRecordProvider.getFormattedDate(
                                      _dateIssued,
                                    ),
                              style: TextStyle(
                                color: Colors.black.withOpacity(0.8),
                                fontFamily: 'Varela',
                                fontSize: 16,
                              ),
                            ),
                            IconButton(
                              icon: Icon(LineIcons.calendar),
                              onPressed: _setDateIssued,
                            ),
                          ],
                        ),
                      ),
                      uploadContainer(),
                    ],
                  ),
                ),
                Padding(
                  padding: const EdgeInsets.all(10),
                  child: PrimaryButton(
                    text: 'SUBMIT',
                    onPress: _uploadRecord,
                  ),
                ),
              ],
            ),
    );
  }

  Widget uploadContainer() {
    return Container(
      margin: const EdgeInsets.symmetric(
        horizontal: 15,
        vertical: 10,
      ),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          Container(
            height: MediaQuery.of(context).size.height * 0.1,
            width: MediaQuery.of(context).size.width * 0.3,
            decoration: BoxDecoration(
              color: Colors.black.withOpacity(0.1),
              border: Border.all(
                color: Colors.black.withOpacity(0.8),
                width: 0.4,
              ),
            ),
            child: _image == null
                ? Center(
                    child: Text(
                      'Upload Record',
                      style: TextStyle(
                        color: Colors.black.withOpacity(0.8),
                        fontFamily: 'Varela',
                        fontSize: 10,
                      ),
                    ),
                  )
                : Image.file(
                    _image,
                    fit: BoxFit.cover,
                  ),
          ),
          IconButton(
            icon: Icon(LineIcons.upload),
            onPressed: () => _openUploadDialogModal(context),
          ),
        ],
      ),
    );
  }
}
