import React, {useState} from 'react';
import {View, Text, ScrollView, TextInput, FlatList, Image, TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import SubHeader from '../SubHeader';
import KollabChatHeader from '../KollabChatHeader';
import KollabChatMessageField from '../KollabChatMessageField';
import tempchatsession from '../../assets/tempjson/tempchatsession';

import styles from '../../assets/styles';


const KollabChat = () =>{
    const InnerText = "Kollab";

    const renderItem = ({ item}) => (
        <View style={[styles.chatrow, item.name === 'Kanan'? styles.chatright:styles.chatleft]}>
             <Image style={[styles.chatboximage,item.name === 'Kanan'? styles.chatimageright:styles.chatimageleft]} source={item.image}/>
             <Text style={styles.chatboxbubble}>{item.message}</Text>
       </View>
      );
    
  
    return(
        <SafeAreaView style={[styles.whitebg, styles.flex1]}>
            <SubHeader pageTitle = { InnerText } backButton= {'Kollabs'}/>
            <KollabChatHeader />
            <FlatList 
                style={styles.chatwrap}
                data={tempchatsession}
                renderItem={renderItem}
                keyExtractor={item => item.id} 
                inverted={true}
            />
            <KollabChatMessageField />  
            
                
        </SafeAreaView>
    )
}

export default KollabChat;