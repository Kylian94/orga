import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import styles from '../style/Style'
import { ScrollView } from 'react-native-gesture-handler';
import axios from 'axios';
import ajax from '../services/FetchEvents';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class Profil extends React.Component {

    state = {
        events: []
    }

    async componentDidMount() {
        const events = await ajax.fetchEvents();
        this.setState({ events });
    }

    render() {
        const { navigation } = this.props;
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
                </View>
            </View >
        )
    }

}