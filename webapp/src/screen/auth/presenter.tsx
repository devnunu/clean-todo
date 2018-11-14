import React, { Component } from 'react';
import { View, Text } from 'react-native';

// component
import LoginForm from '../../component/loginform';
import SignupForm from '../../component/signupform';

interface AuthProps {
  action: string;
  changeAction: (action: string) => void;
}

const Auth = (props: AuthProps) => {
  return (
    <View>
      <Text>welcome to user view</Text>
      {props.action === 'login' && <LoginForm />}
      {props.action === 'signup' && <SignupForm />}
      <View>
        {props.action === 'login' && (
          <Text onPress={() => props.changeAction('signup')}>회원가입</Text>
        )}
        {props.action === 'signup' && (
          <Text onPress={() => props.changeAction('login')}>로그인</Text>
        )}
        }
      </View>
    </View>
  );
};

export default Auth;
