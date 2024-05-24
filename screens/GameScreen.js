import { Alert, FlatList, StyleSheet, Text, View, useWindowDimensions } from "react-native"
import { Title } from "../components/ui/Title";
import { useEffect, useState } from "react";
import { NumberContainer } from "../components/game/NumberContainer";
import { PrimaryButton } from "../components/ui/PrimaryButton";
import { InstructionText } from "../components/ui/InstructionText";
import { Card } from "../components/ui/Card";
import { Ionicons } from '@expo/vector-icons'
import { GuessLogItem } from "../components/game/GuessLogItem";

function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}
let minBoundary = 1, maxBoundary = 100;

export const GameScreen = ({ userNumber, onGameOver }) => {
    const intialGuess = generateRandomBetween(minBoundary, maxBoundary, userNumber)
    const [curerentGuess, setCurrentGuess] = useState(intialGuess);
    const [guessRounds, setGuessRounds] = useState([]);
    const { width, height } = useWindowDimensions();

    useEffect(() => {

        if (curerentGuess === userNumber) {
            onGameOver(guessRounds.length);
        }
    }, [curerentGuess]);


    useEffect(() => {

        minBoundary = 1;
        maxBoundary = 100;

    }, []);

    const nextGuessHandler = (direction) => {

        if ((direction === 'lower' && curerentGuess < userNumber) || (direction === 'greater' && curerentGuess > userNumber)) {
            Alert.alert("Don't lie!", "That's Wrong", [{ text: 'Sorry', style: 'cancel' }])
            return;
        }
        if (direction === 'lower') {
            maxBoundary = curerentGuess;
        } else {
            minBoundary = curerentGuess;
        }

        const newGuess = generateRandomBetween(minBoundary, maxBoundary, curerentGuess);
        setCurrentGuess(newGuess);
        setGuessRounds(prev => [newGuess, ...prev]);
    }

    let content = <>
        <NumberContainer guessedNumber={curerentGuess} />

        <Card>
            <InstructionText title={'Higher or lower?'}></InstructionText>
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>


                    <PrimaryButton onPress={() => nextGuessHandler('lower')} title={<Ionicons name="remove" />} />

                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={() => nextGuessHandler('greater')} title={<Ionicons name="add" />} />

                </View>
            </View>
        </Card>

    </>;

    if (width > height) {
        content = <>
            {/* <InstructionText title={'Higher or lower?'}></InstructionText> */}
            <View style={styles.buttonContainerWide}>
                <View style={[styles.buttonContainer, { width: '20%', flex: 0 }]}>
                    <PrimaryButton onPress={() => nextGuessHandler('lower')} title={<Ionicons name="remove" />} />
                </View>
                <NumberContainer guessedNumber={curerentGuess} />
                <View style={[styles.buttonContainer, { width: '20%', flex: 0 }]}>
                    <PrimaryButton onPress={() => nextGuessHandler('greater')} title={<Ionicons name="add" />} />
                </View>
            </View>
        </>;
    }


    return <View style={styles.screenStyle}>
        <Title title="Opponent's Guess" />
        {content}
        <View style={{ flex: 1, width: '90%', marginTop: width > height ? 0 : 20, }}>
            <FlatList data={guessRounds} renderItem={(itemData) =>
                <GuessLogItem guess={itemData.item} round={guessRounds.length - itemData.index} />} />
        </View>
    </View>
}

const styles = StyleSheet.create({
    screenStyle: {
        flex: 1,
        padding: 18,
        alignItems: 'center',
        // borderColor: 'red',
        // borderWidth: 2
    },
    buttonsContainer: {
        flexDirection: 'row',
        marginTop: 24
    },
    buttonContainer: {
        flex: 1,
    },
    buttonContainerWide: {
        flexDirection: 'row',
        alignItems: 'center'

    }

});