import React, {useState} from 'react'
import {Text, Image,TouchableOpacity,ImageBackground,View } from "react-native";
import { ClickableButton } from '../../components/ClickableButton';
import { TextBoxInput } from '../../components/TextBoxInput';
import { TextBoxPassword } from '../../components/TextBoxPassword';
import styles from "../../Styles/styles";


const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')



        return ( 
         <View style={styles.container}>
            <ImageBackground style={styles.bgImgStyle} 
                          source={require('../../assets/Images/BgImage.jpg')}>

              <Image style={styles.loginLogo} 
                    source={require('../../assets/Images/logo.png')} />

             
                <TextBoxInput placeholder={'Email Address'} 
                            textSetter={setEmail} 
                            value={email}/>
            
              <TextBoxPassword placeholder={'Password'} 
                            textSetter={setPassword} 
                            value={password}/>

              <ClickableButton buttonText={"LOGIN"} />

              <TouchableOpacity style={styles.finger}>
              <Image  source={require('../../assets/Images/fingerprint.png')} style={styles.fingerprintImage} />
                <Text style={styles.tapFingerText}>
                 Tap to Login with fingerprint
                  </Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate('Registration')} >
                <Text style={styles.createNewAndForgotPassword}
                >Create a new account</Text>
              </TouchableOpacity>

              <TouchableOpacity>
                <Text style={styles.createNewAndForgotPassword}>Forgot Password?</Text>
              </TouchableOpacity>
         
             
              </ImageBackground>

         </View>
         );
    }

export default LoginScreen;