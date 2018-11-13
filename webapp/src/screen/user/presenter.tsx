import React, { Component } from 'react';
import { View, Text } from 'react-native';

interface UserProps {
  token: string;
}

const UserLogin = (props: UserProps) => {
  return (
    <View>
      <Text>welcome to user view</Text>
    </View>
  );
};

export default UserLogin;
