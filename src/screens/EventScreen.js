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
                            <Text>192 rue Paul</Text>
                            <Text>94500 CHAMPIGNY SUR MARNE</Text>
                        </View>
                        <TouchableOpacity>
                            <Text>
                                Y aller >
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={[styles.dFlex, styles.alignStart, styles.justifyBetween, styles.marginTop20]}>
                        <View style={[styles.dFlexColumn]}>
                            <Text style={[styles.title]}>Participants :</Text>
                        </View>
                        <TouchableOpacity style={[styles.btnGreen]}>
                            <Text style={[styles.textWhite]}>
                                Inviter
                            </Text>
                        </TouchableOpacity>
                    </View>


                </View>

            </ScrollView>
        </View >
    )
}

export default Event