import { StyleSheet, Text } from "react-native";
import { Colors } from "../../constants/Colors";

export const Title = ({ title }) => {

    return <Text style={styles.title}>
        {title}
    </Text>
}


const styles = StyleSheet.create({
    title: {
        fontFamily: 'open-sans-bold',
        // fontWeight: 'bold',
        fontSize: 24,
        textAlign: 'center',
        padding: 16,
        color: 'white',
        borderWidth: 2,
        borderColor: 'white',
        maxWidth: '80%',
        width: 300
    }

});