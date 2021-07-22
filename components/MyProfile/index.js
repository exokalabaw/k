import React from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Path } from 'react-native-svg';
import SubHeader from '../SubHeader';
import ProfileImage from '../ProfileImage';
import Profile  from '../Profile';
import EditVideosList  from '../EditVideosList';
import styles from '../../assets/styles'

const MyProfile = ({ navigation }) =>{
    return (
        <SafeAreaView style={[styles.flex1, styles.whitebg]}>
          <SubHeader pageTitle = 'Profile'/>
          <ScrollView style={[styles.subpage]}>
            <View style={styles.profileEditButtonContainer}>
                <TouchableOpacity style={styles.profileEditButton} onPress={()=>navigation.navigate('Profile Edit')}>
                    <Svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Path d="M12.7758 3.09182L10.9925 4.8751L8.1249 2.00748L9.90818 0.22421C9.97913 0.153135 10.0634 0.0967478 10.1562 0.0582754C10.2489 0.0198029 10.3484 0 10.4488 0C10.5492 0 10.6487 0.0198029 10.7415 0.0582754C10.8342 0.0967478 10.9185 0.153135 10.9895 0.22421L12.7758 2.01054C12.8469 2.0815 12.9033 2.16577 12.9417 2.25854C12.9802 2.35131 13 2.45075 13 2.55118C13 2.65161 12.9802 2.75106 12.9417 2.84383C12.9033 2.9366 12.8469 3.02087 12.7758 3.09182ZM0 10.1316L7.69667 2.43571L10.5643 5.30333L2.86761 12.9992H0.000764641V10.1316H0ZM10.4167 0.799262L9.23907 1.97613L11.0262 3.7617L12.2023 2.58483L10.4167 0.799262ZM9.45012 5.33774L7.66456 3.55141L0.765462 10.4497V12.2361H2.55179L9.45012 5.33774Z" fill="#666666" fill-opacity="0.6"/>
                    </Svg>
                    <Text style={styles.profileEditButtonText}>edit</Text>
                </TouchableOpacity>
            </View>
            <ProfileImage />
            <Profile />
            <EditVideosList />
            </ScrollView>
         </SafeAreaView>
    )  
}

export default MyProfile;