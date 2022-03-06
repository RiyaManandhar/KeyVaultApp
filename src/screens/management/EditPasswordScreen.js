import React, {useContext, useEffect, useState} from 'react'
import {Alert,View,Text} from 'react-native'
import {firebase} from '../../config/FirebaseConfig'
import SettingsContext from '../../contexts/SettingsContext';
import CryptoES from "crypto-es";
import PasswordGeneration from "../../models/PasswordGeneration";

import styles from '../../Styles/styles';
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import {TextBoxInput} from "../../components/TextBoxInput";
import {Picker} from "@react-native-picker/picker";
import {colourPalette} from "../../constants/ColourPalette";
import {ClickableButton} from "../../components/ClickableButton";
/**
 * Controller Method for the Edit Password Screen
 * @param props application props
 * @returns {JSX.Element} edit password screen render
 */
export default function EditPasswordScreen(props) {
    // States to store entity information
    const [passwordEntryName, setPasswordEntryName] = useState('')
    const [usernameText, setUsernameText] = useState('')
    const [passwordText, setPasswordText] = useState('')
    const [selectedColour, setSelectedColour] = useState("#002366");
    const [passphrase, setPassphrase] = useState('');

    // Settings context
    const settingsContext = useContext(SettingsContext);

    // user and entity information
    const {userId, entityId} = props.route.params
    const userID = userId
    const entityID = entityId

    /**
     * When entering this page, populate the information states using the firestore database
     */
    useEffect(() => {
        let pPhrase;

        firebase.firestore().collection('users/').doc(userID).get().then((snapshot) => {
            // Set decryption passphrase
            let data = snapshot.data()
            pPhrase = data.passphrase;
            setPassphrase(data.passphrase.toString());
        }, [])
        // Get password information for the entity which has been passed in
        firebase.firestore().collection('users/' + userID + '/passwords').doc(entityID).get().then((snapshot) => {
            let data = snapshot.data()
            // decrypt username/email address and password text
            let decryptedPasswordText = CryptoES.AES.decrypt(data.password, pPhrase);
            let decryptedUsernameText = CryptoES.AES.decrypt(data.userEmail, pPhrase);
            // Set entry name
            setPasswordEntryName(data.name)
            // Set username/email address and password to the decrypted text
            setUsernameText(decryptedUsernameText.toString(CryptoES.enc.Utf8))
            setPasswordText(decryptedPasswordText.toString(CryptoES.enc.Utf8))
            // Set accent colour in the colour picker
            setSelectedColour(data.accent)
        }, []);

    }, [])

    /**
     * When the generate button is pressed, then call the password generation model.
     * SettingsContext is used to pass in the generation parameters here. This can be modified in the Generation Options screen.
     */
    const handleGeneratePassword = () => {
        PasswordGeneration(
            settingsContext.includeUppercase,
            settingsContext.includeLowercase,
            settingsContext.includeNumbers,
            settingsContext.includeSymbols,
            settingsContext.passwordLength,
            setPasswordText);
    }

    /**
     * When the add button is pressed, then encrypt the information and update the firebase database
     */
    const onAddButtonPress = () => {
        if (passwordEntryName.length > 0 && usernameText.length > 0 && passwordText.length > 0) {
            // encrypt username and password text using the encryption/decryption key we passed in on initial load
            let encryptedPasswordText = CryptoES.AES.encrypt(passwordText, passphrase);
            let encryptedUsernameText = CryptoES.AES.encrypt(usernameText, passphrase);

            // Individually update values in order to minimise the chance of issues happening when updating the database
            let db = firebase.firestore();
            db.collection('users/' + userID + '/passwords').doc(entityID).update({name: passwordEntryName});
            db.collection('users/' + userID + '/passwords').doc(entityID).update({userEmail: encryptedUsernameText.toString()});
            db.collection('users/' + userID + '/passwords').doc(entityID).update({password: encryptedPasswordText.toString()});
            db.collection('users/' + userID + '/passwords').doc(entityID).update({accent: selectedColour});
            db.collection('users/' + userID + '/passwords').doc(entityID).update({modificationDate: firebase.firestore.FieldValue.serverTimestamp()});

            // When updating has been completed, then go back to the view password screen
            props.navigation.goBack('ViewPasswordScreen', {
                passwordEntityId: entityID,
                userId: userID,
            });

        } else {
            // Otherwise show an error if not all details have been entered.
            Alert.alert(
                "Incomplete entry details",
                "Please ensure you have a name, username/email and password in the selection area.",
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
     * Go to the generation options screen. Pass in the previous screen name in too (This is explained further in GenerateScreen).
     */
    const onGenerateButtonPress = () => {
        props.navigation.navigate("GenerateScreen", {previousScreen: 'EditPasswordScreen'});
    }

    // Return edit screen render view
    return (
       
        <KeyboardAwareScrollView
            style={{flex: 1, width: '100%',backgroundColor:'#d0f4dc'}}
            keyboardShouldPersistTaps="always">
                <View style={{flex: 1, alignItems:'center',marginTop:30}}>
                {/* Entity Text Input Fields */}
                <TextBoxInput placeholder={'Name'} textSetter={setPasswordEntryName} value={passwordEntryName}/>
                <TextBoxInput placeholder={'Username / Email'} textSetter={setUsernameText} value={usernameText}/>
                <TextBoxInput placeholder={'Password'} textSetter={setPasswordText} value={passwordText}/>

                <View style={{margin:10}}>
                <Text style={styles.pick}>Pick a colour:</Text>
                </View>



                <View style={styles.colorView}>
                {/* Colour Picker */}
                <Picker style={styles.picker} selectedValue={selectedColour} onValueChange={(colour) => {setSelectedColour(colour)}}>
                    {
                        colourPalette.map(colour => <Picker.Item label={colour.label} value={colour.colour} key={colour.label}/>)
                    }
                </Picker>
                </View>

                {/* Buttons */}
                <ClickableButton buttonText={"Auto Generate Password"} onPressMethod={handleGeneratePassword}/>
                <ClickableButton buttonText={"Settings"} onPressMethod={onGenerateButtonPress}/>
                <ClickableButton buttonText={"Update"} onPressMethod={onAddButtonPress}/>
                </View>
        
        </KeyboardAwareScrollView>
     
    )
}
