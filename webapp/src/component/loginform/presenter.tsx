import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

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
      <Text>로그인</Text>
      <View>
        <Text>유저 아이디</Text>
        <TextInput onChangeText={props.onChangeUsername} />
      </View>
      <View>
        <Text>비밀번호</Text>
        <TextInput onChangeText={props.onChangePassword} />
      </View>
      <View>
        <Text
          onPress={() => props.usernameLogin(props.username, props.password)}
        >
          로그인하기
        </Text>
      </View>
    </View>
  );
};

export default LoginForm;
