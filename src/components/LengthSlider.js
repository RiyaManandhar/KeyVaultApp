import React from "react";
import {View} from "react-native";
import styles from "../style/styles";

import Slider from "@react-native-community/slider";

/**
 * Length Slider to Select Password Generation Length.
 *
 * External libraries used:
 * - React Native Community Slider
 *      https://www.npmjs.com/package/@react-native-community/slider
 *
 * @param value Value of slider
 * @param setter Passed in setter method.
 * @returns {JSX.Element} Length Slider Render View
 */
export function LengthSlider({value, setter}) {
    return (
        <View style={styles.lengthSlider}>
            <Slider
                onValueChange={(text) => setter(text)}
                minimumValue={10}
                maximumValue={128}
                value={value}
                step={1}
                minimumTrackTintColor={'red'}
                thumbTintColor="green"
            />
        </View>
    );
}
