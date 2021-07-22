import React, {useRef, useState, useEffect}from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {StyleSheet, View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import Header from '../Header';
import ProfileImage from '../ProfileImage';
import Profile from '../Profile';
import VidScroller from '../VidScroller';
import styles from '../../assets/styles';
import FeedVerdict from '../FeedVerdict';

const Feed = ({ navigation }) =>{
    const sheetRef = useRef(null);
    const [drawerState, setDrawerState] = useState(0);
   console.log(drawerState);

    const VerdictContainer = () =>{
      return(
        <>
          <FeedVerdict drawerUp={drawerState}/>
        </>
      )
    }

    return(
      <>
            <SafeAreaView style={[styles.flex1, styles.feed]}>
              
              <ScrollView>
                  <Header />
                  <ProfileImage />
                  <Profile />
                  <VidScroller />
                  
              </ScrollView>
              
              
            </SafeAreaView>
            <BottomSheet
                ref={sheetRef}
                snapPoints={[50, 360]}
                renderContent={VerdictContainer}
                initialSnap={0}
                enabledInnerScrolling={false}
                enabledContentTapInteraction={false}
                onOpenEnd={()=>setDrawerState(1)}
                onCloseEnd={()=>setDrawerState(0)}
                
            />
      </>
            
    )
}

export default Feed;

