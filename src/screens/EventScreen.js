import React from 'react'
import { View, Text, Image, ActivityIndicator } from 'react-native'
import styles from '../style/Style'

import { ScrollView, TouchableOpacity, Button, } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';

export default class Event extends React.Component {

    state = {
        event: null,
        accepted: 0,
        token: null,
        user_id: null,
    }

    async componentDidMount() {
        const { id } = this.props.route.params;
        var value = AsyncStorage.getItem('token');
        await value.then((e) => {
            this.setState({
                token: e
            })
        })
        var user = AsyncStorage.getItem('user_id');
        await user.then((e) => {
            this.setState({
                user_id: e
            })
        })
        return fetch('https://api-orga.kp-dev.fr/api/events/' + id, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + this.state.token,
            },
        }) // requête vers l'API
            .then((response) => response.json())
            .then((results) => {
                //console.log(results)
                this.setState({ event: results.event })
                //console.log(this.state.event.users_pending)
                if (this.state.event.users_pending.length) {
                    this.state.event.users_pending.map((user_pending, index) => {
                        //console.log(user_pending)
                        if (user_pending.id == this.state.user_id) {
                            return (this.setState({ accepted: 0 }))
                        } else {
                            return (this.setState({ accepted: 1 }))
                        }
                    })
                } else {
                    this.setState({ accepted: 1 })
                }
                //console.log(this.state.accepted)
            }).catch((error) => {
                console.error(error);
            });
    }
    acceptEvent = (id) => {
        //console.log(id)
        return fetch('https://api-orga.kp-dev.fr/api/' + id + '/accept_event', {
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
                //this.setState({ friends: results.friends })

            }).catch((error) => {
                console.error(error);
            });
    }

    render() {
        const { navigation } = this.props;
        const event = this.state.event;
        if (event == null) {
            return (
                <View style={[styles.container, styles.marginTop20, { flex: 1, alignItems: "center", justifyContent: "center" }]}>
                    <ActivityIndicator size="large" color="#21B3C6" />
                </View>
            )
        } else {
            return (
                <View >
                    <ScrollView>
                        <Image source={require('../images/bg-event-1.jpeg')} style={[styles.map]}></Image>
                        <View style={[styles.container, styles.dFlex, styles.alignCenter, styles.justifyBetween, styles.marginBottom10, styles.marginTop10]}>
                            <Text style={[styles.titleEvent, styles.textGreen]}>{event.title}</Text>
                            <Text style={[styles.bold]}>le 15/05/2020 à 20h</Text>
                        </View>
                        <View style={[this.state.accepted == 1 ? [styles.infos, styles.justifyCenter, styles.alignCenter] : styles.dnone]}>
                            <Text style={[styles.textGreen]}>Vous participez à l'événement</Text>
                        </View>
                        <View style={[this.state.accepted == 1 ? styles.dnone : [styles.dFlexColumn, styles.alignCenter, styles.marginTop10, styles.bgWhite]]}>
                            <Text style={[styles.textCenter, styles.marginBottom10, styles.marginTop10]}>Tim J. vous à invité</Text>
                            <View style={[styles.dFlex, styles.bgGray, styles.alignCenter]}>
                                <View style={[styles.dFlexColumn, styles.alignCenter]}>
                                    <TouchableOpacity onPress={() => { this.acceptEvent(event.id) }} style={[styles.btnGreen, styles.marginTop10, styles.marginBottom10, styles.textCenter]} type="submit">
                                        <Text style={[styles.textBold, styles.textWhite]}>Accepter</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={[styles.dFlexColumn, styles.alignCenter]}>
                                    <TouchableOpacity style={[styles.marginTop10, styles.marginBottom10, styles.textCenter]} type="submit">
                                        <Text style={[styles.textBold, styles.textGreen,]}>Refuser</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View style={[this.state.accepted == 1 ? styles.bgGray : styles.dnone]}>
                            <Image source={{ uri: 'https://img.20mn.fr/Hm_mQqfYRW2-3-uB-i9qAQ/830x532_carte-localisation-place-trocadero-paris.jpg' }} style={[styles.map,]}></Image>
                            <View style={[styles.container]}>
                                <View style={[styles.dFlex, styles.alignStart, styles.justifyBetween, styles.marginTop10]}>
                                    <View style={[styles.dFlexColumn]}>
                                        <Text style={[styles.textBold]}>Adresse de l'événement : </Text>
                                        <Text>{event.adresse}</Text>
                                        <Text>{event.zipCode} {event.city}</Text>
                                    </View>
                                    <TouchableOpacity style={[styles.btnGreenOutLine]}>
                                        <Text style={[styles.textBold, styles.textGreen]}>Y aller ></Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={[styles.dFlex, styles.alignCenter, styles.justifyBetween, styles.marginTop40]}>
                                    <View style={[styles.dFlexColumn]}>
                                        <Text style={[styles.title]}>Participants :</Text>
                                    </View>
                                    <TouchableOpacity style={[styles.btnGreen]} onPress={() => navigation.navigate('AddFriends')}>
                                        <Text style={[styles.textWhite, styles.textBold]}> Inviter </Text>
                                    </TouchableOpacity>
                                </View>
                                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                    {event.users_accepted.map(function (user, index) {
                                        return (
                                            <View key={index} style={[styles.marginTop20, styles.dFlexColumn, styles.alignCenter, styles.marginLeft5, styles.marginRight30]}>
                                                <Image resizeMode={'cover'}
                                                    source={require('../images/user-default.jpg')}
                                                    style={styles.profil_picture} />
                                                <Text>{user.firstname}</Text>
                                                <Text style={[styles.textBold]}>{user.lastname}</Text>
                                            </View>
                                        )
                                    })
                                    }
                                </ScrollView>
                                <View style={[styles.dFlex, styles.alignCenter, styles.justifyBetween, styles.marginTop40, styles.marginBottom20]}>
                                    <View style={[styles.dFlexColumn]}>
                                        <Text style={[styles.title]}>Listes :</Text>
                                    </View>
                                    <TouchableOpacity style={[styles.btnGreen]} onPress={() => navigation.navigate('AddListe', { id: event.id })}>
                                        <Text style={[styles.textWhite, styles.textBold]}>
                                            Ajouter une liste
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                                {event.listes.length ?
                                    event.listes.map(function (liste, index2) {
                                        return (
                                            <View key={index2} style={[styles.listCard, styles.dFlex, styles.alignCenter, styles.justifyBetween, styles.marginBottom20]}>
                                                <Text style={[styles.buttonTextGreen, styles.textBold, styles.marginLeft20]}>{liste.title}</Text>
                                                <TouchableOpacity onPress={() => navigation.navigate('Liste', { id: liste.id })}>
                                                    <Text style={[styles.buttonTextGreen, styles.marginRight30]}>></Text>
                                                </TouchableOpacity>
                                            </View>
                                        )
                                    })
                                    :
                                    <View style={[styles.marginTop10, styles.marginBottom40]}>
                                        <Text style={[styles.textSecondary]}>Aucune liste pour l'instant. Ajoutez une liste organiser votre event !</Text>
                                    </View>
                                }
                            </View>
                        </View>
                    </ScrollView>
                </View >
            )
        }
    }
}
