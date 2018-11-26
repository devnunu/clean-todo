import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo';

// model
import { Mode } from '../../model/Common';

// component
import LoginForm from '../../component/loginform';
import SignupForm from '../../component/signupform';

// style
import color from '../../common/assets/style/color';

interface AuthProps {
  action: Mode;
  changeAction: (action: Mode) => void;
  usernameLogin: (username: string, password: string) => void;
  createAccount: (
    username: string,
    password: string,
    validPassword: string
  ) => void;
}

const Auth = (props: AuthProps) => {
  return (
    <LinearGradient style={styles.authView} colors={['#69FF97', '#00E4FF']}>
      <View style={styles.authFormView}>
        {props.action === Mode.LOGIN && (
          <LoginForm usernameLogin={props.usernameLogin} />
        )}
        {props.action === Mode.SIGNUP && (
          <SignupForm
            createAccount={props.createAccount}
            onClickSignupButton={props.changeAction}
          />
        )}
        <TouchableOpacity style={styles.changeModeView}>
          {props.action === Mode.LOGIN && (
            <Text
              style={styles.changeModeText}
              onPress={() => props.changeAction(Mode.SIGNUP)}
            >
              {'회원가입'}
            </Text>
          )}
          {props.action === Mode.SIGNUP && (
            <Text
              style={styles.changeModeText}
              onPress={() => props.changeAction(Mode.LOGIN)}
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
