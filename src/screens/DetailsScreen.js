import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

function Home() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Details Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ebebeb'
    },
    text: {
        color: '#101010',
        fontSize: 24,
        fontWeight: 'bold'
    }
})

export default Home
