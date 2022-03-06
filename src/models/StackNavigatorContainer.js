import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen, RegistrationController,ForgotPasswordScreen,GenerateScreen,
  CreateEncryptionKey, ViewPasswordScreen,HomeScreen,AddPasswordScreen,EditPasswordScreen
} from '../../index'
import DrawerNavigators from './DrawerNavigators';

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
             {/* <Stack.Screen name="Passwords">
                        {props => <HomeScreen {...props} extraData={user} options={{}}/>}
                    </Stack.Screen>
              <Stack.Screen name="AddPasswordScreen" component={AddPasswordScreen}
                                  options={{title: 'Add Password Entry'}}/>
              <Stack.Screen name="ViewPasswordScreen" component={ViewPasswordScreen}/>
              <Stack.Screen name="EditPasswordScreen" component={EditPasswordScreen}
                                  options={{title: 'Edit Password Details'}}/>
              <Stack.Screen name="GenerateScreen" component={GenerateScreen}
                                  options={{title: 'Password Options'}}/>*/}
                    
              
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