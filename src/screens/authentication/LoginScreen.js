import React, {useState} from 'react'
import {Text, View, Image, TextInput,TouchableOpacity,ImageBackground } from "react-native";
import { TextBoxInput } from '../../components/TextBoxInput';
import { TextBoxPassword } from '../../components/TextBoxPassword';
import styles from "../../Styles/styles";


const LoginScreen = ({props}) => {
  const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


     /**
     * Listener method create new account - Go to the Registration Screen.
     */
      const onCreateNewAccountPress = () => {
        props.navigation.navigate('Registration')
    }

    /**
     * Listner method for Forgot Password - Go to the Forgot Password Screen.
     */
    const onForgotPasswordPress = () => {
        props.navigation.navigate('ForgotPassword')
    }

        return ( 
          <ImageBackground style={styles.bgImgStyle} 
                          source={require('../../assets/Images/BgImage.jpg')}>

              <Image style={styles.loginLogo} 
                    source={require('../../assets/Images/logo.png')} />

              <View style={styles.inputView}>
                <TextBoxInput placeholder={'Email Address'} 
                            textSetter={setEmail} 
                            value={email}/>
              </View>
         
              <View style={styles.inputView}>
              <TextBoxPassword placeholder={'Password'} 
                            textSetter={setPassword} 
                            value={password}/>
              </View>
         
              <TouchableOpacity style={styles.loginBtn} >
                <Text style={styles.buttonText}>LOGIN</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.finger}>
              <Image  source={require('../../assets/Images/fingerprint.png')} style={styles.fingerprintImage} />
                <Text style={styles.tapFingerText}>
                 Tap to Login with fingerprint
                  </Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={onCreateNewAccountPress}>
                <Text style={styles.createNewAndForgotPassword}>Create a new account</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={onForgotPasswordPress}>
                <Text style={styles.createNewAndForgotPassword}>Forgot Password?</Text>
              </TouchableOpacity>
         
             
              </ImageBackground>
         );
    }

export default LoginScreen;