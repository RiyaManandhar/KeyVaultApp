import React from 'react';
import {View,Text, SafeAreaView, ImageBackground,TouchableOpacity} from 'react-native';
import {Avatar} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from '../../style/styles';
import EditProfileScreen  from './EditProfileScreen';
import {ClickableButton} from "../../components/ClickableButton";

export default function ProfileScreen(props){

  /**
       * Go to the generation options screen. Pass in the previous screen name in too (This is explained further in GenerateScreen).
       */
   const onEditPress = () => {
    props.navigation.navigate("EditProfileScreen", {previousScreen: 'ProfileScreen'});
}


  return (
    <ImageBackground style={styles.bgImgStyle} 
    source={require('../../assets/Images/BgImage.jpg')}>

         {/* Background  Image*/}
         
        <Avatar.Image size={150} source={require('../../assets/Images/user.png')} style={styles.avatarImage}/>
     

      <View style={styles.userInfoSection}>
      <View style={styles.row}>
          <Ionicons name="person" color="black" size={20}/>
          <Text style={styles.userText}>Riya Manandhar</Text>
        </View>
        <View style={styles.row}>
          <Ionicons name="location" color="black" size={20}/>
          <Text style={styles.userText}>Kolkata, India</Text>
        </View>
        <View style={styles.row}>
          <Ionicons name="call" color="black" size={20}/>
          <Text style={styles.userText}>+91-900000009</Text>
        </View>
        <View style={styles.row}>
          <Ionicons name="mail" color="black" size={20}/>
          <Text style={styles.userText}>john_doe@email.com</Text>
        </View>

      </View>

        <ClickableButton buttonText={"Edit"} onPressMethod={onEditPress}/>
        


             {/* Login buttons 
             <TouchableOpacity
                    style={styles.clickableBtn}
                    onPress={() => props.navigation.navigate('EditProfileScreen')}
                    >
                    <Text style={styles.buttonText}>Edit</Text>
                </TouchableOpacity>*/}


                
    </ImageBackground>
  );
}

