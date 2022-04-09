import React, {useState, useEffect} from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen, RegistrationController,ForgotPasswordScreen,
  GenerateScreen,
  CreateEncryptionKey, 
  ViewPasswordScreen,
  AddPasswordScreen,
  EditPasswordScreen,EditProfileScreen,
  HomeScreen,
  ProfileScreen,
  SettingsScreen,
} from '../../index'
import CustomDrawer from '../components/CustomDrawer';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { createDrawerNavigator } from '@react-navigation/drawer';
import OnboardingScreen from '../screens/onboarding/OnboardingScreen';


import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function Root({extraDatas,onSignout}) {
  return (
    <Drawer.Navigator independent="true"
    drawerContent={props => <CustomDrawer {...props} onSignOut={onSignout} drawerData={extraDatas}/>}
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

           <Drawer.Screen name="Profile" options={{drawerLabel:'Profile', drawerIcon: ({color}) => (
            <Ionicons name="person-outline" size={22} color={color} />
          ),}}> 
                {props => <ProfileScreen {...props} extraData={extraDatas}/>}
           </Drawer.Screen>

    
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

  const [isFirstLaunch, setIsFirstLaunch] = useState(null);
  let routeName;

  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then((value) => {
      if (value == null) {
        AsyncStorage.setItem('alreadyLaunched', 'true'); // No need to wait for `setItem` to finish, although you might want to handle errors
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    }); // Add some error handling, also you can simply do setIsFirstLaunch(null)
  
  }, []);

  if (isFirstLaunch === null) {
    return null; // This is the 'tricky' part: The query to AsyncStorage is not finished, but we have to present something to the user. Null will just render nothing, so you can also put a placeholder of some sort, but effectively the interval between the first mount and AsyncStorage retrieving your data won't be noticeable to the user. But if you want to display anything then you can use a LOADER here
  } else if (isFirstLaunch == true) {
    routeName = 'Onboarding';
  } else {
    routeName = 'Login';
  }


  
  
  return (


      <Stack.Navigator initialRouteName={routeName} screenOptions={{
        headerStyle: {backgroundColor: '#72C99A',},
        headerTintColor: '#fff',
        headerTitleStyle: {fontWeight: 'bold',},
    }}>

{user ? (
          <>
              {/* if the user is signed in*/}
              <Stack.Screen name="Root"  options={{
          headerShown : false,}}>
                {props => <Root {...props} extraDatas={user} onSignout={signOut} options={{}}/>}
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
                <Stack.Screen name="EditProfileScreen" component={EditProfileScreen}
                                  options={{title: 'Edit Profile'}}/>

                    
              
          </>

        ) : (
          <>
              {/* if the user is not signed in */}
              <Stack.Screen options={{ headerShown: false }} name="OnboardingScreen" component={OnboardingScreen} />
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