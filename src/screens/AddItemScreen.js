import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from '../style/Style'


import { ScrollView, TouchableOpacity, Button, TextInput } from 'react-native-gesture-handler';

function AddItem(props) {
    const { navigation } = props
    return (
        <View >
            <ScrollView >
                <View style={[styles.container, styles.dFlexColumn, styles.justifyCenter, styles.alignCenter]}>
                    <View style={[styles.dFlexColumn, { alignSelf: "flex-start", }, styles.marginTop20]}>
                        <Text style={[styles.bold]}>Qu'est-ce que vous allez ramener ?</Text>
                    </View>

                    <TextInput style={[styles.input, styles.marginTop20]} placeholder={"Du pain, des olives, etc"}></TextInput>
                    <TouchableOpacity style={[styles.btnGreen, styles.marginTop10, styles.textCenter]} type="submit">
                        <Text style={[styles.textBold, styles.textWhite]}>Ajouter</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View >
    )
}

export default AddItem