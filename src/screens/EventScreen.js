import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from '../style/Style'


import { ScrollView, TouchableOpacity, Button } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';

export default class Event extends React.Component {

    state = {
        event: null,
        accepted: null,
        token: null
    };
    async componentDidMount() {

        var value = AsyncStorage.getItem('token');
        await value.then((e) => {
            this.setState({
                token: e
            })
        })
        console.log(this.state.token)
        this.fetchEvent();

    }
    fetchEvent = () => {
        const id = this.props.route.params;
        console.log(id);
        const URI = 'https:api-orga.kp-dev.fr';
        return fetch(URI + "/api/events/" + id, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + this.state.token,
            },

        })
            .then((response) => {
                // Si un code erreur a été détecté on déclenche une erreur
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                console.log(response);
                return response;
            })
            .then((response) => {
                var data = response.json()
                console.log(data)
                data.then((e) => {
                    this.setState({
                        event: e.event,
                        accepted: e.event.isPrivate
                    })
                    console.log(e.event)
                    console.log(this.state.event)
                })
                    .catch(e => console.log(e))
            })
    }
    render() {
        const { navigation } = this.props;
        const event = this.state.event;
        const { id } = this.props.route.params;
        if (event == null) {
            return (
                <View >
                    <Text style={[styles.titleEvent, styles.textGreen]}>Anniv' de Julien {id}</Text>
                </View>
            )
        } else {
            return (
                <View >
                    <ScrollView>
                        <Image source={require('../images/bg-event-1.jpeg')} style={[styles.map]}></Image>


                        <View style={[styles.container, styles.dFlex, styles.alignCenter, styles.justifyBetween, styles.marginBottom10, styles.marginTop10]}>
                            <Text style={[styles.titleEvent, styles.textGreen]}>Anniv' de Julien {id}</Text>
                            <Text style={[styles.bold]}>le 15/05/2020 à 20h</Text>
                        </View>
                        <View style={[this.state.accepted == 1 ? [styles.infos, styles.justifyCenter, styles.alignCenter] : styles.dnone]}>
                            <Text style={[styles.textGreen]}>Vous participez à l'événement</Text>
                        </View>
                        <View style={[this.state.accepted == 1 ? styles.dnone : [styles.dFlexColumn, styles.alignCenter, styles.marginTop10, styles.bgWhite]]}>
                            <Text style={[styles.textCenter, styles.marginBottom10, styles.marginTop10]}>Tim J. vous à invité</Text>
                            <View style={[styles.dFlex, styles.bgGray, styles.alignCenter]}>
                                <View style={[styles.dFlexColumn, styles.alignCenter]}>
                                    <TouchableOpacity style={[styles.btnGreen, styles.marginTop10, styles.marginBottom10, styles.textCenter]} type="submit">
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
                                        <Text>192 rue Paul</Text>
                                        <Text>94500 CHAMPIGNY SUR MARNE</Text>
                                    </View>
                                    <TouchableOpacity style={[styles.btnGreenOutLine]}>
                                        <Text style={[styles.textBold, styles.textGreen]}>
                                            Y aller >
                            </Text>
                                    </TouchableOpacity>
                                </View>

                                <View style={[styles.dFlex, styles.alignCenter, styles.justifyBetween, styles.marginTop40]}>
                                    <View style={[styles.dFlexColumn]}>
                                        <Text style={[styles.title]}>Participants :</Text>
                                    </View>
                                    <TouchableOpacity style={[styles.btnGreen]} onPress={() => navigation.navigate('AddFriends')}>
                                        <Text style={[styles.textWhite, styles.textBold]}>
                                            Inviter
                            </Text>
                                    </TouchableOpacity>
                                </View>

                                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                    <View style={[styles.marginTop20, styles.dFlexColumn, styles.alignCenter, styles.marginLeft5, styles.marginRight30]}>
                                        <Image resizeMode={'cover'}
                                            source={require('../images/user-default.jpg')}
                                            style={styles.profil_picture} />
                                        <Text>John</Text>
                                        <Text style={[styles.textBold]}>Bill</Text>
                                    </View>
                                    <View style={[styles.marginTop20, styles.dFlexColumn, styles.alignCenter, styles.marginLeft5, styles.marginRight30]}>
                                        <Image resizeMode={'cover'}
                                            source={require('../images/user-default.jpg')}
                                            style={styles.profil_picture} />
                                        <Text>John</Text>
                                        <Text style={[styles.textBold]}>Bill</Text>
                                    </View>
                                    <View style={[styles.marginTop20, styles.dFlexColumn, styles.alignCenter, styles.marginLeft5, styles.marginRight30]}>
                                        <Image resizeMode={'cover'}
                                            source={require('../images/user-default.jpg')}
                                            style={styles.profil_picture} />
                                        <Text>John</Text>
                                        <Text style={[styles.textBold]}>Bill</Text>
                                    </View>
                                    <View style={[styles.marginTop20, styles.dFlexColumn, styles.alignCenter, styles.marginLeft5, styles.marginRight30]}>
                                        <Image resizeMode={'cover'}
                                            source={require('../images/user-default.jpg')}
                                            style={styles.profil_picture} />
                                        <Text>John</Text>
                                        <Text style={[styles.textBold]}>Bill</Text>
                                    </View>
                                    <View style={[styles.marginTop20, styles.dFlexColumn, styles.alignCenter, styles.marginLeft5, styles.marginRight30]}>
                                        <Image resizeMode={'cover'}
                                            source={require('../images/user-default.jpg')}
                                            style={styles.profil_picture} />
                                        <Text>John</Text>
                                        <Text style={[styles.textBold]}>Bill</Text>
                                    </View>
                                    <View style={[styles.marginTop20, styles.dFlexColumn, styles.alignCenter, styles.marginLeft5, styles.marginRight30]}>
                                        <Image resizeMode={'cover'}
                                            source={require('../images/user-default.jpg')}
                                            style={styles.profil_picture} />
                                        <Text>John</Text>
                                        <Text style={[styles.textBold]}>Bill</Text>
                                    </View>
                                </ScrollView>

                                <View style={[styles.dFlex, styles.alignCenter, styles.justifyBetween, styles.marginTop40, styles.marginBottom20]}>
                                    <View style={[styles.dFlexColumn]}>
                                        <Text style={[styles.title]}>Listes :</Text>
                                    </View>
                                    <TouchableOpacity style={[styles.btnGreen]} onPress={() => navigation.navigate('AddListe')}>
                                        <Text style={[styles.textWhite, styles.textBold]}>
                                            Ajouter une liste
                            </Text>
                                    </TouchableOpacity>
                                </View>

                                <View style={[styles.listCard, styles.dFlex, styles.alignCenter, styles.justifyBetween, styles.marginBottom20]}>
                                    <Text style={[styles.buttonTextGreen, styles.textBold, styles.marginLeft20]}>Nourriture</Text>
                                    <TouchableOpacity onPress={() => navigation.navigate('Liste')}>
                                        <Text style={[styles.buttonTextGreen, styles.marginRight30]}>></Text>
                                    </TouchableOpacity>
                                </View>

                                <View style={[styles.listCard, styles.dFlex, styles.alignCenter, styles.justifyBetween, styles.marginBottom20]}>
                                    <Text style={[styles.buttonTextGreen, styles.textBold, styles.marginLeft20]}>Nourriture</Text>
                                    <TouchableOpacity onPress={() => navigation.navigate('Liste')}>
                                        <Text style={[styles.buttonTextGreen, styles.marginRight30]}>></Text>
                                    </TouchableOpacity>
                                </View>

                                <View style={[styles.listCard, styles.dFlex, styles.alignCenter, styles.justifyBetween, styles.marginBottom20]}>
                                    <Text style={[styles.buttonTextGreen, styles.textBold, styles.marginLeft20]}>Nourriture</Text>
                                    <TouchableOpacity onPress={() => navigation.navigate('Liste')}>
                                        <Text style={[styles.buttonTextGreen, styles.marginRight30]}>></Text>
                                    </TouchableOpacity>
                                </View>

                            </View>

                        </View>

                    </ScrollView>
                </View >
            )
        }
    }
}
