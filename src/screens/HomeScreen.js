import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from '../style/homeStyle'

import Events from "../components/Events"
import { ScrollView } from 'react-native-gesture-handler';

function Home(props) {
    const { navigation } = props
    return (
        <View style={styles.container}>
            <Text style={[styles.title]}>Vos prochains événements</Text>
            <ScrollView>
                <TouchableOpacity onPress={() => navigation.navigate('Event')}>
                    <Events />
                </TouchableOpacity>

                <Events />
                <Events />
            </ScrollView>



            {/* <TouchableOpacity
                style={styles.buttonContainer}
                onPress={() => navigation.navigate('Detail')}>
                <Text style={styles.buttonText}>Go to Detail Screen</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.buttonContainer}
                onPress={() => navigation.navigate('Login')}>
                <Text style={styles.buttonText}>Go to Login</Text>
            </TouchableOpacity> */}
        </View >
    )
}

export default Home