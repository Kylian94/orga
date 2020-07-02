import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from '../style/Style'

import { ScrollView, TouchableOpacity, Button, TextInput } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';

export default class AddItem extends React.Component {

    state = {
        item_content: null,
        token: null,
    }

    async componentDidMount() {
        var value = AsyncStorage.getItem('token');
        await value.then((e) => {

            this.setState({
                token: e
            });
        })
        console.log(this.state.token)
    }

    addItem = async () => {
        try {
            const liste_id = this.props.route.params;
            const response = await fetch('https://api-orga.kp-dev.fr/api/' + liste_id.id + '/create_item', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + this.state.token,
                },
                body: JSON.stringify({
                    title: this.state.item_content,
                }),
            });
            const results = await response.json();
            console.log("item save");
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
                            <Text style={[styles.bold]}>Qu'est-ce que vous allez ramener ?</Text>
                        </View>
                        <TextInput onChangeText={(item_content) => { this.setState({ item_content: item_content }); }} style={[styles.input, styles.marginTop20]} placeholder={"Du pain, des olives, etc"}></TextInput>
                        <TouchableOpacity style={[styles.btnGreen, styles.marginTop10, styles.textCenter]} onPress={() => this.addItem()}>
                            <Text style={[styles.textBold, styles.textWhite]}>Ajouter</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View >
        )
    }
}