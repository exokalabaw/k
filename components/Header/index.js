import React from 'react';
import {StyleSheet,View, Text, Image, Pressable} from 'react-native';
import styles from '../../assets/styles'
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';


const Header = () =>{
    const navigation = useNavigation();
    const InnerText = "Kindreds";
    return(
        <View style={[styles.header, styles.headerfront]}>
            <Image style={styles.logoicon} source={require('../../assets/logofirstline.png')}/>
            <MaterialIcons name='menu' size={28} onPress={() => navigation.openDrawer()} style={styles.burrjar}/>
        </View>
    )
}




  export default Header;