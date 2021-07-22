import React from 'react';
import {StyleSheet,View, Text, Image, Pressable} from 'react-native';
import styles from '../../assets/styles'
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';


const SubHeader = ( props ) =>{
    const navigation = useNavigation();
    const InnerText = props.pageTitle;
    const back = props.backButton;

    return(
        <View style={[styles.header, styles.headersub]}>
            <MaterialIcons name='chevron-left' size={28} onPress={() =>  navigation.goBack()} style={styles.burrjar}/>
            <Text style={styles.subtitle}>{InnerText}</Text>
        </View>
    )
}



  export default SubHeader;