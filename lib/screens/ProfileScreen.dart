import 'dart:io';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:line_icons/line_icons.dart';
import 'package:firebase_auth/firebase_auth.dart';

import '../models/User.dart';
import '../widgets/CustomAppBar.dart';
import '../widgets/PrimaryButton.dart';
import '../widgets/CustomTextField.dart';
import '../services/UserInfoProvider.dart';
import '../services/UserDatabaseService.dart';
import '../widgets/ProfilePictureContainer.dart';

class ProfileScreen extends StatefulWidget {
  @override
  _ProfileScreenState createState() => _ProfileScreenState();
}

class _ProfileScreenState extends State<ProfileScreen> {
  bool _isLoading = true;
  bool _isEditing = false;
  final _formKey = new GlobalKey<FormState>();
  final _scaffoldKey = new GlobalKey<ScaffoldState>();
  final UserDatabaseService userDatabaseService = UserDatabaseService();

  File _image;
  String _imageUrl;
  bool _isDiabetic = false;
  final _nameController = TextEditingController();
  final _heightController = TextEditingController();
  final _weightController = TextEditingController();

  @override
  void initState() {
    _fetchProfile();
    super.initState();
  }

  void _fetchProfile() async {
    FirebaseUser firebaseUser = await FirebaseAuth.instance.currentUser();
    User user = await userDatabaseService.getUser(firebaseUser.uid);
    if (user != null) {
      setState(() {
        _nameController.text = user.name;
        _heightController.text = user.height.toString();
        _weightController.text = user.weight.toString();
        _imageUrl = user.imageUrl;
        _isDiabetic = user.isDiabetic;
        _isLoading = false;
      });
    }
  }

  void _toggleEditMode() => setState(() => _isEditing = !_isEditing);

  void _toggleLoading() => setState(() => _isLoading = !_isLoading);

  void _updateProfile() {
    if (!_formKey.currentState.validate()) return;
    UserInfoProvider.updateUserData(
        scaffoldKey: _scaffoldKey,
        name: _nameController.text,
        height: _heightController.text,
        weight: _weightController.text,
        imageUrl: _imageUrl,
        imageFile: _image,
        isDiabetic: _isDiabetic,
        toggleSwitching: _toggleLoading,
        toggleEditing: _toggleEditMode,
        updateImage: (url) {
          setState(() {
            _imageUrl = url;
          });
        });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      key: _scaffoldKey,
      resizeToAvoidBottomPadding: true,
      resizeToAvoidBottomInset: true,
      appBar: CustomAppBar(
        'Your Profile',
        iconButton: IconButton(
          padding: const EdgeInsets.only(right: 10),
          icon: Icon(
            _isEditing ? Icons.cancel : LineIcons.pencil,
            color: Colors.black.withOpacity(0.7),
          ),
          onPressed: _toggleEditMode,
        ),
      ),
      backgroundColor: Colors.white,
      body: _isLoading
          ? Center(child: CircularProgressIndicator())
          : Container(
              padding: const EdgeInsets.all(15),
              child: SingleChildScrollView(
                child: Form(
                  key: _formKey,
                  child: Column(
                    children: [
                      _isEditing
                          ? ProfilePictureContainer(
                              _image,
                              (newFile) => {
                                setState(() {
                                  _image = newFile;
                                })
                              },
                              imageUrl: _imageUrl,
                            )
                          : CircleAvatar(
                              radius: 70,
                              backgroundColor: Colors.transparent,
                              backgroundImage: NetworkImage(_imageUrl),
                            ),
                      customInput(
                        controller: _nameController,
                        labelText: 'Your Name',
                        icon: LineIcons.user,
                      ),
                      customInput(
                        controller: _heightController,
                        labelText: 'Your Height',
                        icon: LineIcons.home,
                      ),
                      customInput(
                        controller: _weightController,
                        labelText: 'Your Weight',
                        icon: LineIcons.balance_scale,
                      ),
                      _toggleSwitch(context),
                      SizedBox(height: _isEditing ? 20 : 0),
                      _isEditing
                          ? PrimaryButton(
                              text: 'Update Profile',
                              onPress: _updateProfile,
                            )
                          : Container(),
                    ],
                  ),
                ),
              ),
            ),
    );
  }

  Widget _toggleSwitch(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(12.5),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: <Widget>[
          Text.rich(
            TextSpan(
              children: [
                TextSpan(
                  text: 'Diabetic:  ',
                  style: TextStyle(
                    fontFamily: 'Lato',
                    color: Colors.black.withOpacity(0.5),
                    fontSize: 17,
                  ),
                ),
                TextSpan(
                  text: _isDiabetic ? 'Yes' : 'No',
                  style: TextStyle(
                    fontFamily: 'Lato',
                    color: Colors.black.withOpacity(0.8),
                    fontSize: 18,
                    fontWeight: FontWeight.bold,
                  ),
                ),
              ],
            ),
            textAlign: TextAlign.left,
          ),
          CupertinoSwitch(
            value: _isDiabetic,
            onChanged: _isEditing
                ? (val) => setState(() => _isDiabetic = !_isDiabetic)
                : null,
            activeColor: Colors.greenAccent,
            trackColor: Colors.redAccent,
          ),
        ],
      ),
    );
  }

  Widget customInput({
    TextEditingController controller,
    String labelText,
    IconData icon,
    int numberOfLines,
    bool isEnabled = true,
  }) {
    return Container(
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Padding(
            padding: const EdgeInsets.fromLTRB(10, 5, 0, 0),
            child: Text(
              labelText,
              style: TextStyle(
                fontSize: 14,
                color: Theme.of(context).primaryColor,
                fontFamily: 'Lato',
              ),
            ),
          ),
          CustomTextField(
            controller: controller,
            labelText: labelText,
            icon: icon,
            isEnabled: _isEditing && isEnabled,
          )
        ],
      ),
    );
  }
}
