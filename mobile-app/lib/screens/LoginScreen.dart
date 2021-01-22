import 'package:flutter/material.dart';
import 'package:line_icons/line_icons.dart';

import '../widgets/PrimaryButton.dart';
import '../widgets/CustomTextField.dart';
import '../widgets/CustomProgressBar.dart';
import '../services/FirebaseAuthenticationService.dart';

enum AuthMode {
  Login,
  Register,
}

class LoginScreen extends StatefulWidget {
  @override
  _LoginScreenState createState() => _LoginScreenState();
}

class _LoginScreenState extends State<LoginScreen> {
  final _scaffoldKey = new GlobalKey<ScaffoldState>();
  final _formKey = new GlobalKey<FormState>();
  bool _isLoading = false;
  AuthMode _authMode = AuthMode.Login;

  final _emailController = TextEditingController();
  final _passwordController = TextEditingController();
  final _confirmPasswordController = TextEditingController();

  void _switchLoading() => setState(() => _isLoading = !_isLoading);

  void _switchAuthMode() {
    setState(() {
      if (_authMode == AuthMode.Login)
        _authMode = AuthMode.Register;
      else
        _authMode = AuthMode.Login;
    });
  }

  void _loginUser() {
    final _form = _formKey.currentState;
    if (_form.validate()) {
      FirebaseAuthenticationService.loginWithEmail(
        _scaffoldKey,
        _emailController.text,
        _passwordController.text,
        _switchLoading,
      );
    }
  }

  void _registerUser() {
    final _form = _formKey.currentState;
    if (_form.validate()) {
      FirebaseAuthenticationService.registerWithEmail(
        _scaffoldKey,
        _emailController.text,
        _passwordController.text,
        _switchLoading,
      );
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      key: _scaffoldKey,
      body: Stack(
        children: [
          Image.asset(
            'assets/images/background.png',
            height: MediaQuery.of(context).size.height,
            width: MediaQuery.of(context).size.width,
            fit: BoxFit.cover,
          ),
          _isLoading
              ? Center(
                  child: CustomProgressBar(
                  message: 'Authenticating...',
                ))
              : Form(
                  key: _formKey,
                  child: Column(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      Text(
                        _authMode == AuthMode.Login ? 'Login' : 'Register',
                        style: TextStyle(
                          color: Colors.white.withOpacity(0.85),
                          fontFamily: 'Lato',
                          fontSize: 40,
                        ),
                      ),
                      SizedBox(height: 15),
                      CustomTextField(
                        controller: _emailController,
                        labelText: 'Enter Email Address',
                        icon: LineIcons.envelope,
                        validations: (text) {
                          RegExp regExp = RegExp(
                            '^[a-zA-Z0-9.!#\$%&\'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,253}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,253}[a-zA-Z0-9])?)*\$',
                          );
                          if (!regExp.hasMatch(text)) {
                            return 'Enter a valid email address';
                          }
                        },
                      ),
                      CustomTextField(
                        controller: _passwordController,
                        labelText: 'Enter Password',
                        icon: LineIcons.lock,
                        validations: (text) {
                          if (_authMode == AuthMode.Register &&
                              _passwordController.text !=
                                  _confirmPasswordController.text) {
                            return 'Passwords don\'t match';
                          }
                        },
                      ),
                      _authMode == AuthMode.Login
                          ? Container()
                          : CustomTextField(
                              controller: _confirmPasswordController,
                              labelText: 'Confirm Password',
                              icon: LineIcons.lock,
                              validations: (text) {
                                if (_authMode == AuthMode.Register &&
                                    _passwordController.text !=
                                        _confirmPasswordController.text) {
                                  return 'Passwords don\'t match';
                                }
                              },
                            ),
                      PrimaryButton(
                        text:
                            _authMode == AuthMode.Login ? 'LOGIN' : 'REGISTER',
                        onPress: _authMode == AuthMode.Login
                            ? _loginUser
                            : _registerUser,
                      ),
                      PrimaryButton(
                        text: _authMode == AuthMode.Login
                            ? 'REGISTER INSTEAD'
                            : 'LOGIN INSTEAD',
                        onPress: () => _switchAuthMode(),
                      ),
                    ],
                  ),
                ),
        ],
      ),
    );
  }
}
