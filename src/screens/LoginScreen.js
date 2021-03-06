import React from 'react'
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import styles from '../style/Style'
import { ScrollView } from 'react-native-gesture-handler';

import Icon from 'react-native-vector-icons/FontAwesome';

import AsyncStorage from '@react-native-community/async-storage';

export default class Login extends React.Component {

    state = {
        email: null,
        password: null,
    }

    async componentDidMount() {

    }

    login = () => {
        return fetch("https://api-orga.kp-dev.fr/api/login", {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password,

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
                console.log(json)
                AsyncStorage.setItem('token', json.access_token)
                AsyncStorage.setItem('user_id', json.user.id.toString())
                this.props.navigation.goBack();
            })
            .catch(e => console.log(e))
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <ScrollView style={styles.container}>

                <Text style={[styles.bold, styles.marginTop20]}>Email</Text>
                <TextInput style={[styles.input, styles.marginTop10]} placeholder={"Email"} onChangeText={(email) => {
                    this.setState({ email: email });
                }}></TextInput>
                <Text style={[styles.bold, styles.marginTop20]}>Mot de passe</Text>
                <TextInput secureTextEntry={true} style={[styles.input, styles.marginTop10]} placeholder={"Mot de passe"} onChangeText={(password) => {
                    this.setState({ password: password });
                }}></TextInput>
                <TouchableOpacity style={[styles.btnGreen, styles.alignCenter, styles.marginTop40]} onPress={() => this.login()}>
                    <Text style={[styles.buttonText, styles.marginBottom10, styles.marginTop10]}>Se connecter</Text>
                </TouchableOpacity>

                <Text style={[styles.textGreen, { alignSelf: "center" }, styles.marginTop20]} onPress={() => navigate('Register')}> Vous n'avez pas encore de compte ? Créez-en un</Text>
            </ScrollView >
        )
    }

}