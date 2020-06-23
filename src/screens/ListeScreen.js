import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from '../style/Style'

import Icon from 'react-native-vector-icons/FontAwesome';

import { ScrollView, TouchableOpacity, Button, TextInput } from 'react-native-gesture-handler';

function Liste(props) {
    const { navigation } = props
    return (
        <View >
            <ScrollView >
                <View style={[styles.container, styles.dFlex, styles.infos, styles.justifyBetween, styles.alignCenter]}>
                    <Text style={[styles.textBold]}>Nourriture</Text>
                    <TouchableOpacity style={[styles.marginLeft40]}>
                        <Icon name="plus-circle" color={"#21B3C6"} size={16} />
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
                            <Icon name="minus-circle" color={"gray"} size={16} />
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.marginLeft40]}>
                            <Icon name="plus-circle" color={"#21B3C6"} size={16} />
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
                            <Icon name="minus-circle" color={"gray"} size={16} />
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.marginLeft40]}>
                            <Icon name="plus-circle" color={"#21B3C6"} size={16} />
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
                            <Icon name="minus-circle" color={"gray"} size={16} />
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.marginLeft40]}>
                            <Icon name="plus-circle" color={"#21B3C6"} size={16} />
                        </TouchableOpacity>
                    </View>

                </View>
            </ScrollView>
        </View >
    )
}

export default Liste