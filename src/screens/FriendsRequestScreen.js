import React from 'react'
import { View, Text, TouchableOpacity, Image, ActivityIndicator } from 'react-native'
import styles from '../style/Style'
import { ScrollView } from 'react-native-gesture-handler';

import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-community/async-storage';

export default class FriendsRequest extends React.Component {

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
        return fetch('https://api-orga.kp-dev.fr/api/friends_request', {
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
                console.log(results.user.friend_of)
                this.setState({ friends: results.user.friend_of })

            }).catch((error) => {
                console.error(error);
            });
    }

    render() {
        const { navigation } = this.props;
        if (this.state.friends == null) {
            return (
                <View style={[styles.container, styles.marginTop20]}>
                    <ActivityIndicator size="large" color="#21B3C6" />
                </View>
            )
        } else {
            return (
                <View style={styles.container}>
                    <ScrollView style={styles.container}>
                        {this.state.friends.map((friend, index) => {
                            return (
                                <View key={index} style={[{ display: "flex", flexDirection: "row" }, styles.marginTop20, styles.alignCenter, styles.justifyBetween, styles.marginBottom20]}>
                                    <View style={[{ display: "flex", flexDirection: "row" }, styles.alignCenter]}>
                                        <Image resizeMode={'cover'}
                                            source={{ uri: 'https://i.stack.imgur.com/6FiRR.png' }}
                                            style={styles.profil_picture} />
                                        <Text style={[styles.marginLeft5]}>{friend.firstname}</Text>
                                        <Text style={[styles.textBold, styles.marginLeft5]}>{friend.lastname}</Text>
                                    </View>
                                    <View style={[{ display: "flex", flexDirection: "row" }]}>
                                        <TouchableOpacity style={[styles.btnGreen]}>
                                            <Text style={[styles.textWhite, styles.textBold]}>
                                                V
                                </Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={[styles.btnGreenOutLine, styles.marginLeft40]}>
                                            <Text style={[styles.textGreen, styles.textBold]}>
                                                X
                                </Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            )
                        })}
                    </ScrollView>
                </View >
            )
        }
    }
}