import { Alert, KeyboardAvoidingView, ScrollView, StyleSheet, TextInput, View, useWindowDimensions } from "react-native";
import { PrimaryButton } from "../components/ui/PrimaryButton";
import { useState } from "react";
import { Colors } from "../constants/Colors";
import { Title } from "../components/ui/Title";
import { Card } from "../components/ui/Card";
import { InstructionText } from "../components/ui/InstructionText";


export const StartGameScreen = ({ onConfirmNumber }) => {

    const [enteredNumber, setEnteredNumber] = useState('');
    const { height } = useWindowDimensions();

    const marginTop = height > 500 ? 70 : 30;

    const changeInputValueHandler = (number) => {
        setEnteredNumber(number);
    }

    const confirmInputHandler = () => {
        const parsedInt = parseInt(enteredNumber);

        if (isNaN(parsedInt) || parsedInt <= 0 || parsedInt > 99) {
            Alert.alert('Invalid Number', 'Number has to be from 1 to 99.',
                [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }]);
        } else {
            onConfirmNumber(parsedInt);
        }
    }

    const resetInputHandler = () => {
        setEnteredNumber('');

    }

    return <ScrollView>
        <KeyboardAvoidingView behavior="position">
            <View style={[styles.rootContainer, { marginTop }]}>
                <Title title={'Guess My number'} />
                <Card>
                    <InstructionText title={'Ener a number'} />
                    <TextInput style={styles.input} maxLength={2} returnKeyType="go" selectTextOnFocus={'false'} inputMode="numeric"
                        onChangeText={changeInputValueHandler} value={enteredNumber} />
                    <View style={styles.buttonsContainer}>
                        <View style={styles.buttonContainer}>
                            <PrimaryButton onPress={resetInputHandler} title='Reset' />

                        </View>
                        <View style={styles.buttonContainer}>
                            <PrimaryButton onPress={confirmInputHandler} title='Confirm' />
                        </View>
                    </View>
                </Card>
            </View>
        </KeyboardAvoidingView>
    </ScrollView>;
}

const styles = StyleSheet.create({

    rootContainer: {
        alignItems: 'center',
        flex: 1,
    },
    input: {
        height: 40,
        width: 40,
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 1,
        color: Colors.accent500,
        fontSize: 24,
        fontWeight: '700',
        marginVertical: 10,
        textAlign: 'center'
    },
    buttonsContainer: {
        flexDirection: 'row',
    },
    buttonContainer: {
        flex: 1
    }
});