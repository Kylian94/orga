import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from '../style/loginStyle';

function Login(props) {
    const { navigation } = props
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Login Screen</Text>
            <TouchableOpacity
                style={styles.buttonContainer}
                onPress={() => navigation.navigate('Detail')}>
                <Text style={styles.buttonText}>Go to Detail Screen</Text>
            </TouchableOpacity>
        </View>
    )
}



export default Login