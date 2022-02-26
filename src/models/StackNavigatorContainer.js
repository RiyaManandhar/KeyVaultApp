import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/authentication/LoginScreen';
import RegistrationScreen from '../screens/authentication/RegistrationScreen';
import EncryptionKeyController from '../screens/authentication/EncryptionKeyController';
import RegistrationController  from '../screens/authentication/RegistrationController';
import ForgotPasswordScreen from '../screens/authentication/ForgotPasswordScreen';

const Stack = createNativeStackNavigator();

export default function StackNavigatorContainer() {
  return (
      <Stack.Navigator>
        
        <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Registration" component={RegistrationController} />
        <Stack.Screen options={{ headerShown: false }} name="CreateEncryptionKey" component={EncryptionKeyController}
                                 />
        <Stack.Screen options={{ headerShown: false }} name="ForgotPassword" component={ForgotPasswordScreen}
                                 />
      </Stack.Navigator>
  );
}