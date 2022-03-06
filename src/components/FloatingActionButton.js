import React from "react";
import styles from '../Styles/styles'
import {FAB} from 'react-native-elements';

/**
 * Floating Action Button - Used in the Home Screen as an entry point to add new entries.
 *
 * External libraries used:
 * - React Native Elements FAB
 *      https://www.npmjs.com/package/react-native-elements
 *
 * @param props Application props
 * @param userIdentifier Carry through user identifier to authenticate added entries later
 * @returns {JSX.Element} FAB button Render View
 */
export function FloatingActionButton({props, userIdentifier}) {
    return (
        <FAB style={styles.fab}
             icon={{name: 'add', color: 'white'}}
             placement="right"
             title="ADD"
             color="#72C99A"          
             onPress={() => props.navigation.navigate('Root', 
             {screen: 'AddPasswordScreen', params:{userId: userIdentifier},})}
            // onPress={() => props.navigation.navigate('AddPasswordScreen', {userId: userIdentifier})}
        />
    );
}
