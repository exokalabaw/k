import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const StaticPage = () =>{
    const InnerText = "Static Page View";
    return(
        <View>
            <Text>{InnerText}</Text>
        </View>
    )
}

export default StaticPage;