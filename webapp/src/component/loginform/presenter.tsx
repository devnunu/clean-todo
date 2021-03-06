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
      <TouchableOpacity
        style={styles.submitButton}
        onPress={() => props.usernameLogin(props.username, props.password)}
      >
        <Text style={styles.submitButtonText}>{'Log in'}</Text>
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
    backgroundColor: '#c87bff',
    borderRadius: 50,
    paddingVertical: 15,
    shadowColor: 'rgba(0,0,0, .4)',
    shadowOffset: { height: 1, width: 1 },
    shadowOpacity: 1,
    shadowRadius: 1
  },
  submitButtonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 18
  }
});

export default LoginForm;
