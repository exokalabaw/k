import React from 'react';
import {View, FlatList, Text} from 'react-native';
import images from './images';
import OtherImage from '../OtherImage';
import styles from './styles';


const OtherImages = (props) =>{
    const InnerText = "Additional Image";
    return(
        <View>
            <Text>{InnerText}</Text>
            <FlatList
                data={images}
                renderItem={({item})=> <OtherImage image={item} />}
            />
        </View>
    )
}

export default OtherImages;