import { StyleSheet, Text, View } from "react-native"
import { Colors } from "../../constants/Colors";

export const GuessLogItem = ({ round, guess }) => {

    return <View style={styles.item}>
        <Text>
            #{round}
        </Text>
        <Text>
            Opponent's Guess: {guess}
        </Text>
    </View>
}

const styles = StyleSheet.create({
    item: {
        borderColor: Colors.primary800,
        borderWidth: 1,
        borderRadius: 40,
        padding: 12,
        marginVertical: 8,
        backgroundColor: Colors.accent500,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100$',
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.5,
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 4
    }
});