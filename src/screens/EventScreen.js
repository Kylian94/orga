import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from '../style/Style'


import { ScrollView, TouchableOpacity, Button } from 'react-native-gesture-handler';

export default class Event extends React.Component {

    state = {
        events: null,
        accepted: 1,
    };
    render() {
        const { navigation } = this.props;
        return (
            <View >
                <ScrollView>
                    <Image source={{ uri: 'https://i.stack.imgur.com/6FiRR.png' }} style={[styles.map]}></Image>


                    <View style={[styles.container, styles.dFlex, styles.alignCenter, styles.justifyBetween, styles.marginBottom10, styles.marginTop10]}>
                        <Text style={[styles.titleEvent, styles.textGreen]}>Anniv' de Julien</Text>
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
                                        source={{ uri: 'https://i.stack.imgur.com/6FiRR.png' }}
                                        style={styles.profil_picture} />
                                    <Text>John</Text>
                                    <Text style={[styles.textBold]}>Bill</Text>
                                </View>
                                <View style={[styles.marginTop20, styles.dFlexColumn, styles.alignCenter, styles.marginLeft5, styles.marginRight30]}>
                                    <Image resizeMode={'cover'}
                                        source={{ uri: 'https://i.stack.imgur.com/6FiRR.png' }}
                                        style={styles.profil_picture} />
                                    <Text>John</Text>
                                    <Text style={[styles.textBold]}>Bill</Text>
                                </View>
                                <View style={[styles.marginTop20, styles.dFlexColumn, styles.alignCenter, styles.marginLeft5, styles.marginRight30]}>
                                    <Image resizeMode={'cover'}
                                        source={{ uri: 'https://i.stack.imgur.com/6FiRR.png' }}
                                        style={styles.profil_picture} />
                                    <Text>John</Text>
                                    <Text style={[styles.textBold]}>Bill</Text>
                                </View>
                                <View style={[styles.marginTop20, styles.dFlexColumn, styles.alignCenter, styles.marginLeft5, styles.marginRight30]}>
                                    <Image resizeMode={'cover'}
                                        source={{ uri: 'https://i.stack.imgur.com/6FiRR.png' }}
                                        style={styles.profil_picture} />
                                    <Text>John</Text>
                                    <Text style={[styles.textBold]}>Bill</Text>
                                </View>
                                <View style={[styles.marginTop20, styles.dFlexColumn, styles.alignCenter, styles.marginLeft5, styles.marginRight30]}>
                                    <Image resizeMode={'cover'}
                                        source={{ uri: 'https://i.stack.imgur.com/6FiRR.png' }}
                                        style={styles.profil_picture} />
                                    <Text>John</Text>
                                    <Text style={[styles.textBold]}>Bill</Text>
                                </View>
                                <View style={[styles.marginTop20, styles.dFlexColumn, styles.alignCenter, styles.marginLeft5, styles.marginRight30]}>
                                    <Image resizeMode={'cover'}
                                        source={{ uri: 'https://i.stack.imgur.com/6FiRR.png' }}
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
                                <Text style={[styles.buttonText, styles.textBold, styles.marginLeft20]}>Nourriture</Text>
                                <TouchableOpacity onPress={() => navigation.navigate('Liste')}>
                                    <Text style={[styles.buttonText, styles.marginRight30]}>></Text>
                                </TouchableOpacity>
                            </View>
                            <View style={[styles.listCard, styles.dFlex, styles.alignCenter, styles.justifyBetween, styles.marginBottom20]}>
                                <Text style={[styles.buttonText, styles.textBold, styles.marginLeft20]}>Nourriture</Text>
                                <TouchableOpacity onPress={() => navigation.navigate('Liste')}>
                                    <Text style={[styles.buttonText, styles.marginRight30]}>></Text>
                                </TouchableOpacity>
                            </View>
                            <View style={[styles.listCard, styles.dFlex, styles.alignCenter, styles.justifyBetween, styles.marginBottom20]}>
                                <Text style={[styles.buttonText, styles.textBold, styles.marginLeft20]}>Nourriture</Text>
                                <TouchableOpacity onPress={() => navigation.navigate('Liste')}>
                                    <Text style={[styles.buttonText, styles.marginRight30]}>></Text>
                                </TouchableOpacity>
                            </View>
                        </View>



                    </View>

                </ScrollView>
            </View >
        )
    }
}

