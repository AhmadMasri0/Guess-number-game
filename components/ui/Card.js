import { Dimensions, StyleSheet, View } from "react-native";
import { Colors } from "../../constants/Colors";

const deviceWidth = Dimensions.get('window').width;

export const Card = ({children}) => {
    // console.log(deviceWidth)
    return <View style={styles.card}>

        {children}
    </View>;
}

const styles = StyleSheet.create({
    card: {
        padding: 16,
        marginTop:  deviceWidth < 350 ? 12 : 30,
        backgroundColor: Colors.primary800,
        borderRadius: 10,
        marginHorizontal: 16,
        elevation: 5,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.7,
        justifyContent: 'center',
        alignItems: 'center'

    },

});