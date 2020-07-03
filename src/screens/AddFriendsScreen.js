import React from 'react'
import { View, Text, Image, ActivityIndicator } from 'react-native'
import styles from '../style/Style'

import { ScrollView, TouchableOpacity, Button } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';

export default class AddFriends extends React.Component {
    state = {

        token: null,
        friends: null,

    }

    async componentDidMount() {

        var value = AsyncStorage.getItem('token');
        await value.then((e) => {
            this.setState({
                token: e
            })
        });

        return fetch('https://api-orga.kp-dev.fr/api/friends', {
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
                // console.log(results.friends)
                this.setState({ friends: results.friends })

            }).catch((error) => {
                console.error(error);
            });
    }

    addFriend = async (friendId) => {
        const event_id = this.props.route.params;
        try {
            const response = await fetch('https://api-orga.kp-dev.fr/api/' + event_id.event_id + '/add_members/' + friendId, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + this.state.token,
                },
                body: {
                    user_id: friendId,
                    event_id: event_id.event_id.toString(),
                },
            }) // requête vers l'API
                ;
            const results = await response.json();
            //console.log("test")
            console.log(results);
        }
        catch (error) {
            console.error(error);
        }
    }


    render() {
        const { navigation } = this.props;
        if (this.state.friends == null) {
            return (
                <View style={[styles.container, styles.marginTop20, { flex: 1, alignItems: "center", justifyContent: "center" }]}>
                    <ActivityIndicator size="large" color="#21B3C6" />
                </View>
            )
        } else {
            return (
                <View >
                    <ScrollView>
                        <View style={[styles.container, styles.marginTop20]}>
                            {this.state.friends.map((friend, index) => {
                                return (
                                    <View key={index} style={[styles.dFlex, styles.alignCenter, styles.justifyBetween, styles.marginBottom20]}>
                                        <View style={[styles.dFlex, styles.alignCenter]}>
                                            <Image resizeMode={'cover'}
                                                source={{ uri: 'https://i.stack.imgur.com/6FiRR.png' }}
                                                style={styles.profil_picture} />
                                            <Text style={[styles.marginLeft5]}>{friend.firstname}</Text>
                                            <Text style={[styles.textBold, styles.marginLeft5]}>{friend.lastname + ' ' + friend.id}</Text>
                                        </View>
                                        <TouchableOpacity onPress={() => this.addFriend(friend.id)} style={[styles.btnGreenOutLine]}>
                                            <Text style={[styles.textGreen, styles.textBold]}>
                                                Inviter
                                            </Text>
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
