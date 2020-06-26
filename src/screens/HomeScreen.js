import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import styles from '../style/Style'
import { ScrollView } from 'react-native-gesture-handler';
import axios from 'axios';
import ajax from '../services/FetchEvents';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class Home extends React.Component {

    state = {
        events: [],

    }

    async componentDidMount() {
        const data = await ajax.fetchEvents();
        this.setState({ events: data });

    }

    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.container}>

                <Text style={[styles.title, styles.marginTop20, styles.marginBottom20]}>Vos prochains événements</Text>
                <ScrollView>
                    <View style={styles.marginBottom40}>
                        <TouchableOpacity onPress={() => navigation.navigate('Event')}>
                            <Image resizeMode={'cover'}
                                source={require('../images/bg-event-1.jpeg')}
                                style={styles.canvas} />
                        </TouchableOpacity>
                        <View style={[styles.dFlex, styles.justifyBetween, styles.alignCenter, styles.marginTop10]}>
                            <Text ellipsizeMode='tail' numberOfLines={2} style={styles.titleEvent}>Anniv de Ju'</Text>
                            <TouchableOpacity style={[styles.btnGreen]} onPress={() => navigation.navigate('Event')}>
                                <Text style={[styles.textBold, styles.textWhite]}>voir ></Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.dFlex}>
                            <Text ellipsizeMode='tail' numberOfLines={2} style={[styles.bold]}>Dans 3 jours,</Text>
                            <Text ellipsizeMode='tail' numberOfLines={2} style={[styles.marginLeft5]}>11/10/2020</Text>
                        </View>
                    </View>

                    <View style={styles.marginBottom40}>
                        <TouchableOpacity onPress={() => navigation.navigate('Event')}>
                            <Image resizeMode={'cover'}
                                source={require('../images/bg-event-2.jpeg')}
                                style={styles.canvas} />
                        </TouchableOpacity>
                        <View style={[styles.dFlex, styles.justifyBetween, styles.alignCenter, styles.marginTop10]}>
                            <Text ellipsizeMode='tail' numberOfLines={2} style={styles.titleEvent}>Full Moon</Text>
                            <TouchableOpacity style={[styles.btnGreen]} onPress={() => navigation.navigate('Event')}>
                                <Text style={[styles.textBold, styles.textWhite]}>voir ></Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.dFlex}>
                            <Text ellipsizeMode='tail' numberOfLines={2} style={[styles.bold]}>Dans 7 jours,</Text>
                            <Text ellipsizeMode='tail' numberOfLines={2} style={[styles.marginLeft5]}>15/10/2020</Text>
                        </View>
                    </View>

                    <Text onPress={() => navigation.navigate('Login')}>Connexion</Text>
                    <Text onPress={() => navigation.navigate('Register')}>Inscription</Text>
                </ScrollView>

            </View >
        )
    }

}