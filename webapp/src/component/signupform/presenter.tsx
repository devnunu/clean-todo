import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

interface SignupFormProps {
  username: string;
  password: string;
  passwordValid: string;
  onChangeUsername: (username: string) => void;
  onChangePassword: (password: string) => void;
  onChangePasswordValid: (passwordValid: string) => void;
  onClickSignupButton: (username, password, validPassword) => void;
}

const SignupForm = (props: SignupFormProps) => {
  return (
    <View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.textInput}
          placeholder={'ID'}
          placeholderTextColor={'#ffffff'}
          onChangeText={props.onChangeUsername}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.textInput}
          placeholder={'Password'}
          placeholderTextColor={'#ffffff'}
          secureTextEntry={true}
          onChangeText={props.onChangePassword}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.textInput}
          placeholder={'Valid password'}
          placeholderTextColor={'#ffffff'}
          secureTextEntry={true}
          onChangeText={props.onChangePasswordValid}
        />
      </View>
      <TouchableOpacity
        style={styles.submitButton}
        onPress={() =>
          props.onClickSignupButton(
            props.username,
            props.password,
            props.passwordValid
          )
        }
      >
        <Text style={styles.submitButtonText}>{'Sign up'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  inputView: {
    display: 'flex',
    flexDirection: 'row'
  },
  textInput: {
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 20,
    fontSize: 18,
    color: 'white',
    borderBottomColor: 'white',
    borderBottomWidth: 1
  },
  submitButton: {
    marginTop: 10,
    backgroundColor: '#A321FF',
    borderRadius: 50,
    paddingVertical: 15
  },
  submitButtonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 18
  }
});

export default SignupForm;
