import React, {useState} from 'react';
import {Text, View, Image, TextInput,TouchableOpacity,ImageBackground } from "react-native";
import { ClickableButton } from '../../components/ClickableButton';
import { TextBoxInput } from '../../components/TextBoxInput';
import { TextBoxPassword } from '../../components/TextBoxPassword';
import styles from "../../Styles/styles"

const RegistrationScreen = () => {

    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

        return ( 
            <ImageBackground style={styles.bgImgStyle} 
                            source={require('../../assets/Images/BgImage.jpg')}>
  
                <Image style={styles.loginLogo} 
                      source={require('../../assets/Images/logo.png')} />
  
                    <TextBoxInput placeholder={'Full Name'} 
                              textSetter={setFullName} 
                              value={fullName}/>

                    <TextBoxInput placeholder={'Email Address'} 
                              textSetter={setEmail} 
                              value={email}/>
                
                    <TextBoxPassword placeholder={'Password'} 
                              textSetter={setPassword} 
                              value={password}/>

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
              
                    <ClickableButton buttonText={"Register"} />

                    <TouchableOpacity>
                        <Text style={styles.createNewAndForgotPassword}> Already have an account? Log in</Text>
                    </TouchableOpacity>
                  
                </ImageBackground>
           );
}
export default RegistrationScreen;