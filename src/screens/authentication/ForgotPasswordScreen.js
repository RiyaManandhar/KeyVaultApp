import React, {useState} from 'react'
import {Alert, View,ImageBackground,Text,Image,KeyboardAvoidingView} from 'react-native'
import {firebase} from "../../config/FirebaseConfig";
import {ClickableButton} from "../../components/ClickableButton";
import { TextBoxInput } from '../../components/TextBoxInput';
import styles from '../../style/styles';

/**
 * Forgot Password Screen
 * @param props application props
 * @returns {JSX.Element} forgot password screen view
 */
export default function ForgotPasswordScreen(props) {
    // track email text input
    const [email, setEmail] = useState('')

    /**
     * Advisory Prompt once a password request has been sent.
     */
    const sentMessage = () => {
        Alert.alert(
            "Recovery Email Address Sent!",
            "If the address you submitted was valid, you should receive a link to recover your account.",
        );
    }

    /**
     * Confirmation Button Listener.
     * When pressed, send a password reset request for the email that has been requested.
     * For security reasons, the application will not display whether the email address is valid or not.
     */
    const onConfirmationPress = () => {
        firebase.auth().sendPasswordResetEmail(email)
            .then(() => {
                sentMessage(); // show advisory prompt after sending message
            })
            .catch(() => {
                sentMessage(); // even if the email is invalid, still show the advisory prompt to obfuscate emails.
            });

        // navigate back to the login screen
        props.navigation.navigate("Login")
    }

    /**
     * Return contents:
     * - Email Input Box
     * - Recovery Email Button
     */
    return (
        <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
           {/* Background  Image*/}
            <ImageBackground style={styles.bgImgStyle} 
                          source={require('../../assets/Images/BgImage.jpg')}>

                {/* Forgot page image*/}
                 <Image style={styles.forgotImage} 
                    source={require('../../assets/Images/forgot-b.png')} />
                
                 {/* Black box container & Texts*/}
                <View style={styles.forgotBox}>
                    <Text style={styles.forgotText}>Forgot Password?</Text>
                
                {/* Email for Forgot password*/}
                <TextBoxInput placeholder={'E-mail Address'} textSetter={setEmail} value={email}/>

                 {/*Send Recovery Email Button */}
                <ClickableButton buttonText={"Send Recovery Email"} onPressMethod={onConfirmationPress}/>

                </View>
           </ImageBackground>
        </KeyboardAvoidingView>
    )
}
