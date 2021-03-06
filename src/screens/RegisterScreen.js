import React from 'react'
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import styles from '../style/Style'
import { ScrollView } from 'react-native-gesture-handler';
import axios from 'axios';

import Icon from 'react-native-vector-icons/FontAwesome';

import AsyncStorage from '@react-native-community/async-storage';


export default class Regsiter extends React.Component {

    state = {
        events: [],
        firstname: null,
        lastname: null,
        email: null,
        password: null,
        token: null,
    }

    async componentDidMount() {

    }
    fetchRegister = () => {

        console.log('test');
        const URI = 'http://api-orga.kp-dev.fr';
        return fetch(URI + "/api/register", {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password,
                firstname: this.state.firstname,
                lastname: this.state.lastname,
            }),
        })
            .then((response) => {
                // Si un code erreur a été détecté on déclenche une erreur
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response;
            })
            .then(response => response.json())
            .then(json => {
                AsyncStorage.setItem('token', json.access_token)

            }
            )
            .catch(e => console.log(e))
    }

    render() {
        const { navigation } = this.props;
        return (
            <ScrollView style={styles.container}>

                <Text style={[styles.bold, styles.marginTop20]}>Nom</Text>
                <TextInput style={[styles.input, styles.marginTop10]} placeholder={"Nom"} onChangeText={(firstname) => {
                    this.setState({ firstname: firstname });
                }}></TextInput>
                <Text style={[styles.bold, styles.marginTop20]}>Prénom</Text>
                <TextInput style={[styles.input, styles.marginTop10]} placeholder={"Prénom"} onChangeText={(lastname) => {
                    this.setState({ lastname: lastname });
                }}></TextInput>
                <Text style={[styles.bold, styles.marginTop20]}>Email</Text>
                <TextInput style={[styles.input, styles.marginTop10]} placeholder={"Email"} onChangeText={(email) => {
                    this.setState({ email: email });
                }}></TextInput>
                <Text style={[styles.bold, styles.marginTop20]}>Mot de passe</Text>
                <TextInput secureTextEntry={true} style={[styles.input, styles.marginTop10]} placeholder={"Mot de passe"} onChangeText={(password) => {
                    this.setState({ password: password });
                }}></TextInput>
                <TouchableOpacity style={[styles.btnGreen, styles.alignCenter, styles.marginTop40]} onPress={() => this.fetchRegister()}>
                    <Text style={[styles.buttonText, styles.marginBottom10, styles.marginTop10]}>S'inscrire</Text>
                </TouchableOpacity>

                <Text style={[styles.textGreen, { alignSelf: "center" }, styles.marginTop20]} onPress={() => navigation.navigate('Login')}> Vous avez déja un compte ? Connectez-vous</Text>
            </ScrollView >
        )
    }

}