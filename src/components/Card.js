import React from 'react';
import {
    View,
    Text,
    Image

} from 'react-native';


import styles from '../style/cardStyle';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class Card extends React.Component {


    render() {

        return (

            <View>

                <Image resizeMode={'cover'}
                    source={{ uri: 'https://i.stack.imgur.com/6FiRR.png' }}
                    style={styles.canvas} />




                <Text ellipsizeMode='tail' numberOfLines={2} style={{}}>{this.props.title}</Text>


            </View >

        )



    }
}
