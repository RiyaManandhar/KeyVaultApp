import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';


const CustomDrawer = props => {

  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{backgroundColor: '#8ad2a6'}}>
        <ImageBackground
          source={require('../assets/Images/BgImage.jpg')}
          style={{padding: 20}}>
          <Image
            source={require('../assets/Images/logo.png')}
            style={{height: 180, width: 200, borderRadius: 20, margin: 10,resizeMode:'contain',}}
          />
          <Text
            style={{
              color: 'black',
              fontSize: 20,fontWeight:'bold',
              //fontFamily: 'Roboto-Medium',
              marginBottom: 5,
            }}>
            {props.drawerData.fullName}
          </Text>
        </ImageBackground>
        <View style={{flex: 1, backgroundColor: '#fff', paddingTop: 10}}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={{padding: 20, borderTopWidth: 1, borderTopColor: '#ccc'}}>
        <TouchableOpacity onPress={props.onSignOut} style={{paddingVertical: 15}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons name="exit-outline" size={22} />
            <Text
              style={{
                fontSize: 15,
                //fontFamily: 'Roboto-Medium',
                marginLeft: 5,
              }}>
              Sign Out
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;