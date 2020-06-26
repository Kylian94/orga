import React from 'react'
import { View, Text, TouchableOpacity, Image, TextInput, CheckBox } from 'react-native'
import styles from '../style/Style'
import { ScrollView } from 'react-native-gesture-handler';
import axios from 'axios';
import ajax from '../services/FetchEvents';
import Icon from 'react-native-vector-icons/FontAwesome';

import RadioButton from '../components/RadioButton';



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
    }



    async componentDidMount() {
        const events = await ajax.fetchEvents();
        this.setState({ events });
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

        const { navigation } = this.props;
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
                        <View style={[styles.marginTop20, styles.dFlexColumn, styles.alignCenter, styles.marginLeft5, styles.marginRight30]}>
                            <CheckBox value={this.state.checkbox1}
                                onChange={() => this.setState({ checkbox1: !this.state.checkbox1 })}></CheckBox>
                            <Image resizeMode={'cover'}
                                source={require('../images/user-default.jpg')}
                                style={styles.profil_picture} />
                            <Text>John</Text>
                            <Text style={[styles.textBold]}>Bill</Text>
                        </View>
                        <View style={[styles.marginTop20, styles.dFlexColumn, styles.alignCenter, styles.marginLeft5, styles.marginRight30]}>
                            <CheckBox value={this.state.checkbox2}
                                onChange={() => this.setState({ checkbox2: !this.state.checkbox2 })}></CheckBox><Image resizeMode={'cover'}
                                    source={require('../images/user-default.jpg')}
                                    style={styles.profil_picture} />
                            <Text>John</Text>
                            <Text style={[styles.textBold]}>Bill</Text>
                        </View>
                        <View style={[styles.marginTop20, styles.dFlexColumn, styles.alignCenter, styles.marginLeft5, styles.marginRight30]}>
                            <CheckBox value={this.state.checkbox3}
                                onChange={() => this.setState({ checkbox3: !this.state.checkbox3 })}></CheckBox><Image resizeMode={'cover'}
                                    source={require('../images/user-default.jpg')}
                                    style={styles.profil_picture} />
                            <Text>John</Text>
                            <Text style={[styles.textBold]}>Bill</Text>
                        </View>
                        <View style={[styles.marginTop20, styles.dFlexColumn, styles.alignCenter, styles.marginLeft5, styles.marginRight30]}>
                            <CheckBox value={this.state.checkbox1}
                                onChange={() => this.setState({ checkbox1: !this.state.checkbox1 })}></CheckBox>
                            <Image resizeMode={'cover'}
                                source={require('../images/user-default.jpg')}
                                style={styles.profil_picture} />
                            <Text>John</Text>
                            <Text style={[styles.textBold]}>Bill</Text>
                        </View>
                        <View style={[styles.marginTop20, styles.dFlexColumn, styles.alignCenter, styles.marginLeft5, styles.marginRight30]}>
                            <CheckBox value={this.state.checkbox1}
                                onChange={() => this.setState({ checkbox1: !this.state.checkbox1 })}></CheckBox>
                            <Image resizeMode={'cover'}
                                source={require('../images/user-default.jpg')}
                                style={styles.profil_picture} />
                            <Text>John</Text>
                            <Text style={[styles.textBold]}>Bill</Text>
                        </View>
                        <View style={[styles.marginTop20, styles.dFlexColumn, styles.alignCenter, styles.marginLeft5, styles.marginRight30]}>
                            <CheckBox value={this.state.checkbox1}
                                onChange={() => this.setState({ checkbox1: !this.state.checkbox1 })}></CheckBox>
                            <Image resizeMode={'cover'}
                                source={require('../images/user-default.jpg')}
                                style={styles.profil_picture} />
                            <Text>John</Text>
                            <Text style={[styles.textBold]}>Bill</Text>
                        </View>

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