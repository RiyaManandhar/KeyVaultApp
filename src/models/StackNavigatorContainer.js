import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen, RegistrationController,ForgotPasswordScreen,
  GenerateScreen,
  CreateEncryptionKey, 
  ViewPasswordScreen,
  AddPasswordScreen,
  EditPasswordScreen,
  HomeScreen,
  ProfileScreen,
  SettingsScreen,
} from '../../index'
import CustomDrawer from '../components/CustomDrawer';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function Root({extraDatas,signOut}) {
  return (
    <Drawer.Navigator independent="true"
    drawerContent={props => <CustomDrawer {...props} onSignOut={signOut}/>}
    screenOptions={{
      headerShown: true,
      drawerActiveBackgroundColor: '#8ad2a6',
      drawerActiveTintColor: '#fff',
      drawerInactiveTintColor: '#333',
      drawerLabelStyle: {
        marginLeft: -25,
       // marginRight: 250,
        //fontFamily: 'Roboto-Medium',
        fontSize: 15,
      },
      headerStyle: {backgroundColor: '#72C99A',},
      headerTintColor: '#fff',
      headerTitleStyle: {fontWeight: 'bold',},
    }}>
       <Drawer.Screen name="Passwords" options={{drawerLabel:'Home', drawerIcon: ({color}) => (
            <Ionicons name="home-outline" size={22} color={color} />
          ),}}> 
                {props => <HomeScreen {...props} extraData={extraDatas}/>}
           </Drawer.Screen>
     <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="person-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="settings-outline" size={22} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export function StackNavigatorContainer({user,signOut, biometricAuth}) {
  return (
      <Stack.Navigator screenOptions={{
        headerStyle: {backgroundColor: '#72C99A',},
        headerTintColor: '#fff',
        headerTitleStyle: {fontWeight: 'bold',},
    }}>

{user ? (
          <>
              {/* if the user is signed in*/}
              <Stack.Screen name="Root"  options={{
          headerShown : false,}}>
                {props => <Root {...props} extraDatas={user} options={{}}/>}
                </Stack.Screen>
             <Stack.Screen name="Passwords">
                        {props => <HomeScreen {...props} extraData={user} options={{}}/>}
                    </Stack.Screen>
              <Stack.Screen name="AddPasswordScreen" component={AddPasswordScreen}
                                  options={{title: 'Add Password Entry'}}/>
              <Stack.Screen name="ViewPasswordScreen" component={ViewPasswordScreen}/>
              <Stack.Screen name="EditPasswordScreen" component={EditPasswordScreen}
                                  options={{title: 'Edit Password Details'}}/>
              <Stack.Screen name="GenerateScreen" component={GenerateScreen}
                                  options={{title: 'Password Options'}}/>
              

                    
              
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