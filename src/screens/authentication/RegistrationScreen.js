import React from 'react';
import {Text, View, Image, TextInput,TouchableOpacity,ImageBackground,KeyboardAvoidingView } from "react-native";
import { ClickableButton } from '../../components/ClickableButton';
import { TextBoxInput } from '../../components/TextBoxInput';
import { TextBoxPassword } from '../../components/TextBoxPassword';
import styles from "../../Styles/styles"


export function RegistrationScreen({setFullName, fullName, setEmail, email, setPassword, password, setConfirmPassword, confirmPassword, onRegisterPress, onFooterLinkPress}){

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
                    <TextBoxInput placeholder={'Full Name'} 
                              textSetter={setFullName} 
                              value={fullName}/>

                      {/* Text input boxes */}
                    <TextBoxInput placeholder={'Email Address'} 
                              textSetter={setEmail} 
                              value={email}/>
                    
                    {/* Text Password input boxes */}
                    <TextBoxPassword placeholder={'Password'} 
                              textSetter={setPassword} 
                              value={password}/>

                    {/* Confirm Password */}
                    <View style={styles.inputView}>
                    <TextInput
                        style={styles.textInput}
                        placeholderTextColor="black"
                        secureTextEntry={true}
                        placeholder='Confirm Password'
                        onChangeText={(text) => setConfirmPassword(text)}
                        value={confirmPassword}
                        autoCapitalize="none"
                    />
                    </View>
              
                      {/* Register buttons */}
                    <ClickableButton buttonText={"Register"} onPressMethod={onRegisterPress}/>

                     {/* Already have an account? Login */}
                    <TouchableOpacity onPress={onFooterLinkPress} >
                        <Text style={styles.createNewAndForgotPassword}> Already have an account?  Log in</Text>
                    </TouchableOpacity>
                  
                </ImageBackground>
                </KeyboardAvoidingView>
           );
}
