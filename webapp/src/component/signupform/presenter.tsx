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
  createAccount: (username, password, validPassword) => void;
}

const SignupForm = (props: SignupFormProps) => {
  return (
    <View>
      <Text style={styles.titleText}>{'Sign Up'}</Text>
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
          placeholder={'password'}
          placeholderTextColor={'#ffffff'}
          secureTextEntry={true}
          onChangeText={props.onChangePassword}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.textInput}
          placeholder={'valid password'}
          placeholderTextColor={'#ffffff'}
          secureTextEntry={true}
          onChangeText={props.onChangePasswordValid}
        />
      </View>
      <TouchableOpacity style={styles.submitButton}>
        <Text
          style={styles.submitButtonText}
          onPress={() =>
            props.createAccount(
              props.username,
              props.password,
              props.passwordValid
            )
          }
        >
          {'Sign up'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  titleText: {
    width: '100%',
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white'
  },
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
    borderColor: 'white',
    borderWidth: 3,
    borderRadius: 4,
    paddingVertical: 10
  },
  submitButtonText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18
  }
});

export default SignupForm;
