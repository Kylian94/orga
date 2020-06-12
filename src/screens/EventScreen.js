import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from '../style/eventStyle'


import { ScrollView } from 'react-native-gesture-handler';

function Event(props) {
    const { navigation } = props
    return (
        <View style={styles.container}>
            <Text>Mon événements</Text>

        </View >
    )
}

export default Event