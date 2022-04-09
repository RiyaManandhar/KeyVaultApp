import React, {useEffect, useState,Fragment} from 'react'
import {Alert, Platform,Text, TextInput, View} from 'react-native'
import * as Clipboard from 'expo-clipboard';
import {firebase} from '../../config/FirebaseConfig'
import CryptoES from "crypto-es";
import {OptionsMenuView} from "../../components/OptionsMenuView";

import styles from '../../style/styles';
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import {ClickableButton} from "../../components/ClickableButton";
import { TextBoxInput } from '../../components/TextBoxInput';

// Identify system Operating System
let OPERATING_SYSTEM = Platform.OS;

/**
 * Controller Method for the Password View Screen
 * @param props application props
 * @returns {JSX.Element} password screen render
 */
export default function ViewPasswordScreen(props) {
    // user and entity firebase information
    const {passwordEntityId, userId} = props.route.params
    let id = passwordEntityId
    let userID = userId

    // States for managing retrieved information
    const [entityName, setEntityName] = useState('');
    const [entityUserEmail, setEntityUserEmail] = useState('');
    const [entityPassword, setEntityPassword] = useState('');
    const [passwordRevealed, setPasswordRevealed] = useState(Boolean);
    const [notesText, setNotesText] = useState('');

    // Decryption key
    let passphrase;

    // Determine operating type
    let largeButtonsEnabled;
    if (OPERATING_SYSTEM === "web" || OPERATING_SYSTEM === "windows" || OPERATING_SYSTEM === "macos") {
        largeButtonsEnabled = true;
    } else {
        largeButtonsEnabled = false;
    }

    /**
     * When the user enters this page, retrieve the decryption key from firebase.
     * After this, update the data states.
     * This is also where the overflow options menu is set.
     */
    useEffect(() => {
        // Retrieve decryption key from Firebase
        firebase.firestore().collection('users/').doc(userID).get().then((snapshot) => {
            let data = snapshot.data()
            passphrase = data.passphrase;
        }, [])

        // When in focus (Either when entering the screen or returning from it) update the information states
        props.navigation.addListener('focus', () => {
            updateData();
        });

        if (!largeButtonsEnabled) {
            // If on a mobile device set the title to the entity name, and add an actions menu to the right side of the header.
            props.navigation.setOptions({
                title: entityName, headerRight: (() => (
                    <OptionsMenuView
                        copyUsername={copyUsername}
                        copyEmail={copyEmail}
                        copyPassword={copyPassword}
                        onEditButtonPress={onEditButtonPress}
                        showConfirmDialog={showConfirmDialog}/>
                ))
            });
        }
    });

     /**
     * Copy the username to the system clipboard.
     */
      const copyUsername = () => {
        if (entityName.length > 0) {
            Clipboard.setString(entityName);
        }
    }


    /**
     * Copy the email address  to the system clipboard.
     */
    const copyEmail = () => {
        if (entityUserEmail.length > 0) {
            Clipboard.setString(entityUserEmail);
        }
    }

    /**
     * Copy the password to the clipboard.
     */
    const copyPassword = () => {
        if (entityUserEmail.length > 0) {
            Clipboard.setString(entityPassword);
        }
    }

    /**
     * Update the password entry information from Firebase.
     */
    const updateData = () => {
        firebase.firestore().collection('users/' + userID + '/passwords').doc(id).get().then((snapshot) => {
            let data = snapshot.data()
            // Decrypt Username/Email Address and Password
            let decryptedPasswordText = CryptoES.AES.decrypt(data.password, passphrase);
            let decryptedemailText = CryptoES.AES.decrypt(data.userEmail, passphrase);
            // Set unencrypted entity plaintext information
            setEntityName(data.name);
            setNotesText(data.notes);
            // Set decrypted username/email address and password strings
            setEntityUserEmail(decryptedemailText.toString(CryptoES.enc.Utf8));
            setEntityPassword(decryptedPasswordText.toString(CryptoES.enc.Utf8));
            // Set the password to be hidden using a secured text field
            setPasswordRevealed(false);
        }, [])
    }

    /**
     * When attempting to delete a password entry, show a warning to offer a "last chance" before an entry is deleted
     */
    const showConfirmDialog = () => {
        return Alert.alert(
            "Deleting entry for " + entityName,
            "Are you sure you want to remove this password entry? Once deleted, entries can not be recovered.",
            [
                {
                    text: "Cancel",
                    style: "cancel",
                },
                // if the delete option (Highlighted in red to indicate its destructive behaviour) then call the deletion function
                {
                    text: "Delete",
                    style: "destructive",
                    onPress: () => {
                        onDeleteButtonPress();
                    },
                },
            ]
        );
    };

    /**
     * Function to Delete an entry from the Firestore database.
     */
    const onDeleteButtonPress = () => {
        // Item is deleted from the Firestore passwords collection, with the navigation stack then returned to the home screen
        firebase.firestore().collection('users/' + userID + '/passwords').doc(id).delete().then(() => {
            props.navigation.goBack('Passwords');
        }).catch(() => {
        });
    }

    /**
     * Move to the edit password screen when clicked.
     * User and entity ID is passed through to allow the database to be updated
     */
    const onEditButtonPress = () => {
        props.navigation.navigate('EditPasswordScreen', {userId: userID, entityId: id})
    }

    /**
     * Reveal Button Logic Determiner.
     */
    const onRevealButtonPress = () => {
        if (passwordRevealed === false) {
            setPasswordRevealed(true);
        } else {
            setPasswordRevealed(false);
        }
    }

    /**
     * Notes are updated whenever new information is added or removed to the text box.
     * @param notes text from the notes box
     */
    const onChangeNotesText = (notes) => {
        // update the notes text box state
        setNotesText(notes);
        let db = firebase.firestore();
        db.collection('users/' + userID + '/passwords').doc(id).update({notes: notes});
    }

    // Return Password Screen View passing in all relevant variables and functions from this file
    return (
        <View style={styles.container}>
        <KeyboardAwareScrollView
            style={{flex: 1, width: '100%',backgroundColor:'#d0f4dc'}}
            keyboardShouldPersistTaps="never">
                {/* Entity Information View Box */}
                <View style={styles.encrypBox}>
                    <Text style={styles.titleText}>Account Details</Text>
                    <Text style={styles.text}>Site Name</Text>
                    
                     {/* Site Name Text Box */}
                     <TextBoxInput 
                            textSetter={setEntityName} 
                            value={entityName}
                            selectTextOnFocus={true}
                            editable={false}
                            showSoftInputOnFocus={false}
                            autoCompleteType='off'
                            textContentType='none'
                    />

                    {/* Email Text Box */}
                    <Text style={styles.text}>Email Address</Text>
                    <TextBoxInput 
                            textSetter={setEntityUserEmail} 
                            value={entityUserEmail}
                            selectTextOnFocus={true}
                            editable={false}
                            showSoftInputOnFocus={false}
                            autoCompleteType='off'
                            textContentType='none'
                    />

                    <Text style={styles.text}>Password</Text>
                    
                    {/* Password Text Box */}
                   <View style={styles.inputView}>
                        <TextInput
                            style={styles.textInput}
                            value={entityPassword}
                            editable={false}
                            selectTextOnFocus={!passwordRevealed}
                            secureTextEntry={!passwordRevealed}
                            autoCompleteType='off'
                            textContentType='none'
                        />
                    </View>
                   
                    {/* Reveal Password Button */}

                    <ClickableButton buttonText={"Reveal Password"} onPressMethod={onRevealButtonPress}/>
                </View>

                {/* Notes Information View Box */}
                <View style={styles.encrypBox}>
                    <Text style={styles.titleText}>Notes</Text>
                    <View style={styles.textAreaContainer}>
                        {/* Notes Box */}
                        <TextInput placeholder='Add some notes here...'
                            style={styles.textArea}
                            value={notesText}
                            onChangeText={(text) => onChangeNotesText(text)}
                            underlineColorAndroid="transparent"
                            placeholderTextColor="grey"
                            numberOfLines={5}
                            multiline={true}
                        />
                    </View>
                </View>

                {largeButtonsEnabled ? (
                    <Fragment>
                        {/* Buttons for web version*/}
                        <View style={styles.infoView}>
                            <Text style={styles.titleText}>Copy to Clipboard</Text>
                            <ClickableButton buttonText={"Copy Username"} onPressMethod={copyUsername}/>
                            <ClickableButton buttonText={"Copy Email"} onPressMethod={copyEmail}/>
                            <ClickableButton buttonText={"Copy Password"} onPressMethod={copyPassword}/>
                        </View>
                        <View style={styles.infoView}>
                            <Text style={styles.titleText}>Actions</Text>
                            <ClickableButton buttonText={"Edit"} onPressMethod={onEditButtonPress}/>
                            <ClickableButton buttonText={"Delete"} onPressMethod={onDeleteButtonPress}/>
                        </View>
                    </Fragment>
                ) : (
                    <Text/>)}

                </KeyboardAwareScrollView>
                </View>
           
       
    )
}
