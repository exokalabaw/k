import React from 'react';
import {StyleSheet,View, Text, Image, TouchableOpacity} from 'react-native';
import styles from '../../assets/styles'
import { MaterialIcons } from '@expo/vector-icons';


const KollabChatHeader = () =>{
    return(
    <View style={styles.kollabchatheader}>
                <Image style={styles.kollabchatheaderbt} source={require('../../assets/mi/yords2.png')}/>
                <Text style={styles.kollabchatothername}>Mockup Name</Text>
                <TouchableOpacity 
                    onPress={() =>
                    navigation.navigate('Profile')}
                    style={styles.kollabchatheaderlink}
                    >
                        <Text style={styles.kollabchatprofilelinktext}>Profile</Text>
                        <MaterialIcons name='chevron-right' size={20} style={styles.puti}/>
                </TouchableOpacity>
            </View>

    )
    }
  export default KollabChatHeader;