import { Image, StyleSheet, Text, View } from "react-native"
import { Title } from "../components/ui/Title"
import { Colors } from "../constants/Colors";
import { PrimaryButton } from "../components/ui/PrimaryButton";


export const GameOverScreen = ({ userNumber, roundsNumber, onRestartGame }) => {

    return <View style={styles.rootScreen}>
        <Title title={'Game Over!'} />
        <View style={styles.imageContainer}>
            <Image style={styles.image} source={require('../assets/images/success.png')} />
        </View>
        <Text style={styles.summaryText}>
            Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text> rounds to guess <Text style={styles.highlight}>{userNumber}</Text>
        </Text>
        <PrimaryButton title={'Start new game'} onPress={onRestartGame} />
    </View>
}

const styles = StyleSheet.create({
    rootScreen: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        padding: 24
    },
    imageContainer: {
        borderRadius: 200,
        width: 400,
        height: 400,
        borderWidth: 3,
        borderColor: Colors.primary800,
        overflow: 'hidden',
        margin: 12
    },
    image: {
        width: '100%',
        height: '100%'
    },
    summaryText: {
        fontFamily: 'open-sans',
        fontSize: 24,
        alignItems: 'center',
        marginBottom: 16
    },
    highlight: {
        color: Colors.primary500,
        fontFamily: 'open-sans-bold'
    }

});