import React, { useState } from 'react';
import {View, Text, Switch} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SubHeader from '../SubHeader';
import styles from '../../assets/styles'

const Settings = ({ navigation }) =>{
    var stockred = '#e41b1f';
    var mutedred = '#f29294';
    var primaryfontcolor = '#666666';
    var subbg = '#f5f4f4';
    var othergray = '#cccccc'
    const [swCultivateFeedback, toggleSwCultivateFeedback] = useState(false);
    const [swAppreciateSocial, toggleSwAppreciateSocial] = useState(false);
    const [hybernateProfile, toggleHybernateProfile] = useState(false);
    const toggleCultivate = () => {
        toggleSwCultivateFeedback(previousState => !previousState);
    }
    const toggleAppreciate = () => {
        toggleSwAppreciateSocial(previousState => !previousState);
    }
    const toggleHybernate= () => {
        toggleHybernateProfile(previousState => !previousState);
    }
    return (
        <SafeAreaView style={[styles.flex1, styles.whitebg]}>
            <SubHeader pageTitle = 'Settings'/>
            <View style={[styles.subpage]}>
                <View style={styles.settingsItemContainer} >
                    <Text style={styles.settingsItemHeader}>Get feedback when cultivated</Text>
                    <Switch 
                    onValueChange={toggleCultivate}
                    value={swCultivateFeedback}
                    trackColor={{ false: mutedred , true: stockred}}
                    thumbColor={swCultivateFeedback ?othergray: subbg }
                    />


                </View>
                <View style={styles.settingsItemContainer} >
                    <Text style={styles.settingsItemHeader}>Show social links when Appreciated</Text>
                    <Switch 
                    name={'as'}
                    onValueChange={toggleAppreciate}
                    value={swAppreciateSocial}
                    trackColor={{ false: mutedred , true: stockred}}
                    thumbColor={swAppreciateSocial?othergray: subbg }
                    />
                </View>
                <View style={styles.settingsItemContainer} >
                    <Text style={styles.settingsItemHeader}>Hybernate Profile</Text>
                    <Switch 
                    name={'as'}
                    onValueChange={toggleHybernate}
                    value={hybernateProfile}
                    trackColor={{ false: mutedred , true: stockred}}
                    thumbColor={hybernateProfile?othergray: subbg }
                    />
                </View>
            </View>
            
         </SafeAreaView>
    )  
}

export default Settings;