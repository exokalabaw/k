import React from 'react';
import {View, Text, Button} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import styles from '../../assets/styles';

const Profile = ({ navigation }) =>{
    return (
        <View>
        <View style={styles.profilecomponent}>
            <Text style={styles.profilename}>Mike Jordy</Text>
        </View>

        <View style={styles.profilecomponent}>
            <Text style={styles.categories}>Instrument: Guitar</Text>
            <Text style={styles.categories}>Genre: Blues, Grunge, Trip-Hop</Text>
            </View>
        <View style={styles.profilecomponent}>
            <Text style={styles.profileblurb}>Any bassists and drummers out there looking to play blues for the masses? I’m into Markus King, John Mayer, Tedeshci Trucks, BB of course. Good vibes kinda peeps X out if all you can talk about is hang ups.</Text>
            </View>
         </View>
    )  
}

export default Profile;