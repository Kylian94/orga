import React from 'react'
import { View, Text, TouchableOpacity, Image, ActivityIndicator } from 'react-native'
import styles from '../style/Style'
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';

import AsyncStorage from '@react-native-community/async-storage';

export default class Home extends React.Component {

    state = {
        events: [],
        token: null,
        user_id: null,
    }

    async componentDidMount() {
        var value = AsyncStorage.getItem('token');
        await value.then((e) => {

            this.setState({
                token: e
            });
        })
        var user = AsyncStorage.getItem('user_id');
        await user.then((e) => {
            this.setState({
                user_id: e
            })
        })
        console.log(this.state.user_id)
        console.log(this.state.token)
        return fetch('https://api-orga.kp-dev.fr/api/events', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + this.state.token,
            },
        }) // requête vers l'API
            .then((response) => response.json())
            .then((results) => {
                this.setState({
                    events: results.events
                })

                // console.log(results)

            }).catch((error) => {
                console.error(error);
            });
    }

    render() {
        const { navigation } = this.props;
        const events = this.state.events;

        if (events == null) {
            return (
                <View style={[styles.container, styles.marginTop20, { flex: 1, alignItems: "center", justifyContent: "center" }]}>
                    <ActivityIndicator size="large" color="#21B3C6" />
                </View>
            )
        } else {
            return (
                <ScrollView style={[styles.container]} >
                    <Text style={[styles.title, styles.marginTop20, styles.marginBottom20]}>Vos prochains événements</Text>

                    {
                        events.length ?

                            events.map(function (event, index) {
                                return (
                                    <View style={[styles.dFlex]}>
                                        <View style={styles.marginBottom20} key={index}>
                                            <TouchableOpacity onPress={() => navigation.navigate('Event')}>
                                                <Image resizeMode={'cover'}
                                                    source={require('../images/bg-event-1.jpeg')}
                                                    style={styles.canvas} />
                                            </TouchableOpacity>
                                            <View style={[styles.dFlex, styles.justifyBetween, styles.alignCenter, styles.marginTop10]}>
                                                <Text ellipsizeMode='tail' numberOfLines={2} style={styles.titleEvent}>{event.title}</Text>
                                                <TouchableOpacity style={[styles.btnGreen]} onPress={() => navigation.navigate('Event', { id: event.id })}>
                                                    <Text style={[styles.textBold, styles.textWhite]}>voir ></Text>
                                                </TouchableOpacity>
                                            </View>

                                            <View style={styles.dFlex}>
                                                <Text ellipsizeMode='tail' numberOfLines={2} style={[styles.bold]}>Dans 3 jours,</Text>
                                                <Text ellipsizeMode='tail' numberOfLines={2} style={[styles.marginLeft5]}>{event.date}</Text>
                                            </View>
                                        </View>
                                    </View>
                                )
                            })
                            :
                            <View style={[styles.textCenter, styles.dFlexColumn, styles.alignCenter, styles.justifyCenter]}>
                                <View style={[{ display: "flex", flexDirection: "column", justifyContent: "center" }, styles.alignCenter,]}>
                                    <Image resizeMode={'cover'}
                                        source={require('../images/sad.png')}
                                        style={[styles.pictoBig, styles.marginTop20]} />
                                </View>
                                <Text style={[styles.textCenter, styles.marginTop20, styles.textGreen]}>Vous n'avez pas encore d'événements à venir.</Text>
                                <View style={[{ display: "flex", flexDirection: "column", alignItems: "center" }]}>
                                    <Text style={[styles.marginTop10, styles.textSecondary, styles.textCenter]}>Dans votre profil, vous pouvez rechercher et ajouter vos amis.</Text>
                                </View>
                                <View style={[styles.fixedBottom, styles.bold]}>
                                    <View style={[{ display: "flex", flexDirection: "column", alignItems: "center" }]}>
                                        <Text style={[styles.marginTop20, styles.subTitle]}>Créez votre événement maintenant !</Text>
                                        <Image resizeMode={'cover'}
                                            source={require('../images/arrow-down.png')}
                                            style={[styles.marginTop20]} />
                                    </View>
                                </View>
                            </View >
                    }
                </ScrollView>
            )
        }




    }

}

