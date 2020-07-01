import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import styles from '../style/Style'
import { ScrollView } from 'react-native-gesture-handler';
import axios from 'axios';
import ajax from '../services/FetchEvents';
import Icon from 'react-native-vector-icons/FontAwesome';

import AsyncStorage from '@react-native-community/async-storage';


export default class Home extends React.Component {

    state = {
        events: [],
        token: null,

    }



    async componentDidMount() {

        var value = AsyncStorage.getItem('token');
        await value.then((e) => {

            this.setState({
                token: e
            })

            //this.setState({ events: data });
            //this.setState({ events: events })
        });
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

        //this.fetchEvents();
        //console.log(data);
        //this.setState({ events: data });
        //console.log(this.result);
        // console.log('dans didMount() : ' + events)

    }

    render() {
        const { navigation } = this.props;
        const events = this.state.events
        if (events == null) {
            return null
        } else {
            return (

                <View style={styles.container} >

                    <Text style={[styles.title, styles.marginTop20, styles.marginBottom20]}>Vos prochains événements</Text>
                    <ScrollView>
                        {this.state.events.map(function (event, index) {
                            return (
                                <View style={styles.marginBottom40} key={index}>
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

                            )
                        })}
                        {/* <Text onPress={() => navigation.navigate('Login')}>Connexion</Text>
                        <Text onPress={() => navigation.navigate('Register')}>Inscription</Text> */}
                    </ScrollView>

                </View >
            )
        }



    }

}