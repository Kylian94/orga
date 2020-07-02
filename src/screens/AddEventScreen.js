import React from 'react'
import { View, Text, TouchableOpacity, Image, TextInput, CheckBox } from 'react-native'
import styles from '../style/Style'
import { ScrollView } from 'react-native-gesture-handler';

import Icon from 'react-native-vector-icons/FontAwesome';

import RadioButton from '../components/RadioButton';

import AsyncStorage from '@react-native-community/async-storage';

export default class AddEvent extends React.Component {

    state = {
        events: [],
        text: "",
        adress: "",
        zipcode: "",
        city: "",
        checkbox1: false,
        checkbox2: false,
        checkbox3: false,
        token: null,
        friends: null,
    }



    async componentDidMount() {
        var value = AsyncStorage.getItem('token');
        await value.then((e) => {
            this.setState({
                token: e
            })
        })
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
                console.log(results.friends)
                this.setState({ friends: results.friends })

            }).catch((error) => {
                console.error(error);
            });
    }

    render() {

        const PROP = [
            {
                key: '1',
                text: 'Privé',
            },
            {
                key: '0',
                text: 'Public',
            },

        ];

        //console.log(friends)
        const { navigation } = this.props;
        const friends = this.state.friends;
        if (this.state.friends == null) {
            return (
                <View >
                    <Text style={[styles.textCenter, styles.marginTop20, styles.container]}>Chargement...</Text>
                </View>
            )
        } else {
            return (

                <ScrollView style={[]}>
                    <View style={[styles.positionRelative]}>

                        <Image
                            source={require('../images/default-image.png')}
                            style={[styles.map]} />
                        <TouchableOpacity style={[styles.positionAbsolute, styles.addImage]}>
                            <Icon name={"plus-circle"} color={"#21B3C6"} size={42} style={[]} />
                        </TouchableOpacity>
                    </View>


                    <View style={[styles.container]}>



                        <Text style={[styles.bold]}>Titre de l'évenement</Text>
                        <TextInput style={[styles.input, styles.marginTop10]} placeholder={"Nom de votre event"} onChange={(text) => {
                            this.setState({ text: text });
                        }}></TextInput>

                        <Text style={[styles.bold, styles.marginTop10]}>Type</Text>
                        <View style={[styles.dFlex, styles.marginTop10, styles.justifyBetween]}>
                            <RadioButton PROP={PROP} />
                        </View>

                        <Text style={[styles.bold, styles.marginTop10]}>Lieu</Text>
                        <TextInput style={[styles.input, styles.marginTop10]} placeholder={"Adresse"} onChange={(adress) => {
                            this.setState({ text: adress });
                        }}></TextInput>
                        <View style={[styles.dFlex]}>
                            <TextInput style={[styles.input2block, styles.marginTop10]} placeholder={"Code postal"} onChange={(zipcode) => {
                                this.setState({ text: zipcode });
                            }}></TextInput>
                            <TextInput style={[styles.input2block, styles.marginTop10]} placeholder={"Ville"} onChange={(city) => {
                                this.setState({ text: city });
                            }}></TextInput>
                        </View>

                        <Text style={[styles.bold, styles.marginTop20]}>Participants</Text>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            {
                                friends.map((friend, index) => {
                                    return (
                                        <View style={[styles.marginTop20, styles.dFlexColumn, styles.alignCenter, styles.marginLeft5, styles.marginRight30]}>
                                            <CheckBox value={this.state.checkbox}
                                                onChange={() => this.setState({ checkbox1: !this.state.checkbox })}></CheckBox>
                                            <Image resizeMode={'cover'}
                                                source={require('../images/user-default.jpg')}
                                                style={styles.profil_picture} />
                                            <Text>{friend.firstname}</Text>
                                            <Text style={[styles.textBold]}>{friend.lastname}</Text>
                                        </View>
                                    )
                                })
                            }
                        </ScrollView>
                    </View >
                    <View style={[styles.dFlexColumn, styles.alignCenter]}>
                        <TouchableOpacity style={[styles.btnGreen, styles.marginTop40, styles.marginBottom40, styles.textCenter]} type="submit">
                            <Text style={[styles.textBold, styles.textWhite]}>Créer</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>


            )
        }

    }
}