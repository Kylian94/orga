import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from '../style/Style'

import Icon from 'react-native-vector-icons/FontAwesome';

import { ScrollView, TouchableOpacity, Button, TextInput } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';

export default class Liste extends React.Component {

    state = {

        items: null,
        token: null,
        liste: null,
    };
    async componentDidMount() {
        const { id } = this.props.route.params;
        var value = AsyncStorage.getItem('token');
        await value.then((e) => {
            this.setState({
                token: e
            })
        })
        //console.log(this.id);
        console.log(this.state.token)

        return fetch('https://api-orga.kp-dev.fr/api/listes/' + id, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + this.state.token,
            },

        }) // requête vers l'API
            .then((response) => response.json())
            .then((results) => {
                console.log("test")
                console.log(results)
                //this.setState({ liste: results.liste })
                this.setState({
                    items: results.liste.items,
                    liste: results.liste
                })
                console.log(this.state.items)

            }).catch((error) => {
                console.error(error);
            });
    }

    render() {
        const { navigation } = this.props;
        const items = this.state.items;
        if (items == null) {
            return (
                <View >
                    <Text style={[styles.titleEvent, styles.textGreen]}>Anniv' de Julien</Text>
                </View>
            )
        } else {
            return (
                <View >
                    <ScrollView >
                        <View style={[styles.container, styles.dFlex, styles.infos, styles.justifyBetween, styles.alignCenter]}>
                            <Text style={[styles.textBold]}>{this.state.liste.title}</Text>
                            <TouchableOpacity style={[styles.marginLeft40]} onPress={() => navigation.navigate('AddItem')}>
                                <Icon name="plus-circle" color={"#21B3C6"} size={16} />
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.marginTop20, styles.marginBottom40]}>
                            {items.map(function (item, index) {
                                { console.log(item.users) }
                                return (
                                    <View key={index} style={[styles.container, styles.dFlex, styles.justifyBetween, styles.alignCenter]}>
                                        <View style={[styles.dFlex, styles.alignCenter]}>
                                            <Image resizeMode={'cover'}
                                                source={{ uri: 'https://i.stack.imgur.com/6FiRR.png' }}
                                                style={styles.profil_picture} />

                                            {item.users.map(function (user, index2) {
                                                return (
                                                    <View key={index2}>
                                                        <Text style={[styles.marginLeft5]}>{user.firstname}</Text>
                                                    </View>
                                                )
                                            })}


                                            <Text> prend</Text>
                                            <Text style={[styles.bold]}> {item.title}</Text>
                                        </View>

                                        <TouchableOpacity>
                                            <Icon name="minus-circle" color={"gray"} size={16} />
                                        </TouchableOpacity>
                                        <TouchableOpacity style={[styles.marginLeft40]}>
                                            <Icon name="plus-circle" color={"#21B3C6"} size={16} />
                                        </TouchableOpacity>
                                    </View>
                                )
                            })}

                        </View>
                    </ScrollView>
                </View >
            )
        }

    }
}
