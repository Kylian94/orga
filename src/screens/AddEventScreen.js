import React from 'react'
import { View, Text, TouchableOpacity, Image, TextInput, CheckBox, ActivityIndicator, } from 'react-native'
import styles from '../style/Style'
import { ScrollView } from 'react-native-gesture-handler';

import Icon from 'react-native-vector-icons/FontAwesome';

import RadioButton from '../components/RadioButton';

import AsyncStorage from '@react-native-community/async-storage';

import DateTimePicker from '@react-native-community/datetimepicker';



export default class AddEvent extends React.Component {



    state = {
        events: [],
        title: null,
        adresse: null,
        zipCode: null,
        date: new Date().toISOString().slice(0, 19).replace('T', ' '),
        city: null,
        token: null,
        friends: null,
        value: null,
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
    createEvent = () => {
        return fetch('https://api-orga.kp-dev.fr/api/create_event', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + this.state.token,
            },
            body: JSON.stringify({
                title: this.state.title,
                isPrivate: this.state.value,
                date: this.state.date,
                adresse: this.state.adresse,
                zipCode: this.state.zipCode,
                city: this.state.city

            }),
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
        const value = this.state.value;
        //const date = this.state.date;

        if (this.state.friends == null) {
            return (
                <View style={[styles.container, styles.marginTop20, { flex: 1, alignItems: "center", justifyContent: "center" }]}>
                    <ActivityIndicator size="large" color="#21B3C6" />
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
                        <TextInput style={[styles.input, styles.marginTop10]} placeholder={"Nom de votre event"} onChangeText={(title) => {
                            this.setState({ title: title });
                        }}></TextInput>

                        <Text style={[styles.bold, styles.marginTop10]}>Type</Text>
                        <View style={[styles.dFlex]}>
                            {PROP.map(res => {
                                return (
                                    <View key={res.key} style={[styles.radioForm]}>
                                        <Text style={styles.radioText}>{res.text}</Text>
                                        <TouchableOpacity
                                            style={styles.radioCircle}
                                            onPress={() => {
                                                this.setState({
                                                    value: res.key,
                                                });
                                            }}>
                                            {value === res.key && <View style={styles.selectedRb} />}
                                        </TouchableOpacity>
                                    </View>
                                );
                            })}
                        </View>
                        <Text style={[styles.marginTop20]}> Selected: {this.state.value}</Text>
                        {/* <DateTimePicker
                            value={date}
                            mode='default'
                            display='default'
                            onChange={this.setState({ date: date })} /> */}
                        <Text style={[styles.bold, styles.marginTop10]}>Lieu</Text>
                        <TextInput style={[styles.input, styles.marginTop10]} placeholder={"Adresse"} onChangeText={(adresse) => {
                            this.setState({ adresse: adresse });
                        }}></TextInput>
                        <View style={[styles.dFlex]}>
                            <TextInput style={[styles.input2block, styles.marginTop10]} placeholder={"Code postal"} onChangeText={(zipCode) => {
                                this.setState({ zipCode: zipCode });
                            }}></TextInput>
                            <TextInput style={[styles.input2block, styles.marginTop10]} placeholder={"Ville"} onChangeText={(city) => {
                                this.setState({ city: city });
                            }}></TextInput>
                        </View>

                        {/*<Text style={[styles.bold, styles.marginTop20]}>Participants</Text>
                         <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            {
                                friends.map((friend, index) => {
                                    return (
                                        <View key={index} style={[styles.marginTop20, styles.dFlexColumn, styles.alignCenter, styles.marginLeft5, styles.marginRight30]}>
                                            <CheckBox value={this.state.checkbox}
                                                onChangeText={() => this.setState({ checkbox1: !this.state.checkbox })}></CheckBox>
                                            <Image resizeMode={'cover'}
                                                source={require('../images/user-default.jpg')}
                                                style={styles.profil_picture} />
                                            <Text>{friend.firstname}</Text>
                                            <Text style={[styles.textBold]}>{friend.lastname}</Text>
                                        </View>
                                    )
                                })
                            }
                        </ScrollView> */}


                        <TouchableOpacity onPress={() => this.createEvent()} style={[styles.btnGreen, styles.marginTop20, styles.marginBottom40, styles.textCenter]}>
                            <Text style={[styles.textBold, styles.textWhite, styles.textCenter, styles.marginBottom10, styles.marginTop10]}>Créer votre événement</Text>
                        </TouchableOpacity>
                    </View >
                </ScrollView>


            )
        }

    }
}
