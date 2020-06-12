import { StyleSheet } from "react-native"
import { colors } from "./colors";
import { Dimensions } from "react-native";

var width = Dimensions.get('window').width;

export default StyleSheet.create({

    container: {
        flex: 1,
        paddingHorizontal: 10,
        //justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: '#ebebeb'
    },
    title: {
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
    titleEvent: {
        color: "#21B3C6",
        fontSize: 20,
        fontWeight: 'bold',
    },
    canvas: {
        width: width - 20,
        height: 120,
        borderRadius: 5,
        borderWidth: 1,
    },
    marginTop20: {
        marginTop: 20,
    }


})