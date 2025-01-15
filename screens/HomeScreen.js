import React, {useCallback,useState} from 'react';
import {View,Text,StyleSheet,TouchableOpacity,TextInput,Image,Animated,ScrollView} from 'react-native';
import MapScreen from './MapScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useFonts } from 'expo-font';
import { LinearGradient } from "expo-linear-gradient";
import { Modal, Portal,Button, Provider,Divider } from 'react-native-paper';
// import YourLocation from '/YourLocation'

const HomeScreen = ({navigation}) => {

    const bookButton =()=>{
        navigation.navigate(MapScreen)
    }
    // const yourLocation =()=>{
    //     navigation.navigate(YourLocation)
    // }
    const [fontsLoaded] = useFonts({
        'Poppins-Regular': require('..//assets/fonts/Poppins-Regular.ttf'),
        'Poppins-Bold': require('..//assets/fonts/Poppins-Bold.ttf'),
        'Poppins-Medium': require('..//assets/fonts/Poppins-Medium.ttf'),
        'DarlingtonDemo': require('..//assets/fonts/DarlingtonDemo.ttf'),
        
    });
      // const onLayoutRootView = useCallback(async () => {
      //   if (fontsLoaded) {
      //     await SplashScreen.hideAsync();
      //   }
      // }, [fontsLoaded]);
    
      // if (!fontsLoaded) {
      //   return null;
      // }
  return (
    <View style={styles.container}>
    <ScrollView >

            <View style={{ alignItems: 'center',}}>
                <Image style={styles.TopImage}
                 source={require('../assets/images/BuildingsMoon.png')}/>
                </View>

                <View style={{alignItems: 'center',marginTop:50,backgroundColor:'#1E1E1E',
               paddingVertical:25,justifyContent:'center',borderRadius:15,width:350,alignSelf:'center'}}>
        <Text style={{color:'white',fontSize:18,fontFamily:'Poppins-Bold',marginLeft:10,alignSelf:'flex-start'}}>Where to go ?</Text>
            <View style={[styles.inputBorder]}>
        <TextInput style={[styles.inputstyle]}
              placeholder='Your Location'
              placeholderTextColor="gray"
            //   value={searchText}
            //   onChangeText={handleSearchTextChange}
            // onClick={yourLocation}
           />

          <Image style={{width:24,height:24,position:'absolute',alignSelf:'flex-end',right:10,}}
          source={require('../assets/images/mylocation.png')}/>
            </View >

            <LinearGradient style= {styles.buttonRound}
                colors={["#00BFE1", "#008BF7"]} start={[0.0, 0.5]} end={[1.0, 0.5]} locations={[0.0, 1.0]}>
                    <TouchableOpacity onPress={bookButton}>
                    <Ionicons style={{fontSize:32}} name='arrow-forward-outline'/>
                    </TouchableOpacity>
                    </LinearGradient>
            </View>
             
            <Text style={{color:'white',fontSize:17,fontFamily:'Poppins-Medium',marginLeft:15,marginTop:30}}>See what we can do for you</Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{marginTop:5}}>

             <TouchableOpacity style={{backgroundColor:'#1E1E1E',borderRadius:15,height:200,width:235,alignItems:'center',
             marginLeft:15,justifyContent:'center'}}>
            <View style={styles.worksBorder}>
            <Image style={{width:220,height:140,borderRadius:10}}
                 source={require('../assets/images/HomeScreen/Electric.png')}/>
            </View>
            <View style={{alignSelf:'flex-start',marginLeft:10,marginTop:5}}>
            <Text style={{color:'white',fontFamily:'Poppins-Medium'}}>Electric Cars</Text>
            <Text style={{color:'gray',fontFamily:'Poppins-Regular',fontSize:13}}>Go with eco cars </Text>
            </View>
            </TouchableOpacity>   

            <TouchableOpacity style={{backgroundColor:'#1E1E1E',borderRadius:15,height:200,width:235,alignItems:'center',
            marginLeft:15,justifyContent:'center'}}>
            <View style={styles.worksBorder}>
            <Image style={{width:220,height:140,borderRadius:10}}
                 source={require('../assets/images/HomeScreen/Sports.png')}/>
            </View>
            <View style={{alignSelf:'flex-start',marginLeft:10,marginTop:5}}>
            <Text style={{color:'white',fontFamily:'Poppins-Medium'}}>Sports Cars</Text>
            <Text style={{color:'gray',fontFamily:'Poppins-Regular',fontSize:13}}>Want to style in Sports mode?</Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity style={{backgroundColor:'#1E1E1E',borderRadius:15,height:200,width:235,alignItems:'center',
            marginLeft:15,justifyContent:'center'}}>
            <View style={styles.worksBorder}>
            <Image style={{width:220,height:140,borderRadius:10}}
                 source={require('../assets/images/HomeScreen/Rental.jpg')}/>
            </View>
            <View style={{alignSelf:'flex-start',marginLeft:10,marginTop:5}}>
            <Text style={{color:'white',fontFamily:'Poppins-Medium'}}>Rentals</Text>
            <Text style={{color:'gray',fontFamily:'Poppins-Regular',fontSize:13}}>Ride from 1 to 12 hours</Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity style={{backgroundColor:'#1E1E1E',borderRadius:15,height:200,width:235,alignItems:'center',
            marginLeft:15,justifyContent:'center'}}>
            <View style={styles.worksBorder}>
            <Image style={{width:220,height:140,borderRadius:10}}
                 source={require('../assets/images/HomeScreen/Intercity.png')}/>
            </View>
            <View style={{alignSelf:'flex-start',marginLeft:10,marginTop:5}}>
            <Text style={{color:'white',fontFamily:'Poppins-Medium'}}>Travel Intercity</Text>
            <Text style={{color:'gray',fontFamily:'Poppins-Regular',fontSize:13}}>Go outstation</Text>
            </View>
            </TouchableOpacity>
    </ScrollView>
          
    <Text style={{color:'white',fontSize:17,fontFamily:'Poppins-Medium',marginLeft:15,marginTop:20}}>Services we are providing</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{marginTop:10,}}>

             <TouchableOpacity style={styles.worksBorder}>
              
            <Image style={{width:300,height:140,borderRadius:20,}}
                 source={require('../assets/images/HomeScreen/Electric.png')}/>
           
            <View style={{alignSelf:'center',marginLeft:10,marginTop:5,position:'absolute',backgroundColor:'#1E1E1E',
            opacity:0.5,borderRadius:20,paddingHorizontal:10}}>
            <Text style={{color:'white',fontFamily:'Poppins-Medium',fontSize:20,opacity:1}}>Moto</Text>
            </View>
            </TouchableOpacity>                  
                 </ScrollView>
               
            
    </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
    //   justifyContent: 'center',
      backgroundColor:'black',
    
    },
    inputBorder:{
        backgroundColor:'#3B3B3B',
        height:50,
        width:330,
        borderRadius:10,
        paddingHorizontal:15,
        color:'white',
        paddingRight:40,
        justifyContent:'center',
        marginTop:5

      },
      inputstyle:{
       color:'white',
       fontFamily:'Poppins-Regular',
        },
      buttonRound:{
        width:55,
        height:55,
        borderRadius:100,
        alignItems:'center',
        justifyContent:'center',
        marginTop:20
      },
      TopImage:{
        width:'100%',
        height:150,
    },
    worksBorder:{
       marginTop:5,justifyContent:'center',
    }
})
export default HomeScreen;