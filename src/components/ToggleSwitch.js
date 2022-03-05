import React from "react";
import {Switch, Text, View} from 'react-native'
import styles from "../Styles/styles";

/**
 * Cumulative Method for a toggle switch with descriptive text next to it
 * @param text Descriptive text
 * @param enabledStatus switch value status
 * @param switchValue switch state checker
 * @returns {JSX.Element} switch render view
 */
export function ToggleSwitch({text, enabledStatus,switchValue}){
    return (
        <View style={styles.switchView}>
            <Text style={styles.generateText}>{text}</Text>
            <Switch
                trackColor={{ false: '#fff', true: '#fff' }}
                thumbColor={enabledStatus ? 'green' : 'red'}
                onValueChange={switchValue}
                value={enabledStatus}
            />
        </View>
    )
}
