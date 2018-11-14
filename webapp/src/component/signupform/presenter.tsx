import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

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
      <Text>회원가입</Text>
      <View>
        <Text>유저 아이디</Text>
        <TextInput onChangeText={props.onChangeUsername} />
      </View>
      <View>
        <Text>비밀번호</Text>
        <TextInput onChangeText={props.onChangePassword} />
      </View>
      <View>
        <Text>비밀번호 확인</Text>
        <TextInput onChangeText={props.onChangePasswordValid} />
      </View>
      <View>
        <Text
          onPress={() =>
            props.createAccount(
              props.username,
              props.password,
              props.passwordValid
            )
          }
        >
          회원가입
        </Text>
      </View>
    </View>
  );
};

export default SignupForm;
