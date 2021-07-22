import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator} from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import Feed from './components/Feed';
import MyProfile from './components/MyProfile';
import OtherAtes from './components/OtherAtes';
import Settings from './components/Settings';
import SlidingMenu from './components/SlidingMenu';
import Kollabs from './components/Kollabs';
import KollabChat from './components/KollabChat';
import MyProfileEdit from './components/MyProfileEdit';

import { MaterialIcons } from '@expo/vector-icons';
import styles from './assets/styles';
import AppLoading from 'expo-app-loading';
import { useFonts, Montserrat_400Regular,Montserrat_500Medium } from '@expo-google-fonts/montserrat';
import { Poppins_400Regular } from '@expo-google-fonts/poppins';

const Drawer = createDrawerNavigator();


const App = () => {
  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
    Poppins_400Regular
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
  return (
    <SafeAreaProvider >
      <NavigationContainer>
        <Drawer.Navigator 
            drawerContent= {props =>  <SlidingMenu {...props}/>}
              drawerPosition= 'right'
              defaultOptions={{
                headerShown:false
                
              }}
             
              
        >
          <Drawer.Screen
            style={styles.drawerItem}
            name="Feed"
            component={Feed}
            
          />
          <Drawer.Screen
            style={styles.drawerItem}
            name="Kollabs"
            component={Kollabs}
            options={{ gestureEnabled:false}}
            
          />
          <Drawer.Screen
            style={styles.drawerItem}
            name="Other Ates"
            component={OtherAtes}
            options={{ gestureEnabled:false}}
          />
          <Drawer.Screen
            name="Profile"
            component={MyProfile}
            options={{ gestureEnabled:false}}
          />
          <Drawer.Screen
            name="Settings"
            component={Settings}
            options={{ gestureEnabled:false}}
          />
          <Drawer.Screen
            name="Kollab"
            component={KollabChat}
            options={{ gestureEnabled:false}}
          />
          <Drawer.Screen
            name="Profile Edit"
            component={MyProfileEdit}
            options={{ gestureEnabled:false}}
          />
          
          
          
          
        </Drawer.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
            }
}



export default App;
