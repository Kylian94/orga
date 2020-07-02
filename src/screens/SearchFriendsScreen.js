import React from 'react'
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import styles from '../style/Style'
import { ScrollView } from 'react-native-gesture-handler';

import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-community/async-storage';

export default class SearchFriends extends React.Component {

    state = {
        users: null,
        search: null,
        token: null,
    }

    async componentDidMount() {
        var value = AsyncStorage.getItem('token');
        await value.then((e) => {
            this.setState({
                token: e
            })
        });
    }
    searchFriends = () => {
        return fetch("https://api-orga.kp-dev.fr/api/search_friends", {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + this.state.token,
            },
            body: JSON.stringify({
                search: this.state.search,
            }),
        })
            .then((response) => response.json())
            .then((results) => {
                //console.log(results)
                this.setState({ users: results.users })

            }).catch((error) => {
                console.error(error);
            });
    }

    render() {
        //console.log(this.state.search)
        const { navigation } = this.props;
        if (this.state.users == null) {
            return (
                <View style={styles.container}>
                    <TextInput style={[styles.input, styles.marginTop10]} placeholder={"Tapez le nom de votre ami"} onChangeText={(search) => {
                        this.setState({ search: search });
                    }}></TextInput>
                    <View style={{ display: "flex", flexDirection: "column" }}>
                        <TouchableOpacity onPress={() => this.searchFriends()} style={[styles.btnGreen, styles.marginTop20, styles.marginBottom40, styles.textCenter, styles.alignCenter]} type="submit">
                            <Text style={[styles.textBold, styles.textWhite, styles.marginTop10, styles.marginBottom10]}>Rechercher</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )
        } else {
            return (
                <View style={[styles.container, styles.dFlexColumn]}>
                    <TextInput style={[styles.input, styles.marginTop10]} placeholder={"Tapez le nom de votre ami"} onChangeText={(search) => {
                        this.setState({ search: search });
                    }}></TextInput>
                    <View style={{ display: "flex", flexDirection: "column" }}>
                        <TouchableOpacity onPress={() => this.searchFriends()} style={[styles.btnGreen, styles.marginTop20, styles.marginBottom20, styles.textCenter, styles.alignCenter]} type="submit">
                            <Text style={[styles.textBold, styles.textWhite, styles.marginTop10, styles.marginBottom10]}>Rechercher</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={[styles.bold, styles.marginTop10]}>Résultats</Text>
                    <ScrollView style={[styles.marginTop20]}>

                        {
                            this.state.users.length ?
                                this.state.users.map((user, index) => {
                                    return (
                                        <View key={index} style={[styles.dFlex, styles.alignCenter, styles.justifyBetween, styles.marginBottom20]}>
                                            <View style={[styles.dFlex, styles.alignCenter]}>
                                                <Image resizeMode={'cover'}
                                                    source={{ uri: 'https://i.stack.imgur.com/6FiRR.png' }}
                                                    style={styles.profil_picture} />
                                                <Text style={[styles.marginLeft5]}>{user.firstname}</Text>
                                                <Text style={[styles.textBold, styles.marginLeft5]}>{user.lastname}</Text>
                                            </View>
                                            <TouchableOpacity style={[styles.btnGreenOutLine]}>
                                                <Text style={[styles.textGreen, styles.textBold]}>
                                                    Inviter
                                        </Text>
                                            </TouchableOpacity>
                                        </View>
                                    )
                                })
                                :
                                <Text style={[styles.textCenter, styles.textSecondary]}>Aucun résultat</Text>
                        }
                    </ScrollView>
                </View >
            )
        }
    }
}