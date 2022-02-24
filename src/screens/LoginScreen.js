import React, {useState} from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    ImageBackground,
  } from "react-native";

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

        return ( 
            <ImageBackground style={styles.BgImgStyle} 
            source={require('../assets/Images/BgImage.jpg')}>
              <Image style={styles.WelcomeLogo} source={require('../assets/Images/logo.png')} />
              <View style={styles.inputView}>
                <TextInput
                  style={styles.TextInput}
                  placeholder="Email Address"
                  placeholderTextColor="black"
                  onChangeText={(email) => setEmail(email)}
                  value={email}
                />
              </View>
         
              <View style={styles.inputView}>
                <TextInput
                  style={styles.TextInput}
                  placeholder="Password"
                  placeholderTextColor="black"
                  secureTextEntry={true}
                  onChangeText={(password) => setPassword(password)}
                  value={password}
                />
              </View>
         
              <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('HomeScreen')}>
                <Text style={styles.loginText}>LOGIN</Text>
              </TouchableOpacity>

              <TouchableOpacity>
                <Text style={styles.tapFinger}>
                  Tap to Login with fingerprint</Text>
              </TouchableOpacity>

              <TouchableOpacity>
                <Text style={styles.createForgot}>Create a new account</Text>
              </TouchableOpacity>

              <TouchableOpacity>
                <Text style={styles.createForgot}>Forgot Password?</Text>
              </TouchableOpacity>
         
             
              </ImageBackground>
         );
    }

export default LoginScreen;

const styles = StyleSheet.create({
  BgImgStyle: {
      height: '100%',
      width: '100%',
      justifyContent: 'center',
      alignItems:'center',
    },
    image: {
      marginBottom: 40,
    },
    loginText:{
      color:'white',
    },
    inputView: {
      borderRadius: 30,
      width: "80%",
      height: 45,
      marginBottom: 20,
      backgroundColor:'rgba(255, 255,255,0.4)',
      alignItems: "center",
    },
   
    TextInput: {
      height: 50,
      flex: 1,
      padding: 10,
      marginLeft: 20,
      color: 'black'
      
    },
    tapFinger: {
      color:'black',
      fontSize:18,
      margin:'5%',
      fontWeight:'bold'
    },
    createForgot: {
      color:'black',
      fontSize:16,
      margin:'3%',
      fontWeight:'bold'
    },
    loginBtn: {
      width: "80%",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: '5%',
      backgroundColor: "#213826",
    },
    WelcomeLogo:{
      height: '20%', 
      width: '48%',
      margin:'10%',
      
    },
  });
 