import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import styles from '../style/Style'
import { ScrollView } from 'react-native-gesture-handler';

function Home(props) {
    const { navigation } = props
    return (
        <View style={styles.container}>
            <Text style={[styles.title, styles.marginTop20]}>Vos prochains événements</Text>
            <ScrollView>
                <View style={styles.marginTop20}>
                    <TouchableOpacity onPress={() => navigation.navigate('Event')}>
                        <Image resizeMode={'cover'}
                            source={{ uri: 'https://i.stack.imgur.com/6FiRR.png' }}
                            style={styles.canvas} />
                    </TouchableOpacity>
                    <View style={[styles.dFlex, styles.justifyBetween, styles.alignCenter]}>
                        <Text ellipsizeMode='tail' numberOfLines={2} style={styles.titleEvent}>Anniv de Ju'</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Event')}>
                            <Text>voir ></Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.dFlex}>
                        <Text ellipsizeMode='tail' numberOfLines={2} style={[styles.bold]}>Dans 3 jours,</Text>
                        <Text ellipsizeMode='tail' numberOfLines={2} style={[styles.marginLeft5]}>11/10/2020</Text>
                    </View>
                </View>

                <View style={styles.marginTop20}>
                    <TouchableOpacity onPress={() => navigation.navigate('Event')}>
                        <Image resizeMode={'cover'}
                            source={{ uri: 'https://i.stack.imgur.com/6FiRR.png' }}
                            style={styles.canvas} />
                    </TouchableOpacity>
                    <View style={[styles.dFlex, styles.justifyBetween, styles.alignCenter]}>
                        <Text ellipsizeMode='tail' numberOfLines={2} style={styles.titleEvent}>Full Moon</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Event')}>
                            <Text>voir ></Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.dFlex}>
                        <Text ellipsizeMode='tail' numberOfLines={2} style={[styles.bold]}>Dans 7 jours,</Text>
                        <Text ellipsizeMode='tail' numberOfLines={2} style={[styles.marginLeft5]}>15/10/2020</Text>
                    </View>
                </View>
            </ScrollView>

        </View >
    )
}

export default Home