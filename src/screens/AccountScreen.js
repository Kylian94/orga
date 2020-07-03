import React from 'react'
import { View, Text, TouchableOpacity, Image, TextInput, ActivityIndicator } from 'react-native'
import styles from '../style/Style'
import { ScrollView } from 'react-native-gesture-handler';

import Icon from 'react-native-vector-icons/FontAwesome';
import { color } from 'react-native-reanimated';

import AsyncStorage from '@react-native-community/async-storage';

export default class Account extends React.Component {

    state = {
        user: null,
        token: null,
        firsname: null,
        lastname: null,
        email: null,
        adresse: null,
        zipCode: null,
        city: null,
    }

    async componentDidMount() {
        var value = AsyncStorage.getItem('token');
        await value.then((e) => {
            this.setState({
                token: e
            })
        })
        return fetch('https://api-orga.kp-dev.fr/api/account', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + this.state.token,
            },
        }) // requête vers l'API
            .then((response) => response.json())
            .then((results) => {
                //console.log("test")
                console.log(results)
                this.setState({
                    user: results.data,
                    firstname: results.data.firstname,
                    lastname: results.data.lastname,
                    email: results.data.email,
                })
                console.log(this.state.user)
            }).catch((error) => {
                console.error(error);
            });
    }

    editProfile = () => {
        return fetch('https://api-orga.kp-dev.fr/api/edit_account', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + this.state.token,
            },
            body: JSON.stringify({
                firstname: this.state.firstname,
                lastname: this.state.lastname,
                email: this.state.email,
            }),
        }) // requête vers l'API
            .then((response) => response.json())
            .then((results) => {
                //console.log("test")
                console.log(results)
                this.setState({ user: results.data })
                console.log(this.state.user)
            }).catch((error) => {
                console.error(error);
            });
    }

    render() {
        const { navigation } = this.props;
        const user = this.state.user;
        if (user == null) {
            return (
                <View style={[styles.container, styles.marginTop20, { flex: 1, alignItems: "center", justifyContent: "center" }]}>
                    <ActivityIndicator size="large" color="#21B3C6" />
                </View>
            )
        } else {
            return (
                <ScrollView style={styles.container}>
                    <View style={[{ display: "flex", flexDirection: "column" }]}>
                        <View style={{ display: "flex", flexDirection: "row" }}>
                            <Image resizeMode={'cover'}
                                source={{ uri: 'https://i.stack.imgur.com/6FiRR.png' }}
                                style={[styles.account_picture, styles.marginTop20]} />

                            <View style={[styles.dFlexColumn, styles.marginLeft40, styles.marginTop20]}>
                                <Text>Nom</Text>
                                <TextInput value={this.state.lastname} style={[styles.input2block, styles.marginTop10]} placeholder={"Nom"} onChangeText={(lastname) => {
                                    this.setState({ lastname: lastname });
                                }}></TextInput>
                                <Text style={[styles.marginTop10]}>Prénom</Text>
                                <TextInput value={this.state.firstname} style={[styles.input2block, styles.marginTop10]} placeholder={"Prénom"} onChangeText={(firstname) => {
                                    this.setState({ firstname: firstname });
                                }}></TextInput>
                            </View>
                        </View>
                        <View style={{ display: "flex", flexDirection: "column" }}>
                            <Text>Email</Text>
                            <TextInput value={this.state.email} style={[styles.input, styles.marginTop10]} placeholder={"Email"} onChangeText={(email) => {
                                this.setState({ email: email });
                            }}></TextInput>
                            <Text style={[styles.marginTop10]}>Adresse</Text>
                            <TextInput value={user.adresse} style={[styles.input, styles.marginTop10]} placeholder={"Adresse"} onChangeText={(adress) => {
                                this.setState({ adress: adress });
                            }}></TextInput>

                            <View style={{ display: "flex", flexDirection: "row" }}>
                                <View style={{ display: "flex", flexDirection: "column" }}>
                                    <Text style={[styles.marginTop10]}>Code postal</Text>
                                    <TextInput value={user.zipCode} style={[styles.input2block, styles.marginTop10]} placeholder={"Code Postal"} onChangeText={(zipcode) => {
                                        this.setState({ zipcode: zipcode });
                                    }}></TextInput>
                                </View>
                                <View style={{ display: "flex", flexDirection: "column" }}>
                                    <Text style={[styles.marginTop10]}>Ville</Text>
                                    <TextInput value={user.city} style={[styles.input2block, styles.marginTop10]} placeholder={"Ville"} onChangeText={(city) => {
                                        this.setState({ city: city });
                                    }}></TextInput>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{ display: "flex", flexDirection: "column" }}>
                        <TouchableOpacity onPress={() => this.editProfile()} style={[styles.btnGreen, styles.marginTop20, styles.marginBottom40, styles.textCenter, styles.alignCenter]} type="submit">
                            <Text style={[styles.textBold, styles.textWhite, styles.marginTop10, styles.marginBottom10]}>Mettre à jour</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView >
            )
        }
    }
}