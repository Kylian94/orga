import React from 'react'
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import styles from '../style/Style'
import { ScrollView } from 'react-native-gesture-handler';
import axios from 'axios';
import ajax from '../services/FetchEvents';
import Icon from 'react-native-vector-icons/FontAwesome';
import { color } from 'react-native-reanimated';


export default class Account extends React.Component {

    state = {
        events: [],
        name: null,
        firstname: null,
        email: null,
        number: null,
        adress: null,
        zipcode: null,
        city: null,
    }

    async componentDidMount() {
        const events = await ajax.fetchEvents();
        this.setState({ events });
    }

    render() {
        const { navigation } = this.props;
        return (
            <ScrollView style={styles.container}>
                <View style={[{ display: "flex", flexDirection: "column" }]}>
                    <View style={{ display: "flex", flexDirection: "row" }}>
                        <Image resizeMode={'cover'}
                            source={{ uri: 'https://i.stack.imgur.com/6FiRR.png' }}
                            style={[styles.account_picture, styles.marginTop20]} />

                        <View style={[styles.dFlexColumn, styles.marginLeft40, styles.marginTop20]}>
                            <Text>Nom</Text>
                            <TextInput style={[styles.input2block, styles.marginTop10]} placeholder={"Nom"} onChange={(name) => {
                                this.setState({ name: name });
                            }}></TextInput>
                            <Text style={[styles.marginTop10]}>Prénom</Text>
                            <TextInput style={[styles.input2block, styles.marginTop10]} placeholder={"Prénom"} onChange={(firstname) => {
                                this.setState({ firstname: firstname });
                            }}></TextInput>
                        </View>

                    </View>

                    <View style={{ display: "flex", flexDirection: "column" }}>

                        <Text>Email</Text>
                        <TextInput style={[styles.input, styles.marginTop10]} placeholder={"Email"} onChange={(email) => {
                            this.setState({ email: email });
                        }}></TextInput>
                        <Text style={[styles.marginTop10]}>Adresse</Text>
                        <TextInput style={[styles.input, styles.marginTop10]} placeholder={"Adresse"} onChange={(adress) => {
                            this.setState({ adress: adress });
                        }}></TextInput>

                        <View style={{ display: "flex", flexDirection: "row" }}>
                            <View style={{ display: "flex", flexDirection: "column" }}>
                                <Text style={[styles.marginTop10]}>Code postal</Text>
                                <TextInput style={[styles.input2block, styles.marginTop10]} placeholder={"Code Postal"} onChange={(zipcode) => {
                                    this.setState({ zipcode: zipcode });
                                }}></TextInput>
                            </View>
                            <View style={{ display: "flex", flexDirection: "column" }}>
                                <Text style={[styles.marginTop10]}>Ville</Text>
                                <TextInput style={[styles.input2block, styles.marginTop10]} placeholder={"Ville"} onChange={(city) => {
                                    this.setState({ city: city });
                                }}></TextInput>
                            </View>


                        </View>
                        <Text style={[styles.marginTop10]}>Numéro de telephone</Text>
                        <TextInput style={[styles.input, styles.marginTop10]} placeholder={"Numéro"} onChange={(number) => {
                            this.setState({ number: number });
                        }}></TextInput>
                    </View>
                </View>
                <View style={{ display: "flex", flexDirection: "column" }}>
                    <TouchableOpacity style={[styles.btnGreen, styles.marginTop20, styles.marginBottom40, styles.textCenter, styles.alignCenter]} type="submit">
                        <Text style={[styles.textBold, styles.textWhite, styles.marginTop10, styles.marginBottom10]}>Mettre à jour</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView >
        )
    }

}