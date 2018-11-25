import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

interface LoginFormProps {
  username: string;
  password: string;
  onChangeUsername: (username: string) => void;
  onChangePassword: (password: string) => void;
  usernameLogin: (username: string, password: string) => void;
}

const LoginForm = (props: LoginFormProps) => {
  return (
    <View>
      <Text style={styles.titleText}>{'Log In'}</Text>
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
      <TouchableOpacity style={styles.submitButton}>
        <Text
          style={styles.submitButtonText}
          onPress={() => props.usernameLogin(props.username, props.password)}
        >
          {'Log in'}
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

export default LoginForm;
