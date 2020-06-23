import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from '../style/Style'


import { ScrollView, TouchableOpacity, Button } from 'react-native-gesture-handler';

function AddFriends(props) {
    const { navigation } = props
    return (
        <View >
            <ScrollView>

                <View style={[styles.container, styles.marginTop20]}>
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
                </View>

            </ScrollView>
        </View >
    )
}

export default AddFriends