import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from '../../assets/styles'

const ProfileImage = () =>{
    const InnerText = "Profile Image View";
    return(
        <View style={styles.profilecomponent}>
            <Image style={styles.profileimage} source={require('../../assets/mi/yords2.png')}/>
        </View>
    )
}

export default ProfileImage;