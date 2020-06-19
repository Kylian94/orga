import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from '../style/Style'


import { ScrollView, TouchableOpacity, Button, TextInput } from 'react-native-gesture-handler';

function Liste(props) {
    const { navigation } = props
    return (
        <View >
            <ScrollView >
                <View style={[styles.container, styles.dFlex, styles.infos, styles.justifyBetween, styles.alignCenter]}>
                    <Text style={[styles.textBold]}>Nourriture</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('AddItem')}>
                        <Text style={[styles.textBold]}>+</Text>
                    </TouchableOpacity>
                </View>
                <View style={[styles.marginTop20, styles.marginBottom40]}>

                    <View style={[styles.container, styles.dFlex, styles.justifyBetween, styles.alignCenter]}>
                        <View style={[styles.dFlex, styles.alignCenter]}>
                            <Image resizeMode={'cover'}
                                source={{ uri: 'https://i.stack.imgur.com/6FiRR.png' }}
                                style={styles.profil_picture} />
                            <Text style={[styles.marginLeft5]}>John</Text>
                            <Text style={[styles.marginLeft5, styles.textBold]}>Bill</Text>
                            <Text> prend</Text>
                            <Text> du jambon</Text>
                        </View>

                        <TouchableOpacity>
                            <Text style={[styles.textBold]}>-</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.marginLeft40]}>
                            <Text style={[styles.textBold]}>+</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.container, styles.dFlex, styles.justifyBetween, styles.alignCenter]}>
                        <View style={[styles.dFlex, styles.alignCenter]}>
                            <Image resizeMode={'cover'}
                                source={{ uri: 'https://i.stack.imgur.com/6FiRR.png' }}
                                style={styles.profil_picture} />
                            <Text style={[styles.marginLeft5]}>John</Text>
                            <Text style={[styles.marginLeft5, styles.textBold]}>Bill</Text>
                            <Text> prend</Text>
                            <Text> du jambon</Text>
                        </View>

                        <TouchableOpacity>
                            <Text style={[styles.textBold]}>-</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.marginLeft40]}>
                            <Text style={[styles.textBold]}>+</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.container, styles.dFlex, styles.justifyBetween, styles.alignCenter]}>
                        <View style={[styles.dFlex, styles.alignCenter]}>
                            <Image resizeMode={'cover'}
                                source={{ uri: 'https://i.stack.imgur.com/6FiRR.png' }}
                                style={styles.profil_picture} />
                            <Text style={[styles.marginLeft5]}>John</Text>
                            <Text style={[styles.marginLeft5, styles.textBold]}>Bill</Text>
                            <Text> prend</Text>
                            <Text> du jambon</Text>
                        </View>

                        <TouchableOpacity>
                            <Text style={[styles.textBold]}>-</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.marginLeft40]}>
                            <Text style={[styles.textBold]}>+</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </ScrollView>
        </View >
    )
}

export default Liste