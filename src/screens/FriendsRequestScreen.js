import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import styles from '../style/Style'
import { ScrollView } from 'react-native-gesture-handler';
import axios from 'axios';
import ajax from '../services/FetchEvents';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class FriendsRequest extends React.Component {

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
                <ScrollView style={styles.container}>
                    <View style={[{ display: "flex", flexDirection: "row" }, styles.marginTop20, styles.alignCenter, styles.justifyBetween, styles.marginBottom20]}>
                        <View style={[{ display: "flex", flexDirection: "row" }, styles.alignCenter]}>
                            <Image resizeMode={'cover'}
                                source={{ uri: 'https://i.stack.imgur.com/6FiRR.png' }}
                                style={styles.profil_picture} />
                            <Text style={[styles.marginLeft5]}>John</Text>
                            <Text style={[styles.textBold, styles.marginLeft5]}>Bill</Text>
                        </View>
                        <View style={[{ display: "flex", flexDirection: "row" }]}>
                            <TouchableOpacity style={[styles.btnGreen]}>
                                <Text style={[styles.textWhite, styles.textBold]}>
                                    V
                            </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.btnGreenOutLine, styles.marginLeft40]}>
                                <Text style={[styles.textGreen, styles.textBold]}>
                                    X
                            </Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                    <View style={[{ display: "flex", flexDirection: "row" }, styles.marginTop20, styles.alignCenter, styles.justifyBetween, styles.marginBottom20]}>
                        <View style={[{ display: "flex", flexDirection: "row" }, styles.alignCenter]}>
                            <Image resizeMode={'cover'}
                                source={{ uri: 'https://i.stack.imgur.com/6FiRR.png' }}
                                style={styles.profil_picture} />
                            <Text style={[styles.marginLeft5]}>John</Text>
                            <Text style={[styles.textBold, styles.marginLeft5]}>Bill</Text>
                        </View>
                        <View style={[{ display: "flex", flexDirection: "row" }]}>
                            <TouchableOpacity style={[styles.btnGreen]}>
                                <Text style={[styles.textWhite, styles.textBold]}>
                                    V
                            </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.btnGreenOutLine, styles.marginLeft40]}>
                                <Text style={[styles.textGreen, styles.textBold]}>
                                    X
                            </Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                    <View style={[{ display: "flex", flexDirection: "row" }, styles.marginTop20, styles.alignCenter, styles.justifyBetween, styles.marginBottom20]}>
                        <View style={[{ display: "flex", flexDirection: "row" }, styles.alignCenter]}>
                            <Image resizeMode={'cover'}
                                source={{ uri: 'https://i.stack.imgur.com/6FiRR.png' }}
                                style={styles.profil_picture} />
                            <Text style={[styles.marginLeft5]}>John</Text>
                            <Text style={[styles.textBold, styles.marginLeft5]}>Bill</Text>
                        </View>
                        <View style={[{ display: "flex", flexDirection: "row" }]}>
                            <TouchableOpacity style={[styles.btnGreen]}>
                                <Text style={[styles.textWhite, styles.textBold]}>
                                    V
                            </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.btnGreenOutLine, styles.marginLeft40]}>
                                <Text style={[styles.textGreen, styles.textBold]}>
                                    X
                            </Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                    <View style={[{ display: "flex", flexDirection: "row" }, styles.marginTop20, styles.alignCenter, styles.justifyBetween, styles.marginBottom20]}>
                        <View style={[{ display: "flex", flexDirection: "row" }, styles.alignCenter]}>
                            <Image resizeMode={'cover'}
                                source={{ uri: 'https://i.stack.imgur.com/6FiRR.png' }}
                                style={styles.profil_picture} />
                            <Text style={[styles.marginLeft5]}>John</Text>
                            <Text style={[styles.textBold, styles.marginLeft5]}>Bill</Text>
                        </View>
                        <View style={[{ display: "flex", flexDirection: "row" }]}>
                            <TouchableOpacity style={[styles.btnGreen]}>
                                <Text style={[styles.textWhite, styles.textBold]}>
                                    V
                            </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.btnGreenOutLine, styles.marginLeft40]}>
                                <Text style={[styles.textGreen, styles.textBold]}>
                                    X
                            </Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                    <View style={[{ display: "flex", flexDirection: "row" }, styles.marginTop20, styles.alignCenter, styles.justifyBetween, styles.marginBottom20]}>
                        <View style={[{ display: "flex", flexDirection: "row" }, styles.alignCenter]}>
                            <Image resizeMode={'cover'}
                                source={{ uri: 'https://i.stack.imgur.com/6FiRR.png' }}
                                style={styles.profil_picture} />
                            <Text style={[styles.marginLeft5]}>John</Text>
                            <Text style={[styles.textBold, styles.marginLeft5]}>Bill</Text>
                        </View>
                        <View style={[{ display: "flex", flexDirection: "row" }]}>
                            <TouchableOpacity style={[styles.btnGreen]}>
                                <Text style={[styles.textWhite, styles.textBold]}>
                                    V
                            </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.btnGreenOutLine, styles.marginLeft40]}>
                                <Text style={[styles.textGreen, styles.textBold]}>
                                    X
                            </Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                    <View style={[{ display: "flex", flexDirection: "row" }, styles.marginTop20, styles.alignCenter, styles.justifyBetween, styles.marginBottom20]}>
                        <View style={[{ display: "flex", flexDirection: "row" }, styles.alignCenter]}>
                            <Image resizeMode={'cover'}
                                source={{ uri: 'https://i.stack.imgur.com/6FiRR.png' }}
                                style={styles.profil_picture} />
                            <Text style={[styles.marginLeft5]}>John</Text>
                            <Text style={[styles.textBold, styles.marginLeft5]}>Bill</Text>
                        </View>
                        <View style={[{ display: "flex", flexDirection: "row" }]}>
                            <TouchableOpacity style={[styles.btnGreen]}>
                                <Text style={[styles.textWhite, styles.textBold]}>
                                    V
                            </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.btnGreenOutLine, styles.marginLeft40]}>
                                <Text style={[styles.textGreen, styles.textBold]}>
                                    X
                            </Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                    <View style={[{ display: "flex", flexDirection: "row" }, styles.marginTop20, styles.alignCenter, styles.justifyBetween, styles.marginBottom20]}>
                        <View style={[{ display: "flex", flexDirection: "row" }, styles.alignCenter]}>
                            <Image resizeMode={'cover'}
                                source={{ uri: 'https://i.stack.imgur.com/6FiRR.png' }}
                                style={styles.profil_picture} />
                            <Text style={[styles.marginLeft5]}>John</Text>
                            <Text style={[styles.textBold, styles.marginLeft5]}>Bill</Text>
                        </View>
                        <View style={[{ display: "flex", flexDirection: "row" }]}>
                            <TouchableOpacity style={[styles.btnGreen]}>
                                <Text style={[styles.textWhite, styles.textBold]}>
                                    V
                            </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.btnGreenOutLine, styles.marginLeft40]}>
                                <Text style={[styles.textGreen, styles.textBold]}>
                                    X
                            </Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </ScrollView>
            </View >
        )
    }

}