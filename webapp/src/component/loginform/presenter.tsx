import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

interface LoginFormProps {}

const LoginForm = (props: LoginFormProps) => {
  return (
    <View>
      <Text>로그인</Text>
      <View>
        <Text>유저 아이디</Text>
        <TextInput />
      </View>
      <View>
        <Text>비밀번호</Text>
        <TextInput />
      </View>
    </View>
  );
};

export default LoginForm;
