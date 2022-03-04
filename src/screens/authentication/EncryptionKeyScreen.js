import React from 'react'
import {Text, View,ImageBackground,KeyboardAvoidingView} from "react-native";
import styles from "../../Styles/styles";
import { ClickableButton } from '../../components/ClickableButton';
import { TextBoxInput } from '../../components/TextBoxInput';

/**
 * Encryption Key Screen
 * @param setPassphrase encryption key setter
 * @param passphrase encryption key
 * @param setConfirmPassphrase confirm encryption key setter
 * @param confirmPassphrase confirm encryption key
 * @param onGenerateEncryptionKey encryption key generator method
 * @param copyEncryptionKey encryption key to clipboard method
 * @param onRegisterPress register method
 * @returns {JSX.Element} encryption key setup view
 */
export function EncryptionKeyScreen({   setPassphrase,
                                        passphrase,
                                        setConfirmPassphrase,
                                        confirmPassphrase,
                                        onGenerateEncryptionKey,
                                        copyEncryptionKey,
                                        onRegisterPress
                                    }) {
    return (
        <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.containerEncryption}
      >
           {/* Background  Image*/}
            <ImageBackground style={styles.bgImgStyle} 
                          source={require('../../assets/Images/BgImage.jpg')}>

            {/* Encryption Page Box*/}
             <View style={styles.encrypBox}>

                 {/* Texts inside Encryption Page Box*/}
                <View>
                    <Text style={styles.textEncry}>Key Vault encrypts your information using Advanced Encryption Standard.</Text>
                    <Text style={styles.textEncry}>For this to work, an encryption key is needed.</Text>
                    <Text style={styles.textEncry}>It is recommend that you copy this key for future reference.</Text>
                </View>
                
                {/* Text input boxes */}
                <TextBoxInput placeholder={'Encryption Passphrase'} 
                            textSetter={setPassphrase} 
                            value={passphrase}/>

                {/* Text input boxes */}   
                <TextBoxInput placeholder={'Confirm Encryption Passphrase'} 
                            textSetter={setConfirmPassphrase} 
                            value={confirmPassphrase}/>

                {/* Button for Auto Generate Encryption Key */}  
                <ClickableButton  buttonText={"Auto Generate Encryption Key"} onPressMethod={onGenerateEncryptionKey}/>
        

                    {/* Button for Copy Encryption Key to Clipboard */}  
                <ClickableButton buttonText={"Copy Encryption Key to Clipboard"} onPressMethod={copyEncryptionKey}/>
                
               </View>
                {/* Button for Complete Registration */} 
                <ClickableButton buttonText={"Complete Registration"} onPressMethod={onRegisterPress}/>
             
              </ImageBackground>

         </KeyboardAvoidingView>
    );
}
