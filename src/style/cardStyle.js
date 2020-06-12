import { StyleSheet } from "react-native"
import { Dimensions } from "react-native";

var width = Dimensions.get('window').width; //full width

export default StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ebebeb'
    },
    text: {
        color: '#101010',
        fontSize: 24,
        fontWeight: 'bold'
    },
    buttonContainer: {
        backgroundColor: '#222',
        borderRadius: 5,
        padding: 10,
        margin: 20
    },
    buttonText: {
        fontSize: 20,
        color: '#fff'
    },

    canvas: {

        width: width - 20,
        height: 120,
        borderRadius: 5,
        borderWidth: 1,
    }



})