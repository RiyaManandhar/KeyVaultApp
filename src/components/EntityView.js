import React from "react";
import {View, Text, TouchableOpacity, StyleSheet} from "react-native";
import {Circle} from 'react-native-shape';
import styles from "../Styles/styles";

/**
 * Entity View for showing Password Entries on the Home Screen.
 *
 * External libraries used:
 * - React Native Shapes
 *      https://www.npmjs.com/package/react-native-shapes
 *
 * @param displayName Entity Display Name (Visible)
 * @param email Entity Email or Username (Visible)
 * @param passwordEntityId Unique identifier for entity (internal)
 * @param userId User identifier (internal)
 * @param accent Coloured circle next to info (Visible)
 * @param props Application state props
 * @returns {JSX.Element} Entity Item Render View
 */
export function EntityView({displayName, email, passwordEntityId, userId, accent, props}) {
    return (
        <TouchableOpacity onPress={() => {
            props.navigation.navigate('ViewPasswordScreen', {
                passwordEntityId: passwordEntityId,
                userId: userId,
                returningFromEdit: false,
            });
        }}>

            <View style={styles.entityContainer}>
                <Circle color={accent}/>
                <View>
                    <Text style={styles.entityName}>{displayName}</Text>
                    <Text style={styles.entityEmail}>{email}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}
