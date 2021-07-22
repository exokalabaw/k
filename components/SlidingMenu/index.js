import React from 'react';
import {View, Text, Button, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem
} from '@react-navigation/drawer';



import styles from '../../assets/styles';




const SlidingMenu = (props ) => {
    return(
        <View style={[styles.flex1]}>
                
                <DrawerContentScrollView {...props} style={[styles.drawer]}>
                        <View style={styles.slidingprofilecontainer}>
                            <Image style={styles.slidingprofileimage} source={require('../../assets/mi/yords2.png')}/>
                            <Text style={[styles.puti, styles.drawerName]}>Oktaveous</Text>
                        </View>
                       
                        <DrawerItem 
                            style={[ styles.drawerMenuItem, styles.bgwhite, styles.firstVertical]} 
                            label={()=>(<Text style={styles.menuitemlinkred}>Kollabs</Text>)} 
                            onPress={() => {props.navigation.navigate('Kollabs')}}
                            />  
                        <DrawerItem 
                            style={[styles.puti, styles.drawerMenuItem]} 
                            label={()=>(<Text style={styles.menuitemlink}>Other Ates</Text>)}  
                            onPress={() => {props.navigation.navigate('Other Ates')}}
                            />
                        <DrawerItem 
                            style={[styles.puti, styles.drawerMenuItem]} 
                            label={()=>(<Text style={styles.menuitemlink}>Profile</Text>)}  
                            onPress={() => {props.navigation.navigate('Profile')}}
                            />
                        <DrawerItem 
                            style={[styles.puti, styles.drawerMenuItem]} 
                            label={()=>(<Text style={styles.menuitemlink}>Settings</Text>)}  
                            onPress={() => {props.navigation.navigate('Settings')}}
                            />
                </DrawerContentScrollView>
        </View>
    );
}

export default SlidingMenu;