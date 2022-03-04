import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import ProfileScreen  from '../screens/home/ProfileScreen';
import HomeScreen  from '../screens/home/HomeScreen';
import SettingsScreen from '../screens/home/SettingsScreen';
import CustomDrawer from '../components/CustomDrawer';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

export default function DrawerNavigators({extraData}) {
  return (
   
    <NavigationContainer independent={true}>
       <Drawer.Navigator
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
          <Drawer.Screen name="Passwords" options={{ drawerIcon: ({color}) => (
            <Ionicons name="person-outline" size={22} color={color} />
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
    </Drawer.Navigator>
    </NavigationContainer>
  );
}