import React from "react";
import {TextInput,View} from "react-native";
import styles from "../style/styles";

/**
 * Cumulative component for input text password box.
 * @param placeholder placeholder text for search box
 * @param textSetter setter state for the input box
 * @param value initial value of the text input
 * @returns {JSX.Element} text input render view
 */

export function TextBoxPassword({placeholder,textSetter, value}){
    return (
        <View style={styles.inputView}>
        <TextInput
            style={styles.textInput}
            placeholderTextColor="black"
            placeholder={placeholder}
            onChangeText={(text) => textSetter(text)}
            value={value}
            autoCapitalize="none"
            secureTextEntry={true}
              />
              </View>
    )
}