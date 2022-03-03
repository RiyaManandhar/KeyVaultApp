import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen, RegistrationController,ForgotPasswordScreen,CreateEncryptionKey, 
  DrawerNavigators
} from "../screens/index";

const Stack = createNativeStackNavigator();

export function StackNavigatorContainer({user,signOut, biometricAuth}) {
  return (
      <Stack.Navigator screenOptions={{
        headerStyle: {backgroundColor: '#72C99A',},
        headerTintColor: '#fff',
        headerTitleStyle: {fontWeight: 'bold',},
    }}>

{user ? (
          <>
              {/* if the user is signed in */}
              <Stack.Screen name="Drawer" options={{ headerShown: false}}>
                  {props => <DrawerNavigators {...props} extraData={user}/>}
              </Stack.Screen>
              
          </>

        ) : (
          <>
              {/* if the user is not signed in */}
              <Stack.Screen name="Login" options={{ headerShown: false}}>
                  {props => <LoginScreen {...props} executeBiometrics={biometricAuth}/>}
                </Stack.Screen>
              <Stack.Screen options={{ headerShown: false }} name="Registration" component={RegistrationController} />
              <Stack.Screen options={{ headerShown: true }} name="CreateEncryptionKey" component={CreateEncryptionKey}
                                 />
              <Stack.Screen options={{ headerShown: true }} name="ForgotPassword" component={ForgotPasswordScreen}
                                 />
          </>
          )}
      </Stack.Navigator>
  );
}