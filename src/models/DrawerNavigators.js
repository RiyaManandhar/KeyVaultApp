import * as React from 'react';
import 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CustomDrawer from '../components/CustomDrawer';

import { HomeScreen,ProfileScreen,SettingsScreen,AddPasswordScreen,GenerateScreen
} from "../../index";


const Drawer = createDrawerNavigator();
const AppStack = createNativeStackNavigator();

function Root() {
  return (
    <AppStack.Navigator  screenOptions={{
      headerShown: true,
      headerStyle: {backgroundColor: '#72C99A',},
      headerTintColor: '#fff',
      headerTitleStyle: {fontWeight: 'bold',},
    }}>
      <AppStack.Screen name="AddPasswordScreen" component={AddPasswordScreen} 
                      options={{title: 'Add Password Entry'}}/>
     
      <AppStack.Screen name="GenerateScreen" component={GenerateScreen}
                                  options={{title: 'Password Options'}}/>
     
    </AppStack.Navigator>
  );
}


export default function DrawerNavigators({extraData}) {
 
  return (
   
    <NavigationContainer independent={true}>
       <Drawer.Navigator initialRouteName="Passwords"
       
      drawerContent={props => <CustomDrawer {...props} />}
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
           {props => <HomeScreen {...props} extraInfos={extraData}/>}
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
      <Drawer.Screen
        name="Root" component={Root}
        options={{
          headerShown : false,
          drawerLabel: () => null,
          drawerActiveBackgroundColor: () => null,
          drawerLabelStyle:() => null,
        }}
      />
    </Drawer.Navigator>
    </NavigationContainer>
  );
}