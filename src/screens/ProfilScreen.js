import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import styles from '../style/Style'
import { ScrollView } from 'react-native-gesture-handler';
import axios from 'axios';
import ajax from '../services/FetchEvents';
import Icon from 'react-native-vector-icons/FontAwesome';



import AsyncStorage from '@react-native-community/async-storage';



export default class Profil extends React.Component {

    state = {
        events: [],
        token: null,
    }

    async componentDidMount() {
        const events = await ajax.fetchEvents();
        let token = AsyncStorage.getItem('token');
        this.setState('token', token);
        this.setState({ events });

    }

    logout = () => {

        console.log('test');
        const URI = 'http://api-orga.kp-dev.fr';
        return fetch(URI + "/api/logout", {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + this.state.token
            },

        })
            .then((response) => {
                AsyncStorage.removeItem('token')

                this.props.navigation.goBack();
                // Si un code erreur a été détecté on déclenche une erreur
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                return response;

            })
            .then(response => AsyncStorage.removeItem('token'))
            .catch(e => console.log(e))
    }

    render() {
        const { navigation } = this.props;
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <View style={[styles.infos, styles.justifyCenter, styles.alignCenter]}>
                    <Text style={[styles.bold]}>MON COMPTE</Text>
                </View>
                <View style={[styles.container]}>
                    <Text style={[styles.marginTop20, styles.bold]}>Mon profil</Text>
                    <View style={[styles.dFlex, styles.marginTop20, styles.justifyBetween]}>
                        <View style={[styles.dFlex]}>
                            <Image resizeMode={'cover'}
                                source={{ uri: 'https://i.stack.imgur.com/6FiRR.png' }}
                                style={[styles.profil_picture]} />
                            <View style={[styles.dFlexColumn, styles.marginLeft20]}>
                                <Text>Kylian</Text>
                                <Text>Petitgenet</Text>
                            </View>
                        </View>



                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('Account')} style={{ alignSelf: 'flex-end' }}>
                        <Icon name={'pencil-square'} size={38} color={"#21B3C6"} onPress={() => navigation.navigate('Account')} />
                    </TouchableOpacity>
                    <Text style={[styles.marginTop40, styles.bold]}>Mes amis</Text>
                    <TouchableOpacity style={[styles.btnGreenOutLine, styles.marginTop20, styles.alignCenter]} onPress={() => navigation.navigate('Friends')}>
                        <Text style={[styles.textBold, styles.textGreen, styles.marginTop10, styles.marginBottom10,]}>
                            Tous mes amis
                            </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.btnGreenOutLine, styles.marginTop10, styles.alignCenter]} onPress={() => navigation.navigate('FriendsRequest')}>
                        <Text style={[styles.textBold, styles.textGreen, styles.marginTop10, styles.marginBottom10,]}>
                            Mes demandes d'amis
                            </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.btnGreenOutLine, styles.marginTop10, styles.alignCenter]} onPress={() => navigation.navigate('SearchFriends')}>
                        <Text style={[styles.textBold, styles.textGreen, styles.marginTop10, styles.marginBottom10,]}>
                            Ajouter un ami
                            </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[{ alignSelf: "center" }, styles.marginTop40]} onPress={() => this.logout()}>
                        <Text style={[styles.textGreen,]}>Se déconnecter</Text>
                    </TouchableOpacity>
                </View>
            </View >
        )
    }

}