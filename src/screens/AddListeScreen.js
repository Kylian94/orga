import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from '../style/Style'

import { ScrollView, TouchableOpacity, Button, TextInput } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';

export default class AddListe extends React.Component {
    state = {
        title: null,
        token: null,
    }

    async componentDidMount() {
        var value = AsyncStorage.getItem('token');
        await value.then((e) => {

            this.setState({
                token: e
            });
        })
    }

    addListe = async () => {

        try {
            const event_id = this.props.route.params;

            const response = await fetch('https://api-orga.kp-dev.fr/api/' + event_id.id + '/create_liste', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + this.state.token,
                },
                body: JSON.stringify({
                    title: this.state.title,
                }),
            }) // requête vers l'API
                ;
            const results = await response.json();
            console.log("liste save");
            console.log(results);
            this.props.navigation.goBack();
        }
        catch (error) {
            console.error(error);
        }
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View >
                <ScrollView >
                    <View style={[styles.container, styles.dFlexColumn, styles.justifyCenter, styles.alignCenter]}>
                        <View style={[styles.dFlexColumn, { alignSelf: "flex-start", }, styles.marginTop20]}>
                            <Text style={[styles.bold]}>Indiquez le nom de votre liste</Text>
                        </View>
                        <TextInput onChangeText={(title) => { this.setState({ title: title }) }} style={[styles.input, styles.marginTop20]} placeholder={"Nom de votre liste"}></TextInput>
                        <TouchableOpacity style={[styles.btnGreen, styles.marginTop20, styles.textCenter]} onPress={() => this.addListe()}>
                            <Text style={[styles.textBold, styles.textWhite]}>Ajouter</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View >
        )
    }
}