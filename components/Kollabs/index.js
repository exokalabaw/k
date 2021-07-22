import React, {useState} from 'react';
import {View, Text, ScrollView, TextInput, FlatList, Image} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Path } from 'react-native-svg';
import SubHeader from '../SubHeader';
import KollabSearchBar from '../KollabSearchBar';
import KollabChatTeaser from '../KollabChatTeaser';
import tempusers from '../../assets/tempjson/tempusers';

import styles from '../../assets/styles';


const Kollabs = () =>{
    const InnerText = "Kollabs";

    
    const renderItem = ({ item }) => (
        <>
            <KollabChatTeaser name={item.name} image={item.image} message={item.message} />
       </>
      );
    return(
        <SafeAreaView style={[styles.whitebg, styles.flex1]}>
            <SubHeader pageTitle = { InnerText }/>
            <ScrollView>
            <KollabSearchBar />
                <FlatList 
                    data={tempusers}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </ScrollView>
                    
                
        </SafeAreaView>
    )
}

export default Kollabs;