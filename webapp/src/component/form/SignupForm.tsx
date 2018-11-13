import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

interface SignupFormProps {}

const SignupForm = (props: SignupFormProps) => {
  return (
    <View>
      <Text>회원가입</Text>
      <View>
        <Text>유저 아이디</Text>
        <TextInput />
      </View>
      <View>
        <Text>비밀번호</Text>
        <TextInput />
      </View>
      <View>
        <Text>비밀번호 확인</Text>
        <TextInput />
      </View>
    </View>
  );
};

export default SignupForm;
