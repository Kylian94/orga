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
        uniqueValue: 1,
        user_id: null,
    };
    forceRemount = () => {
        let uniqueValue = this.state.uniqueValue
        this.setState({ uniqueValue: uniqueValue + 1 })
        console.log(this.state.uniqueValue)
    }
    async componentDidMount() {
        const { id } = this.props.route.params;
        var value = AsyncStorage.getItem('token');
        await value.then((e) => {
            this.setState({
                token: e
            })
        })
        var user_id = AsyncStorage.getItem('user_id');
        await user_id.then((e) => {
            this.setState({
                user_id: e.toString()

            })
        })
        //console.log(AsyncStorage.getItem('user_id'))
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
                console.log(this.state.liste)

            }).catch((error) => {
                console.error(error);
            });
    }

    addToItem = async (id) => {
        try {
            console.log(id);
            const response = await fetch('https://api-orga.kp-dev.fr/api/edit_item/' + id, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + this.state.token,
                },
            }) // requête vers l'API
                ;
            const results = await response.json();
            this.forceRemount();
            console.log("test");

            console.log(results);
        }
        catch (error) {
            console.error(error);
        }
    }

    render() {

        const { navigation } = this.props;
        const items = this.state.items;
        const liste = this.state.liste;
        const user_id = this.state.user_id;
        if (items == null) {
            return (
                <View >
                    <Text style={[styles.textCenter, styles.marginTop20]}>Aucun item dans cette liste, vous pouvez en ajouter en cliquant sur le +</Text>
                </View>
            )
        } else {
            return (
                <View >
                    <ScrollView >
                        <View style={[styles.container, styles.dFlex, styles.infos, styles.justifyBetween, styles.alignCenter]}>
                            <Text style={[styles.textBold]}>{this.state.liste.title}</Text>
                            <TouchableOpacity style={[styles.marginLeft40]} onPress={() => navigation.navigate('AddItem', { id: liste.id })}>
                                <Icon name="plus-circle" color={"#21B3C6"} size={16} />
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.marginTop20, styles.marginBottom40]}>
                            {items.map((item, index) => {
                                //onsole.log(item)
                                return (
                                    <View key={index} style={[styles.container, styles.dFlex, styles.justifyBetween, styles.alignCenter]}>
                                        <View style={[styles.dFlex, styles.alignCenter]}>
                                            <Image resizeMode={'cover'}
                                                source={{ uri: 'https://i.stack.imgur.com/6FiRR.png' }}
                                                style={styles.profil_picture} />
                                            <View style={[{ display: "flex", flexDirection: "row" }]}>
                                                {item.users.map(function (user, index2) {

                                                    return (

                                                        <Text style={[styles.marginLeft5]}>{user.firstname}, </Text>

                                                    )
                                                })}
                                            </View>
                                            {item.users.length > 1 ? <Text> prennent</Text> : <Text> prend</Text>}
                                            <Text style={[styles.bold]}> {item.title}</Text>
                                        </View>

                                        {item.users.map((user, index3) => {
                                            var userItem = user_id === user.id.toString()
                                            console.log(userItem)

                                            return (

                                                userItem && item.users.length ?

                                                    <TouchableOpacity>
                                                        <Icon name="minus-circle" color={"gray"} size={16} />
                                                    </TouchableOpacity>


                                                    : < TouchableOpacity style={[styles.marginLeft40]} onPress={() => this.addToItem(item.id)}>
                                                        <Icon name="plus-circle" color={"#21B3C6"} size={16} />
                                                    </TouchableOpacity>
                                            )


                                        })}
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
