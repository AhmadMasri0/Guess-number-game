import { Dimensions, StyleSheet, Text, View } from "react-native"
import { Colors } from "../../constants/Colors";


const deviceDimenstion = Dimensions.get('window').width;

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
        margin: deviceDimenstion > 350 ? 48 : 12,
        padding: deviceDimenstion > 350 ? 24 : 12,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: Colors.accent500,
        fontSize: 32,
        fontWeight: 'bold'
    }
});