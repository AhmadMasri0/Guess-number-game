import { Pressable, StyleSheet, Text, View } from "react-native"
import { Colors } from "../../constants/Colors";


export const PrimaryButton = ({ title, onPress }) => {


    return <View style={styles.buttonOutterContainer}>
        <Pressable style={({ pressed }) => pressed ? [styles.buttonInnerConainer, styles.pressedButton] : styles.buttonInnerConainer}
            onPress={onPress} android_ripple={{ color: Colors.primary600 }}>
            <Text style={styles.buttonText}>
                {title}
            </Text>
        </Pressable>
    </View>
}

const styles = StyleSheet.create({
    buttonOutterContainer: {
        margin: 4,
        borderRadius: 28,
        overflow: 'hidden'
    },
    buttonInnerConainer: {
        backgroundColor: Colors.primary500,
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2
    },
    buttonText: {
        textAlign: 'center', 
        color: 'white', 
    },
    pressedButton: {
        opacity: 0.8,

    }

});