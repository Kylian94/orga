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
    addImage: {
        bottom: 50,
        left: width - 70,
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
    marginTop10: {
        marginTop: 10,
    },
    marginTop40: {
        marginTop: 40,
    },
    marginTop60: {
        marginTop: 60,
    },
    marginTop30: {
        marginTop: 30,
    },
    marginBottom20: {
        marginBottom: 20,
    },
    marginBottom40: {
        marginBottom: 40,
    },
    marginLeft5: {
        marginLeft: 5,
    },
    marginLeft20: {
        marginLeft: 20,
    },
    marginLeft40: {
        marginLeft: 40,
    },
    marginRight30: {
        marginRight: 30,
    },
    positionRelative: {
        position: "relative"
    },
    postionAbsolute: {
        position: "absolute"
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
    btnGreenOutLine: {
        borderWidth: 1,
        borderColor: "#21B3C6",
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 50
    },
    textWhite: {
        color: "white",
    },
    textBold: {
        fontWeight: "bold",
    },
    profil_picture: {
        height: 50,
        width: 50,
        borderRadius: 25
    },
    listCard: {
        height: 60,
        width: width - 20,
        backgroundColor: "#8ecad1",
        borderRadius: 10,
    },
    input: {
        height: 50,
        borderColor: "#888888",
        borderWidth: 1,
        borderRadius: 10,
        width: width - 20,
    },
    textCenter: {
        marginHorizontal: "auto",
    },
    floatLeft: {
        textAlign: "left",
    },
    radioText: {
        marginRight: 15,
        fontSize: 14,
        color: '#000',
        fontWeight: '700'
    },
    radioCircle: {
        height: 30,
        width: 30,
        borderRadius: 100,
        borderWidth: 2,
        borderColor: '#21B3C6',
        alignItems: 'center',
        justifyContent: 'center',
    },
    selectedRb: {
        width: 15,
        height: 15,
        borderRadius: 50,
        backgroundColor: '#21B3C6',
    },
    result: {
        marginTop: 20,
        color: 'white',
        fontWeight: '600',
        backgroundColor: '#F3FBFE',
    },
    radioForm: {
        marginBottom: 35,
        marginRight: 60,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
    },



})