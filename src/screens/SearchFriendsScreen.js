import React from 'react'
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import styles from '../style/Style'
import { ScrollView } from 'react-native-gesture-handler';
import axios from 'axios';
import ajax from '../services/FetchEvents';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class SearchFriends extends React.Component {

    state = {
        events: [],
        name: null,
        results: [],
    }

    async componentDidMount() {
        const events = await ajax.fetchEvents();
        this.setState({ events });
    }

    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <TextInput style={[styles.input, styles.marginTop10]} placeholder={"Tapez le nom de votre ami"} onChange={(name) => {
                    this.setState({ name: name });
                }}></TextInput>
                <View style={{ display: "flex", flexDirection: "column" }}>
                    <TouchableOpacity style={[styles.btnGreen, styles.marginTop20, styles.marginBottom40, styles.textCenter, styles.alignCenter]} type="submit">
                        <Text style={[styles.textBold, styles.textWhite, styles.marginTop10, styles.marginBottom10]}>Rechercher</Text>
                    </TouchableOpacity>
                </View>
                <Text style={[styles.bold, styles.marginTop20]}>Résultats</Text>
                <ScrollView>
                    <View style={[styles.dFlex, styles.alignCenter, styles.justifyBetween, styles.marginBottom20, styles.marginTop20]}>
                        <View style={[styles.dFlex, styles.alignCenter]}>
                            <Image resizeMode={'cover'}
                                source={{ uri: 'https://i.stack.imgur.com/6FiRR.png' }}
                                style={styles.profil_picture} />
                            <Text style={[styles.marginLeft5]}>John</Text>
                            <Text style={[styles.textBold, styles.marginLeft5]}>Bill</Text>
                        </View>
                        <TouchableOpacity style={[styles.btnGreenOutLine]}>
                            <Text style={[styles.textGreen, styles.textBold]}>
                                Inviter
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.dFlex, styles.alignCenter, styles.justifyBetween, styles.marginBottom20]}>
                        <View style={[styles.dFlex, styles.alignCenter]}>
                            <Image resizeMode={'cover'}
                                source={{ uri: 'https://i.stack.imgur.com/6FiRR.png' }}
                                style={styles.profil_picture} />
                            <Text style={[styles.marginLeft5]}>John</Text>
                            <Text style={[styles.textBold, styles.marginLeft5]}>Bill</Text>
                        </View>
                        <TouchableOpacity style={[styles.btnGreenOutLine]}>
                            <Text style={[styles.textGreen, styles.textBold]}>
                                Inviter
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.dFlex, styles.alignCenter, styles.justifyBetween, styles.marginBottom20]}>
                        <View style={[styles.dFlex, styles.alignCenter]}>
                            <Image resizeMode={'cover'}
                                source={{ uri: 'https://i.stack.imgur.com/6FiRR.png' }}
                                style={styles.profil_picture} />
                            <Text style={[styles.marginLeft5]}>John</Text>
                            <Text style={[styles.textBold, styles.marginLeft5]}>Bill</Text>
                        </View>
                        <TouchableOpacity style={[styles.btnGreenOutLine]}>
                            <Text style={[styles.textGreen, styles.textBold]}>
                                Inviter
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.dFlex, styles.alignCenter, styles.justifyBetween, styles.marginBottom20]}>
                        <View style={[styles.dFlex, styles.alignCenter]}>
                            <Image resizeMode={'cover'}
                                source={{ uri: 'https://i.stack.imgur.com/6FiRR.png' }}
                                style={styles.profil_picture} />
                            <Text style={[styles.marginLeft5]}>John</Text>
                            <Text style={[styles.textBold, styles.marginLeft5]}>Bill</Text>
                        </View>
                        <TouchableOpacity style={[styles.btnGreenOutLine]}>
                            <Text style={[styles.textGreen, styles.textBold]}>
                                Inviter
                            </Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>


            </View >
        )
    }

}