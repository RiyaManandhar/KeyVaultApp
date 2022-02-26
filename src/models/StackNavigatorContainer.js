import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/authentication/LoginScreen';
import RegistrationScreen from '../screens/authentication/RegistrationScreen';

const Stack = createNativeStackNavigator();

export default function StackNavigatorContainer() {
  return (
      <Stack.Navigator>
        
        <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Registration" component={RegistrationScreen} />
        
      </Stack.Navigator>
  );
}