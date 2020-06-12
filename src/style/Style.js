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
        //backgroundColor: '#ebebeb'
    },
    title: {
        color: '#101010',
        fontSize: 24,
        fontWeight: 'bold',

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
        fontFamily: "Montserrat"
    },
    canvas: {

        width: width - 20,
        height: 120,
        borderRadius: 5,
        borderWidth: 1,
    },
    marginTop20: {
        marginTop: 20,
    },
    marginLeft5: {
        marginLeft: 5,
    },
    dFlex: {
        flex: 1,
        flexDirection: 'row',
    },
    dFlexColumn: {
        flex: 1,
        flexDirection: 'column',
    },
    bold: {
        fontWeight: 'bold',
    },
    justifyBetween: {
        justifyContent: 'space-between',
    },
    justifyCenter: {
        justifyContent: 'center',
    },
    alignCenter: {
        alignItems: 'center',
    },
    alignStart: {
        alignItems: 'flex-start',
    },
    map: {
        height: 200,
        width: width,
    },
    textGreen: {
        color: "#21B3C6",
    },
    infos: {
        height: 50,
        backgroundColor: "#eeeeee",
    },
    btnGreen: {
        backgroundColor: "#21B3C6",
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 50

    },
    textWhite: {
        color: "white",
    }



})