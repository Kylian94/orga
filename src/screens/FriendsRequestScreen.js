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

    acceptFriend = (id) => {
        return fetch('https://api-orga.kp-dev.fr/api/accept_friend/' + id, {
            method: 'POST',
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

            }).catch((error) => {
                console.error(error);
            });
    }
    cancelFriend = (id) => {
        return fetch('https://api-orga.kp-dev.fr/api/delete_friend/' + id, {
            method: 'POST',
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
                //this.setState({ friends: results.user.friend_of })

            }).catch((error) => {
                console.error(error);
            });
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
                <View style={styles.container}>
                    <ScrollView style={styles.container}>
                        {
                            this.state.friends.length ?

                                this.state.friends.map((friend, index) => {
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
                                                <TouchableOpacity style={[styles.btnGreen]} onPress={() => this.acceptFriend(friend.id)}>
                                                    <Text style={[styles.textWhite, styles.textBold]}>
                                                        V
                                </Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity style={[styles.btnGreenOutLine, styles.marginLeft40]} onPress={() => this.cancelFriend(friend.id)}>
                                                    <Text style={[styles.textGreen, styles.textBold]}>
                                                        X
                                </Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    )


                                })
                                :
                                <View>
                                    <Text style={[styles.textCenter, styles.marginTop20]}>Vous n'avez pas encore reçu de demande d'ami</Text>
                                    <Text style={[styles.textCenter, styles.marginTop40, styles.textSecondary]}>Vous pouvez trouvez vos amis via l'outil de recherche</Text>
                                    <TouchableOpacity onPress={() => navigation.navigate('SearchFriends')} style={[styles.btnGreen, styles.marginTop10, styles.marginBottom40, styles.textCenter]}>
                                        <Text style={[styles.textBold, styles.textWhite, styles.textCenter, styles.marginBottom10, styles.marginTop10]}>Rechercher des amis</Text>
                                    </TouchableOpacity>
                                </View>

                        }
                    </ScrollView>
                </View >
            )
        }
    }
}