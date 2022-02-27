import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen, RegistrationController,ForgotPasswordScreen,CreateEncryptionKey, HomeScreen,SettingsScreen
} from "../screens/index";

const Stack = createNativeStackNavigator();

export function StackNavigatorContainer({user, biometricAuth}) {
  return (
      <Stack.Navigator screenOptions={{
        headerStyle: {backgroundColor: '#72C99A',},
        headerTintColor: '#fff',
        headerTitleStyle: {fontWeight: 'bold',},
    }}>

{user ? (
          <>
              {/* if the user is signed in */}
              <Stack.Screen name="Passwords">
                  {props => <HomeScreen {...props} extraData={user} options={{}}/>}
              </Stack.Screen>
              
          </>

        ) : (
          <>
              {/* if the user is not signed in */}
              <Stack.Screen name="Login" options={{ headerShown: false}}>
                  {props => <LoginScreen {...props} executeBiometrics={biometricAuth}/>}
                </Stack.Screen>
              <Stack.Screen options={{ headerShown: false }} name="Registration" component={RegistrationController} />
              <Stack.Screen options={{ headerShown: false }} name="CreateEncryptionKey" component={CreateEncryptionKey}
                                 />
              <Stack.Screen options={{ headerShown: false }} name="ForgotPassword" component={ForgotPasswordScreen}
                                 />
          </>
          )}
      </Stack.Navigator>
  );
}