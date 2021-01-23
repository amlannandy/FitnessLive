import 'dart:io';
import 'package:flutter/material.dart';
import 'package:line_icons/line_icons.dart';
import 'package:toggle_switch/toggle_switch.dart';

import '../widgets/CustomTextField.dart';
import '../services/UserInfoProvider.dart';
import '../widgets/ProfilePictureContainer.dart';

class UserInfoScreen extends StatefulWidget {
  @override
  _UserInfoScreenState createState() => _UserInfoScreenState();
}

class _UserInfoScreenState extends State<UserInfoScreen> {
  int _stepIndex = 0;
  bool _isLoading = false;
  final _formKey = GlobalKey<FormState>();
  final _scaffoldKey = GlobalKey<ScaffoldState>();

  String _gender = 'male';
  bool _isDiabetic = false;
  File _imageFile;
  final _nameController = TextEditingController();
  final _phoneController = TextEditingController();
  final _ageController = TextEditingController();
  final _heightController = TextEditingController();
  final _weightController = TextEditingController();

  void _switchLoading() => setState(() => _isLoading = !_isLoading);

  void _submitData() {
    final _form = _formKey.currentState;
    if (_form.validate()) {
      UserInfoProvider.uploadUserData(
        scaffoldKey: _scaffoldKey,
        name: _nameController.text,
        phone: _phoneController.text,
        image: _imageFile,
        age: _ageController.text,
        gender: _gender,
        height: _heightController.text,
        weight: _weightController.text,
        isDiabetic: _isDiabetic,
        toggleSwitching: _switchLoading,
      );
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      key: _scaffoldKey,
      appBar: AppBar(
        centerTitle: true,
        backgroundColor: Colors.white,
        elevation: 0,
        title: Text(
          'Create your Profile',
          style: TextStyle(
            color: Colors.black,
            fontSize: 20,
            fontFamily: 'Lato',
          ),
        ),
      ),
      backgroundColor: Colors.white,
      body: Form(
        key: _formKey,
        child: Theme(
          data: ThemeData(
            primaryColor: Colors.black,
            accentColor: Colors.black,
            canvasColor: Colors.white,
            colorScheme: ColorScheme.light(primary: Colors.black),
          ),
          child: Stepper(
            type: StepperType.horizontal,
            steps: steps(),
            currentStep: _stepIndex,
            onStepCancel:
                _stepIndex == 0 ? null : () => setState(() => _stepIndex--),
            onStepContinue: _stepIndex == 1
                ? _submitData
                : () {
                    final form = _formKey.currentState;
                    if (!form.validate()) return;
                    setState(() => _stepIndex++);
                  },
          ),
        ),
      ),
    );
  }

  List<Step> steps() {
    return [
      Step(
        title: Text(
          'Basic Info',
          style: TextStyle(
            color: Colors.black.withOpacity(0.8),
            fontSize: 12,
            fontFamily: 'Varela',
          ),
        ),
        isActive: _stepIndex == 0,
        content: BasicInfoStep(
          nameController: _nameController,
          phoneController: _phoneController,
          image: _imageFile,
          callback: (newFile) {
            setState(() {
              _imageFile = newFile;
            });
          },
        ),
      ),
      Step(
        title: Text(
          'Health Info',
          style: TextStyle(
            color: Colors.black.withOpacity(0.8),
            fontSize: 12,
            fontFamily: 'Varela',
          ),
        ),
        isActive: _stepIndex == 1,
        content: _isLoading
            ? Container(
                height: 300,
                alignment: Alignment.center,
                child: CircularProgressIndicator(),
              )
            : HealthInfoStep(
                ageController: _ageController,
                heightController: _heightController,
                weightController: _weightController,
                setGenderValue: (String value) {
                  _gender = value;
                },
                setDiabeticValue: (bool value) {
                  _isDiabetic = value;
                },
              ),
      ),
    ];
  }
}

class BasicInfoStep extends StatelessWidget {
  final TextEditingController nameController;
  final TextEditingController phoneController;
  final File image;
  final Function callback;

  BasicInfoStep({
    this.nameController,
    this.phoneController,
    this.image,
    this.callback,
  });

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Column(
          children: [
            ProfilePictureContainer(image, callback),
            SizedBox(height: 10),
            CustomTextField(
              controller: nameController,
              labelText: 'Enter Name',
              icon: LineIcons.user,
            ),
            CustomTextField(
              controller: phoneController,
              labelText: 'Enter Phone Number',
              icon: LineIcons.phone,
              inputType: TextInputType.phone,
              validations: (text) {
                if (text.length != 10) {
                  return 'Invalid Phone Number';
                }
                try {
                  int.parse(text);
                } catch (e) {
                  return 'Invalid Phone Number';
                }
              },
            ),
          ],
        )
      ],
    );
  }
}

class HealthInfoStep extends StatelessWidget {
  final TextEditingController ageController;
  final TextEditingController heightController;
  final TextEditingController weightController;
  final Function setGenderValue;
  final Function setDiabeticValue;

  HealthInfoStep({
    this.ageController,
    this.heightController,
    this.weightController,
    this.setGenderValue,
    this.setDiabeticValue,
  });

  final List<String> _genderValues = ['male', 'female'];
  final List<bool> _diabeticValues = [true, false];

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      children: [
        CustomTextField(
          controller: ageController,
          labelText: 'Enter Age',
          icon: LineIcons.sort_numeric_asc,
          inputType: TextInputType.phone,
          validations: (text) {
            if (text.length != 2) {
              return 'Invalid Age';
            }
            try {
              int.parse(text);
            } catch (e) {
              return 'Invalid Age';
            }
          },
        ),
        Container(
          margin: const EdgeInsets.all(10),
          child: Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Text(
                'Gender',
                style: TextStyle(
                  color: Theme.of(context).accentColor.withOpacity(0.7),
                  fontSize: 16,
                  fontFamily: 'Lato',
                ),
              ),
              ToggleSwitch(
                initialLabelIndex: 0,
                inactiveBgColor: Colors.grey[300],
                inactiveFgColor: Colors.grey[600],
                labels: ['Male', 'Female'],
                onToggle: (index) => setGenderValue(_genderValues[index]),
              ),
            ],
          ),
        ),
        CustomTextField(
          controller: heightController,
          labelText: 'Enter Height in cm',
          icon: LineIcons.text_height,
          inputType: TextInputType.phone,
          validations: (text) {
            try {
              double.parse(text);
            } catch (e) {
              return 'Invalid Value';
            }
          },
        ),
        CustomTextField(
          controller: weightController,
          labelText: 'Enter Weight in kg',
          icon: LineIcons.balance_scale,
          inputType: TextInputType.phone,
          validations: (text) {
            try {
              double.parse(text);
            } catch (e) {
              return 'Invalid Value';
            }
          },
        ),
        Container(
          margin: const EdgeInsets.all(10),
          child: Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Text(
                'Diabetic',
                style: TextStyle(
                  color: Theme.of(context).accentColor.withOpacity(0.7),
                  fontSize: 16,
                  fontFamily: 'Lato',
                ),
              ),
              ToggleSwitch(
                initialLabelIndex: 1,
                inactiveBgColor: Colors.grey[300],
                inactiveFgColor: Colors.grey[600],
                labels: ['Yes', 'No'],
                onToggle: (index) => setDiabeticValue(_diabeticValues[index]),
              ),
            ],
          ),
        ),
      ],
    );
  }
}
