import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import styles from '../style/Style'


export default class RadioButton extends Component {
    state = {
        value: null,
    };

    render() {
        const { PROP } = this.props;
        const { value } = this.state;

        return (
            <View>


                <View style={[styles.dFlex, styles.marginTop10]}>
                    {PROP.map(res => {
                        return (
                            <View key={res.key} style={[styles.radioForm]}>
                                <Text style={styles.radioText}>{res.text}</Text>
                                <TouchableOpacity
                                    style={styles.radioCircle}
                                    onPress={() => {
                                        this.setState({
                                            value: res.key,
                                        });
                                    }}>
                                    {value === res.key && <View style={styles.selectedRb} />}
                                </TouchableOpacity>
                            </View>
                        );
                    })}

                </View>
                <Text style={[styles.marginTop20]}> Selected: {this.state.value} </Text>
            </View>
        );
    }
}
