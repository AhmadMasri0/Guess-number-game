import { StyleSheet, Text } from "react-native"
import { Colors } from "../../constants/Colors";

export const InstructionText = ({ title }) => {

    return <Text style={styles.instructionText}>{title}</Text>

}

const styles = StyleSheet.create({

    instructionText: {
        fontFamily: 'open-sans',
        color: Colors.accent500,
        fontSize: 24
    }
});