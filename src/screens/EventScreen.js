import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from '../style/Style'


import { ScrollView, TouchableOpacity, Button } from 'react-native-gesture-handler';

function Event(props) {
    const { navigation } = props
    return (
        <View >
            <ScrollView>
                <View style={[styles.infos, styles.justifyCenter, styles.alignCenter]}>
                    <Text style={[styles.textGreen]}>Vous participez à l'événement</Text>
                </View>
                <Image source={{ uri: 'https://img.20mn.fr/Hm_mQqfYRW2-3-uB-i9qAQ/830x532_carte-localisation-place-trocadero-paris.jpg' }} style={[styles.map,]}></Image>
                <View style={[styles.container]}>

                    <View style={[styles.dFlex, styles.alignStart, styles.justifyBetween, styles.marginTop20]}>
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

            </ScrollView>
        </View >
    )
}

export default Event