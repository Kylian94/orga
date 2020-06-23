import React from 'react'
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
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
            <View>
                <View style={[styles.container, styles.marginTop20]}>
                    <Image resizeMode={'cover'}
                        source={{ uri: 'https://i.stack.imgur.com/6FiRR.png' }}
                        style={[styles.canvas, styles.positionRelative]} />

                    <TouchableOpacity>
                        <Icon name={"plus-circle"} color={"#21B3C6"} size={42} style={[styles.positionAbsolute, styles.addImage]} />
                    </TouchableOpacity>
                    <View style={[styles.dFlexColumn]}>
                        <Text style={[styles.bold, styles.marginTop10]}>Titre de l'évenement</Text>
                        <TextInput style={[styles.input, styles.marginTop10]} placeholder={"Nom de votre event"} onChange={(text) => {
                            this.setState({ text: text });
                        }}></TextInput>
                        <View style={[styles.dFlex, styles.marginTop20, styles.justifyBetween]}>
                            <RadioButton PROP={PROP} />
                        </View>
                    </View>

                </View>
            </View >
        )
    }
}