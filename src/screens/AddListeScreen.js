import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from '../style/Style'


import { ScrollView, TouchableOpacity, Button, TextInput } from 'react-native-gesture-handler';

function AddListe(props) {
    const { navigation } = props
    return (
        <View >
            <ScrollView >
                <View style={[styles.container, styles.dFlexColumn, styles.justifyCenter, styles.alignCenter]}>
                    <TextInput style={[styles.input, styles.marginTop20]} placeholder={"Nom de votre liste"}></TextInput>
                    <TouchableOpacity style={[styles.btnGreen, styles.marginTop20, styles.textCenter]} type="submit">
                        <Text style={[styles.textBold, styles.textWhite]}>Ajouter</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View >
    )
}

export default AddListe