import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler'
import MapScreen from './screens/MapScreen';
import Login from './screens/Login';
import {StatusBar} from 'react-native';
import Signup from './screens/Signup';
import Profile from './screens/Profile';
import Coupon from './screens/Coupon';
import Booking from './screens/Booking';
import Cashback from './screens/Cashback';
import Wallet from './screens/Wallet';
import Bottombar from './screens/Bottombar'
import HomeScreen from './screens/HomeScreen';
import YourLocation from './screens/YourLocation';

const Stack = createNativeStackNavigator();

const App =()=>{
    return(
        
    <NavigationContainer>
      <View>
          <StatusBar
        backgroundColor="black"
        barStyle="light-content"
        />
        </View>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Bottombar" component={Bottombar} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="YourLocation" component={YourLocation} />
        <Stack.Screen name="MapScreen" component={MapScreen} />
        <Stack.Screen name="Booking" component={Booking} />
        <Stack.Screen name="Profile" component={Profile} /> 
        <Stack.Screen name="Coupon" component={Coupon} /> 
        <Stack.Screen name="Cashback" component={Cashback} /> 
        <Stack.Screen name="Wallet" component={Wallet} /> 
      </Stack.Navigator>
    </NavigationContainer>
    )
}

export default App;