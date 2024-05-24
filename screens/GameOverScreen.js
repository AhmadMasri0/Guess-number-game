import { Dimensions, Image, ScrollView, StyleSheet, Text, View, useWindowDimensions } from "react-native"
import { Title } from "../components/ui/Title"
import { Colors } from "../constants/Colors";
import { PrimaryButton } from "../components/ui/PrimaryButton";

const deviceWidth = Dimensions.get('window').width;

export const GameOverScreen = ({ userNumber, roundsNumber, onRestartGame }) => {

    const { height, width } = useWindowDimensions();

    let imageSize = 300;

    if (width < 380) {
        imageSize = 150;
    }
    if (height < 415) {
        imageSize = 150;
    }

    const imageStyle = {
        height: imageSize,
        width: imageSize,
        borderRadius: imageSize / 2
    };
    return <ScrollView>
        <View style={styles.rootScreen}>
            <Title title={'Game Over!'} />
            <View style={[styles.imageContainer, imageStyle]}>
                <Image style={styles.image} source={require('../assets/images/success.png')} />
            </View>
            <Text style={styles.summaryText}>
                Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text> rounds to guess <Text style={styles.highlight}>{userNumber}</Text>
            </Text>
            <PrimaryButton title={'Start new game'} onPress={onRestartGame} />
        </View>
    </ScrollView>
}

const styles = StyleSheet.create({
    rootScreen: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        padding: 24
    },
    imageContainer: {
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