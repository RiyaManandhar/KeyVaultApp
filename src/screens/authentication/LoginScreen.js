import React, {useState,useContext,useEffect} from 'react'
import {Alert,Text, Image,TouchableOpacity,ImageBackground,View,KeyboardAvoidingView } from "react-native";
import { TextBoxInput } from '../../components/TextBoxInput';
import { TextBoxPassword } from '../../components/TextBoxPassword';
import {AuthContext} from "../../contexts/AuthContext";
import styles from "../../style/styles";
import {firebase} from '../../config/FirebaseConfig'
import * as LocalAuthentication from 'expo-local-authentication';

/**
 * Login Screen
 * @param props application props
 * @returns {JSX.Element} login screen view
 */

const LoginScreen = (props) => {
  const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // User authentication context
    const {signIn} = useContext(AuthContext);
    //const signIn(email, password) => useContext(AuthContext);

    // Keep track of whether to enable biometric authentication or not
    let biometricsEnabled = false;

    // On entering this page, determine whether biometrics should be enabled or not
    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            biometricsEnabled = !!user;
            // enable biometrics based on whether a user is present in the state
            if (user) {
                biometricsEnabled = true;
            } else {
                biometricsEnabled = false;
            }
        });

        let compatible = LocalAuthentication.hasHardwareAsync().then(); // check hardware supports biometrics
        let biometricRecords = LocalAuthentication.isEnrolledAsync() // check phone has biometrics enrolled
        if (!compatible) {
            biometricsEnabled = false;
        }

        if (!biometricRecords) {
            biometricsEnabled = false;
        }
    });

    /**
     * When the 'Sign In with Biometrics' Button has been pressed, handle biometric authentication.
     * @returns {Promise<void>} promise
     */
    const handleBiometrics = async () => {
        // check biometrics are enabled
        if (biometricsEnabled) {
            // Send authentication request and get response
            let result = await LocalAuthentication.authenticateAsync({
                disableDeviceFallback: true,
                fallbackLabel: "\n",
                promptMessage: "Sign back in to the previous account",
                cancelLabel: 'Cancel',
            });
            // if successfully authenticated then sign in to previously stored user
            if (result.success) {
                props.executeBiometrics();
            // Otherwise show an error message showing authentication failure
            } else {
                Alert.alert(
                    "Failed to Authenticate",
                    "Could not authenticate with biometric credentials. Please sign in using your email address and password.",
                    [
                        {
                            text: "Return",
                            style: "cancel",
                        },
                    ]
                );
            }
            // Otherwise state that biometric authentication is not available
        } else {
            Alert.alert(
                "Could not sign in",
                "Biometric authentication not available. Please sign in using your email address and password.",
                [
                    {
                        text: "Return",
                        style: "cancel",
                    },
                ]
            );
        }
    }

        /**
        * Listener method for Footer Link - Go to the Registration Screen.
        */
        const onFooterLinkPress = () => {
             props.navigation.navigate('Registration')
        }

        /**
        * Listner Method for Forgot Password Link - Go to the Forgot Password Screen.
        */
        const onForgotPasswordLinkPress = () => {
            props.navigation.navigate('ForgotPassword')
        }
        
        /**
     * Return contents:
     * - Email Address Input Box
     * - Password Input Box
     * - Sign in button
     * - Biometric(Fingerprint) sign in button
     * - Create a new account footer
     * - Forgot password footer
         */
        

        return ( 
            <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
          >
                {/* Background  Image*/}
            <ImageBackground style={styles.bgImgStyle} 
                          source={require('../../assets/Images/BgImage.jpg')}>
             
            {/* Logo */}
              <Image style={styles.logo} 
                    source={require('../../assets/Images/logo.png')} />

              {/* Text input boxes */}
                <TextBoxInput placeholder={'Email Address'} 
                            textSetter={setEmail} 
                            value={email}/>
            
            {/* Text Password input boxes */}
              <TextBoxPassword placeholder={'Password'} 
                            textSetter={setPassword} 
                            value={password}/>

               {/* Login buttons */}
               <TouchableOpacity
                    style={styles.clickableBtn}
                    onPress={() => signIn({email, password})}>
                    <Text style={styles.buttonText}>LOGIN</Text>
                </TouchableOpacity>

                {/* Fingerprint */}
              <TouchableOpacity style={styles.finger} onPress={() => handleBiometrics()}>
              <Image  source={require('../../assets/Images/fingerprint.png')} style={styles.fingerprintImage} />
                <Text style={styles.tapFingerText} enabled={biometricsEnabled}>
                 Tap to Login with fingerprint
                  </Text>
              </TouchableOpacity>
                

                {/* Create new account button */} 
              <TouchableOpacity onPress={onFooterLinkPress} >
                <Text style={styles.createNewAndForgotPassword}
                >Create a new account</Text>
              </TouchableOpacity>
              
              {/* Forgot Password button */} 
              <TouchableOpacity>
                <Text style={styles.createNewAndForgotPassword} onPress={onForgotPasswordLinkPress}>Forgot Password?</Text>
              </TouchableOpacity>
            
            
              </ImageBackground>
              </KeyboardAvoidingView>
             
         );
    }

export default LoginScreen;