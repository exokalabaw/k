import React from 'react';
import {View, Text, Image, ScrollView, FlatList, TouchableOpacity} from 'react-native';
import Svg, { Path } from 'react-native-svg';
import styles from '../../assets/styles'



const mockprofiles = [
    {
        id:'54321',
        message: 'Hoy anung sabi mo tungkol. . . ',
        image: require('../../assets/mi/yords2.png'),
    },
    {
        id:'4232',
        message: 'Patay tayo diyan. . . ',
        image: require('../../assets/mi/yords2.png'),
    },
    {
        id:'5432s1',
        message: 'dhd as hdsao daso . . . ',
        image: require('../../assets/mi/yords2.png'),
    },
    {
        id:'423091',
        message: 'Patay tayo diyan. . . ',
        image: require('../../assets/mi/yords2.png'),
    },
    {
        id:'5421',
        message: 'Hoy anung sabi mo tungkol. . . ',
        image: require('../../assets/mi/yords2.png'),
    },
    {
        id:'232',
        message: 'Patay tayo diyan. . . ',
        image: require('../../assets/mi/yords2.png'),
    },
];


const renderItem = ({ item }) => (
     
            <TouchableOpacity style={styles.editVideoItem} >
                 <Image style={styles.editVideoImage} source={item.image}/>
                 
                <View style={styles.imageCover}></View>
                <Svg style={styles.editVideoIcon} width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Path d="M14.7413 3.56749L12.6837 5.62511L9.37489 2.31633L11.4325 0.258704C11.5144 0.176694 11.6116 0.111632 11.7187 0.0672408C11.8257 0.0228495 11.9404 0 12.0563 0C12.1722 0 12.287 0.0228495 12.394 0.0672408C12.501 0.111632 12.5983 0.176694 12.6801 0.258704L14.7413 2.31986C14.8233 2.40173 14.8884 2.49897 14.9328 2.60601C14.9772 2.71305 15 2.82779 15 2.94367C15 3.05955 14.9772 3.1743 14.9328 3.28134C14.8884 3.38838 14.8233 3.48562 14.7413 3.56749ZM0 11.6903L8.88078 2.81044L12.1896 6.11923L3.30878 14.9991H0.000882279V11.6903H0ZM12.0193 0.922226L10.6605 2.28015L12.7225 4.34042L14.0795 2.9825L12.0193 0.922226ZM10.904 6.15893L8.84372 4.09778L0.883225 12.0574V14.1185H2.94438L10.904 6.15893Z" fill="white" fill-opacity="0.75"/>
                </Svg>

            </TouchableOpacity>
     
      )


const EditVideosList = () => {
    return(
        <View style={styles.profileComponent}>
            <FlatList 
                        contentContainerStyle={styles.editVideoGrid}
                        data={mockprofiles}
                        renderItem={renderItem}
                        numColumns={3}
                        keyExtractor={item => item.id}
                    />
        </View>
    )
}



export default EditVideosList;