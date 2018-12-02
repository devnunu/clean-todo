import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image, KeyboardAvoidingView } from 'react-native';
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
  createAccount: (username: string, password: string, validPassword: string) => void;
}

const Auth = (props: AuthProps) => {
  return (
    <ImageBackground style={styles.imageBg} source={require('../../common/assets/images/img_bg.jpg')}>
      <LinearGradient style={styles.authView} colors={['rgba(33,212,253,0.5)', 'rgba(183,33,255,0.5)']}>
        <View style={styles.logoView}>
          <Image
            style={{ resizeMode: 'contain', width: 300 }}
            source={require('../../common/assets/images/logo_main.png')}
          />
        </View>
        <KeyboardAvoidingView style={styles.authFormView} behavior="padding">
          {props.action === Mode.LOGIN && <LoginForm usernameLogin={props.usernameLogin} />}
          {props.action === Mode.SIGNUP && (
            <SignupForm createAccount={props.createAccount} onClickSignupButton={props.changeAction} />
          )}
          {props.action === Mode.LOGIN && (
            <TouchableOpacity style={styles.changeModeView}>
              <Text style={styles.changeModeDesc}>{`Don't have an account?`}</Text>
              <Text style={styles.changeModeText} onPress={() => props.changeAction(Mode.SIGNUP)}>
                {'Sign up'}
              </Text>
            </TouchableOpacity>
          )}
          {props.action === Mode.SIGNUP && (
            <TouchableOpacity style={styles.changeModeView}>
              <Text style={styles.changeModeDesc}>{`Aleady signed up?`}</Text>
              <Text style={styles.changeModeText} onPress={() => props.changeAction(Mode.LOGIN)}>
                {'Log in'}
              </Text>
            </TouchableOpacity>
          )}
          }
        </KeyboardAvoidingView>
      </LinearGradient>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imageBg: {
    width: '100%',
    height: '100%',
  },
  authView: {
    flex: 1,
    justifyContent: 'center',
  },
  logoView: {
    display: 'flex',
    flex: 4,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  authFormView: {
    flex: 5,
    paddingHorizontal: 16,
    paddingTop: 50,
  },
  // changeMode
  changeModeView: {
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  changeModeDesc: {
    color: '#ceacac',
    fontSize: 18,
    marginRight: 15,
  },
  changeModeText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default Auth;
