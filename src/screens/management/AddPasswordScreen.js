import React from 'react'
import {View,Text} from "react-native";

import styles from '../../style/styles';
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import {TextBoxInput} from "../../components/TextBoxInput";
import {Picker} from "@react-native-picker/picker";
import {colourPalette} from "../../constants/ColourPalette";
import {ClickableButton} from "../../components/ClickableButton";

/**
 * Add Password Screen
 * @param setPasswordEntryName entry name setter
 * @param passwordEntryName entry name
 * @param setemailText username setter
 * @param emailText username
 * @param setPasswordText password setter
 * @param passwordText password
 * @param selectedColour colour
 * @param setSelectedColour colour setter
 * @param handleGeneratePassword password generator function
 * @param onGenerateButtonPress password generator options function
 * @param onAddButtonPress add password function
 * @returns {JSX.Element} add screen
 */
export function AddPasswordScreen({
                                     setPasswordEntryName,
                                     passwordEntryName,
                                     setemailText,
                                     emailText,
                                     setPasswordText,
                                     passwordText,
                                     selectedColour,
                                     setSelectedColour,
                                     handleGeneratePassword,
                                     onGenerateButtonPress,
                                     onAddButtonPress
                                 }) {
    return (
        <KeyboardAwareScrollView keyboardShouldPersistTaps="always" style={{ backgroundColor:'#d0f4dc',}}>
        <View style={styles.container}>
           <View style={styles.adds}>
            {/* Entity Text Input Fields */}
            <TextBoxInput placeholder={'Site Name'} textSetter={setPasswordEntryName} value={passwordEntryName}/>
            <TextBoxInput placeholder={'Email'} textSetter={setemailText} value={emailText}/>
            <TextBoxInput placeholder={'Password'} textSetter={setPasswordText} value={passwordText}/>
            </View>
            <View style={{margin:10}}>
                <Text style={styles.pick}>Pick a colour:</Text>
            </View>

            <View style={styles.colorView}>
            {/* Colour Picker */}
            <Picker 
                    style={styles.picker}
                    selectedValue={selectedColour}
                    mode={'dialog'}
                    onValueChange={(colour) => {
                        setSelectedColour(colour)
                    }}>
                {
                    colourPalette.map(colour => <Picker.Item label={colour.label} value={colour.colour} key={colour.label}/>)
                }
            </Picker>
            </View>

            {/* Buttons */}
            <ClickableButton buttonText={"Auto Generate Password"} onPressMethod={handleGeneratePassword}/>
            <ClickableButton buttonText={"Password Generator"} onPressMethod={onGenerateButtonPress}/>
            <ClickableButton buttonText={"Add"} onPressMethod={onAddButtonPress}/>
        </View>
    </KeyboardAwareScrollView>
    );
}
