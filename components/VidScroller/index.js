import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import styles from '../../assets/styles'
import { Video, AVPlaybackStatus } from 'expo-av';



const VidThumb = () =>{
    return(
        <View style={styles.scrollpanel}>
            <Video
        style={styles.vidthumb}
        source={{
          uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
        }}
        useNativeControls
        resizeMode="contain"
      />
            <Text style={styles.vidcap}>Yordi badordi manjormi dudidudidudiduadnsakjd djas djasd </Text>
        </View>
    )
}
const VidThumb2 = () =>{
    return(
        <View style={styles.scrollpanel}>
            <Video
        style={styles.vidthumb}
        source={require('../../assets/tempvideos/cj3.mp4')}
        useNativeControls
        resizeMode="contain"
      />
            <Text style={styles.vidcap}>Yordi badordi manjormi dudidudidudiduadnsakjd djas djasd </Text>
        </View>
    )
}

const VidScroller = () => {
    return(
        <ScrollView horizontal={true}>
           <VidThumb />
           <VidThumb2 />
           <VidThumb />
           <VidThumb2 />
      </ScrollView>
    )
}



export default VidScroller;