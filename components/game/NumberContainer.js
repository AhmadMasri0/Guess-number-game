import { StyleSheet, Text, View } from "react-native"
import { Colors } from "../../constants/Colors";

export const NumberContainer = ({ guessedNumber }) => {

    return <View style={styles.container}>
        <Text style={styles.text}>
            {guessedNumber}
        </Text>
    </View>
}

const styles = StyleSheet.create({


    container: {
        borderWidth: 4,
        borderColor: Colors.accent500,
        borderRadius: 8,
        margin: 12,
        padding: 12,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: Colors.accent500,
        fontSize: 32,
        fontWeight: 'bold'
    }
});