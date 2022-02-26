import React from "react";
import {TextInput} from "react-native";
import styles from "../Styles/styles";

export function TextBoxPassword({placeholder,textSetter, value}){
    return (
        <TextInput
            style={styles.textInput}
            placeholderTextColor="black"
            placeholder={placeholder}
            onChangeText={(text) => textSetter(text)}
            value={value}
            autoCapitalize="none"
            secureTextEntry={true}
              />
    )
}