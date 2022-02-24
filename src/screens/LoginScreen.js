import React, {useState} from 'react'
import { StyleSheet,Text, View, Image, TextInput,TouchableOpacity,ImageBackground } from "react-native";

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
                <Text style={styles.buttonText}>LOGIN</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.finger}>
              <Image  source={require('../assets/Images/fingerprint.png')} style={styles.fingerprint} />
                <Text style={styles.tapFinger}>
                 Tap to Login with fingerprint
                  </Text>
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
  
  finger:{
    display:'flex',
    flexDirection:'row',
  },
  BgImgStyle: {
      height: '100%',
      width: '100%',
      justifyContent: 'center',
      alignItems:'center',
    },
    image: {
      marginBottom: 40,
    },
    buttonText:{
      color:'white',
      fontWeight: '700',
    },
    inputView: {
      width: "80%",
    },
   TextInput:{
    backgroundColor:'rgba(255, 255,255,0.4)',
    textAlign:'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 30,
    margin: 5,
   },
    fingerprint:{
      height:30,
      width:30,
      marginTop:'5%',
      marginRight:'-3%'

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
 