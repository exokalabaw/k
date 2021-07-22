import React, { useState } from 'react';
import {View, Text, ScrollView, TouchableOpacity, Image, TextInput} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Path } from 'react-native-svg';
import SubHeader from '../SubHeader';
import Profile  from '../Profile';
import styles from '../../assets/styles'

const MyProfileEdit = ({ navigation }) =>{
    const [fieldName, updateFieldName] = useState(null);
    const [fieldAbout, updateFieldAbout] = useState(null);
    return (
        <SafeAreaView style={[styles.flex1, styles.whitebg]}>
          <SubHeader pageTitle = 'Profile'/>
          <ScrollView style={[styles.subpage, styles.containerhpad]}>
            <View style={[styles.profileimageedit, styles.fieldshadow]}>
                <Image style={styles.profileimage} source={require('../../assets/mi/yords2.png')}/>
                <TouchableOpacity style={styles.editimageclicklayer}>
                <Svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        
                    <Path d="M19.1667 13.3333C21.1558 13.3333 23.0635 14.1235 24.47 15.53C25.8765 16.9366 26.6667 18.8442 26.6667 20.8333C26.6667 22.8225 25.8765 24.7301 24.47 26.1366C23.0635 27.5432 21.1558 28.3333 19.1667 28.3333C17.1776 28.3333 15.2699 27.5432 13.8634 26.1366C12.4569 24.7301 11.6667 22.8225 11.6667 20.8333C11.6667 18.8442 12.4569 16.9366 13.8634 15.53C15.2699 14.1235 17.1776 13.3333 19.1667 13.3333ZM19.1667 15C17.6196 15 16.1359 15.6146 15.0419 16.7085C13.948 17.8025 13.3334 19.2862 13.3334 20.8333C13.3334 22.3804 13.948 23.8642 15.0419 24.9581C16.1359 26.0521 17.6196 26.6667 19.1667 26.6667C20.7138 26.6667 22.1975 26.0521 23.2915 24.9581C24.3855 23.8642 25 22.3804 25 20.8333C25 19.2862 24.3855 17.8025 23.2915 16.7085C22.1975 15.6146 20.7138 15 19.1667 15ZM8.33337 8.33333H11.6667L15 5H23.3334L26.6667 8.33333H30C31.3261 8.33333 32.5979 8.86012 33.5356 9.7978C34.4733 10.7355 35 12.0072 35 13.3333V28.3333C35 29.6594 34.4733 30.9312 33.5356 31.8689C32.5979 32.8065 31.3261 33.3333 30 33.3333H8.33337C7.00729 33.3333 5.73552 32.8065 4.79784 31.8689C3.86016 30.9312 3.33337 29.6594 3.33337 28.3333V13.3333C3.33337 12.0072 3.86016 10.7355 4.79784 9.7978C5.73552 8.86012 7.00729 8.33333 8.33337 8.33333ZM15.69 6.66667L12.3567 10H8.33337C7.44932 10 6.60147 10.3512 5.97635 10.9763C5.35123 11.6014 5.00004 12.4493 5.00004 13.3333V28.3333C5.00004 29.2174 5.35123 30.0652 5.97635 30.6904C6.60147 31.3155 7.44932 31.6667 8.33337 31.6667H30C30.8841 31.6667 31.7319 31.3155 32.3571 30.6904C32.9822 30.0652 33.3334 29.2174 33.3334 28.3333V13.3333C33.3334 12.4493 32.9822 11.6014 32.3571 10.9763C31.7319 10.3512 30.8841 10 30 10H25.9767L22.6434 6.66667H15.69Z" fill="white"/>
                
                </Svg>

                </TouchableOpacity>
            </View>
            <View style={styles.formfieldcontainer}>
                <Text style={styles.fieldlabel}>Username</Text>
                <TextInput 
                        style={[styles.input, styles.formfield, styles.fieldshadow, styles.nameedit]}
                        onChangeSearchText = {updateFieldName}
                        value = {fieldName}
                    />
            </View>
            <View style={styles.formfieldcontainer}>
                <Text style={styles.fieldlabel}>Instrument</Text>
                <View style={styles.tagcontainer}>
                    <TouchableOpacity style={[styles.tag, styles.fieldshadow]}>
                        <Text style={styles.tagtext}>Drums X</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.tag, styles.fieldshadow]}>
                        <Text style={styles.tagtext}>Drums X</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.tag, styles.fieldshadow]}>
                        <Text style={styles.tagtext}>Drums X</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.tag, styles.tagx]}>
                    <Text style={styles.tagtext}>Add +</Text>
                    </TouchableOpacity>
                </View>
                
            </View>
            <View style={styles.formfieldcontainer}>
                <Text style={styles.fieldlabel}>Genre</Text>
                <View style={styles.tagcontainer}>
                    <TouchableOpacity style={[styles.tag, styles.fieldshadow]}>
                        <Text style={styles.tagtext}>Drums X</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.tag, styles.fieldshadow]}>
                        <Text style={styles.tagtext}>Drums X</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.tag, styles.fieldshadow]}>
                        <Text style={styles.tagtext}>Drums X</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.tag, styles.tagx]}>
                    <Text style={styles.tagtext}>Add +</Text>
                    </TouchableOpacity>
                </View>
                
            </View>
            <View style={styles.formfieldcontainer}>
                <Text style={styles.fieldlabel}>About</Text>
                <TextInput 
                        style={[styles.input, styles.formfield, styles.fieldshadow, styles.multiLine]}
                        onChangeSearchText = {updateFieldAbout}
                        value = {fieldAbout}
                        multiline
                        numberOfLines ={4}
                    />
                <View style={styles.formfieldspacer}></View>
            </View>
          
            </ScrollView>
         </SafeAreaView>
    )  
}

export default MyProfileEdit;