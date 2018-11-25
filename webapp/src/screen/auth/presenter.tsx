import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo';

// component
import LoginForm from '../../component/loginform';
import SignupForm from '../../component/signupform';

// style
import color from '../../common/assets/style/color';

interface AuthProps {
  action: string;
  changeAction: (action: string) => void;
}

const Auth = (props: AuthProps) => {
  return (
    <LinearGradient style={styles.authView} colors={['#69FF97', '#00E4FF']}>
      <View style={styles.authFormView}>
        {props.action === 'login' && <LoginForm />}
        {props.action === 'signup' && <SignupForm />}
        <TouchableOpacity style={styles.changeModeView}>
          {props.action === 'login' && (
            <Text
              style={styles.changeModeText}
              onPress={() => props.changeAction('signup')}
            >
              {'회원가입'}
            </Text>
          )}
          {props.action === 'signup' && (
            <Text
              style={styles.changeModeText}
              onPress={() => props.changeAction('login')}
            >
              {'로그인'}
            </Text>
          )}
          }
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  authView: {
    flex: 1,
    justifyContent: 'center'
  },
  authFormView: {
    padding: 16
  },
  changeModeView: {
    padding: 10
  },
  changeModeText: {
    width: '100%',
    textAlign: 'center',
    marginTop: 10,
    color: 'white',
    fontWeight: 'bold'
  }
});

export default Auth;
