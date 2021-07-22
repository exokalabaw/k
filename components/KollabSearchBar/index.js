import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity,} from 'react-native';
import Svg, { Path } from 'react-native-svg';
import styles from '../../assets/styles';

const KollabSearchBar = () => {
    
    const [searchText, onChangeSearchText] = useState(null);
    return(
        <View style={styles.chatSearchContainer}>
                <View style={[styles.chatfield,styles.onehunned]}>
                    <TextInput 
                        style={styles.input}
                        onChangeSearchText = {onChangeSearchText}
                        value = {searchText}
                        placeholder = 'search '
                    />
                    <TouchableOpacity>
                        <Svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <Path d="M5.9166 0.333313C6.95289 0.333291 7.96744 0.630537 8.83988 1.18978C9.71232 1.74903 10.406 2.54681 10.8387 3.48846C11.2713 4.43011 11.4248 5.47611 11.2809 6.50236C11.1369 7.52861 10.7016 8.49203 10.0266 9.27831L14.7299 13.9816L14.1408 14.5708L9.4366 9.86665C8.77316 10.434 7.98242 10.8326 7.13174 11.0285C6.28106 11.2244 5.39563 11.2118 4.55087 10.9918C3.70611 10.7717 2.92704 10.3508 2.28002 9.76478C1.633 9.17878 1.13719 8.44508 0.834824 7.62617C0.532457 6.80726 0.432492 5.92741 0.54344 5.06154C0.654388 4.19567 0.972963 3.36945 1.47203 2.65323C1.9711 1.93702 2.63588 1.35203 3.40975 0.948096C4.18362 0.544161 5.04365 0.333246 5.9166 0.333313ZM5.9166 1.16665C4.70102 1.16665 3.53523 1.64953 2.67569 2.50907C1.81615 3.36862 1.33326 4.5344 1.33326 5.74998C1.33326 6.96556 1.81615 8.13134 2.67569 8.99089C3.53523 9.85043 4.70102 10.3333 5.9166 10.3333C7.13217 10.3333 8.29796 9.85043 9.1575 8.99089C10.017 8.13134 10.4999 6.96556 10.4999 5.74998C10.4999 4.5344 10.017 3.36862 9.1575 2.50907C8.29796 1.64953 7.13217 1.16665 5.9166 1.16665Z" fill="#E41B14"/>
                        </Svg>
                    </TouchableOpacity>

                </View>
            </View>
    )

}

export default KollabSearchBar;