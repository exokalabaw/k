import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../../assets/styles';


const KollabChatTeaser= (props) => {
    const navigation = useNavigation();
    
    return(
    <View >
        <TouchableOpacity style={[styles.chatteasercontainer]} onPress={() =>
          navigation.navigate('Kollab')}>
        <View style={styles.chatteaserthumb}>
            <Image style={styles.chatteaserimage} source={props.image}/>
        </View>
        <View style={styles.chatteasertext}>
            <Text style={styles.chatteasername}>{props.name}</Text>
            <Text style={styles.chatteaserblurb}>{props.message}</Text>
        </View>
        </TouchableOpacity>
    </View>
    )

}

export default KollabChatTeaser;