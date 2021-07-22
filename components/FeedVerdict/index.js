import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';

import Svg, { Path } from 'react-native-svg';
import styles from '../../assets/styles';

const UpArrow = ( props ) =>{

    const isUp = props.isUp;
    

    const PointedUp = 
                <Svg style={styles.svgarrow} width="42" height="8" viewBox="0 0 42 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Path d="M1 1L21 6L41 1" stroke="white" stroke-width="2"/>
                </Svg>;
           
    const PointedDown = 
                <Svg style={styles.svgarrow} width="42" height="11" viewBox="0 0 42 11" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
                    <Path d="M1 10L21 2L41 10" stroke="white" stroke-width="2"/>
                </Svg>;
    return (
        <>
            {props.isUp ? PointedUp : PointedDown }
        </>
    )
    
}

const VerdictPressed = (test) =>{
    console.log(test)
}
const FeedVerdict = (props) =>{

    return(
    <View style={styles.flex1, styles.verticalCenter} >
          <View style={styles.bottomDrawerRoof}>
                
          </View>
          <View style={styles.bottomDrawerContainer}>
                <UpArrow isUp={props.drawerUp}/>
                <TouchableOpacity  style={styles.verdictButton} onPress={()=>{VerdictPressed('Cultivated')}}>
                    <Svg style={styles.verdicticon}width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Path opacity="0.5" d="M17.9474 0.612884C17.9392 0.467604 17.8799 0.330514 17.7807 0.227607C17.6815 0.124701 17.5494 0.063134 17.4094 0.0545809C10.1985 -0.385663 4.43134 1.85745 1.98184 6.05458C0.313531 8.91295 0.37929 12.2885 2.15364 15.6039L0.173232 17.6592C0.118875 17.7141 0.0755706 17.7797 0.0458345 17.8521C0.0160984 17.9245 0.000523195 18.0023 1.29562e-05 18.081C-0.000497282 18.1598 0.0140679 18.2378 0.0428625 18.3106C0.0716571 18.3835 0.114107 18.4496 0.167748 18.5053C0.221389 18.5609 0.285151 18.605 0.355331 18.6348C0.425512 18.6647 0.500713 18.6798 0.576566 18.6793C0.652419 18.6787 0.727413 18.6626 0.797193 18.6317C0.866973 18.6008 0.930149 18.5559 0.98305 18.4995L2.96345 16.4443C4.61554 17.3966 6.28289 17.8752 7.88917 17.8752C9.39884 17.8759 10.8791 17.4423 12.1657 16.6226C16.2102 14.0806 18.3716 8.09565 17.9474 0.612884ZM11.5723 15.606C9.26858 17.0541 6.53496 17.0335 3.80897 15.5669L12.4359 6.61447C12.5433 6.50303 12.6036 6.35188 12.6036 6.19427C12.6036 6.03666 12.5433 5.8855 12.4359 5.77404C12.3285 5.66259 12.1829 5.59997 12.031 5.59996C11.8791 5.59995 11.7335 5.66255 11.6261 5.77399L2.99915 14.7267C1.58586 11.8977 1.5662 9.06082 2.96145 6.67023C5.13063 2.95336 10.2925 0.931306 16.8298 1.21437C17.1027 7.99799 15.154 13.3549 11.5723 15.606Z" fill="#E41B14"/>
                    </Svg>

                    <Text style={styles.verdictText }>Cultivate</Text>
                </TouchableOpacity>
                <TouchableOpacity  style={ styles.verdictButton} onPress={()=>{VerdictPressed('Appreciated')}}>
                    <Svg style={styles.verdicticon} width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Path opacity="0.5" d="M1 8.13377H4C4.26522 8.13377 4.51957 8.2431 4.70711 8.43772C4.89464 8.63233 5 8.89628 5 9.1715V18.5111C5 18.7863 4.89464 19.0503 4.70711 19.2449C4.51957 19.4395 4.26522 19.5489 4 19.5489H1C0.734784 19.5489 0.48043 19.4395 0.292893 19.2449C0.105357 19.0503 0 18.7863 0 18.5111V9.1715C0 8.89628 0.105357 8.63233 0.292893 8.43772C0.48043 8.2431 0.734784 8.13377 1 8.13377ZM1 9.1715V18.5111H4V9.1715H1ZM16.716 17.4993L19.717 12.3107C19.897 11.9993 20 11.6361 20 11.247V10.2092C20 9.65879 19.7893 9.13089 19.4142 8.74166C19.0391 8.35244 18.5304 8.13377 18 8.13377H12.39L13.847 2.48849L13.852 2.46981C13.8975 2.29392 13.8977 2.10868 13.8524 1.93272C13.8071 1.75676 13.718 1.59626 13.594 1.46736L7.585 7.70311C7.39907 7.89579 7.25166 8.12472 7.15127 8.37671C7.05087 8.62871 6.99947 8.89882 7 9.1715V16.4357C7 16.9861 7.21071 17.514 7.58579 17.9032C7.96086 18.2925 8.46957 18.5111 9 18.5111H15C15.73 18.5111 16.368 18.1064 16.716 17.4993ZM21 11.247C21 11.8634 20.828 12.4373 20.53 12.9198L17.624 17.9456C17.3643 18.4315 16.984 18.8364 16.5226 19.1184C16.0612 19.4003 15.5355 19.5489 15 19.5489H9C8.20435 19.5489 7.44129 19.2209 6.87868 18.637C6.31607 18.0532 6 17.2613 6 16.4357V9.1715C6 8.31226 6.335 7.535 6.877 6.97151L13.594 0L14.301 0.733679C14.554 0.996223 14.7345 1.32439 14.8237 1.68396C14.9128 2.04354 14.9074 2.42135 14.808 2.77802L13.693 7.09603H18C18.7956 7.09603 19.5587 7.42403 20.1213 8.00787C20.6839 8.59171 21 9.38357 21 10.2092V11.247Z" fill="#E41B14"/>
                    </Svg>

                    <Text style={styles.verdictText }>Appreciate</Text>
                </TouchableOpacity>
                <TouchableOpacity  style={styles.verdictButton} onPress={()=>{VerdictPressed('Kollabed')}}>
                    <Image style={styles.verdictimageicon} source={require('../../assets/logofirstline.png')}/>
                    <Text style={styles.verdictText }>Kollaborate</Text>
                </TouchableOpacity>
                <TouchableOpacity  style={styles.verdictX} onPress={()=>{VerdictPressed('That one sucked!')}}>
                <Svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <Path d="M16.7442 1L1.25582 17.6038M1 1.26546L17 17.3383" stroke="#E41B14"/>
                </Svg>

                </TouchableOpacity>
            </View>
    </View>
      )
}

export default FeedVerdict;