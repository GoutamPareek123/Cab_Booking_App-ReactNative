import React, {useCallback,useState} from 'react';
import { StyleSheet,TouchableOpacity,View, TextInput,Image, Animated,
  ScrollView,Text,Alert,ActivityIndicator} from 'react-native';
import { useFonts } from 'expo-font';
import { Modal, Portal,Button, Provider,Divider } from 'react-native-paper';

import Ionicons from 'react-native-vector-icons/Ionicons';

const Cashback =({navigation})=>{

         
      const [showCashback , setShowCashback]=useState(false) 

      const [fontsLoaded] = useFonts({
        'Poppins-Regular': require('..//assets/fonts/Poppins-Regular.ttf'),
        'Poppins-Bold': require('..//assets/fonts/Poppins-Bold.ttf'),
        'Poppins-Medium': require('..//assets/fonts/Poppins-Medium.ttf'),
        'DarlingtonDemo': require('..//assets/fonts/DarlingtonDemo.ttf'),
      });
      const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
          await SplashScreen.hideAsync();
        }
      }, [fontsLoaded]);
    
      if (!fontsLoaded) {
        return null;
      }
     
    return(
    <View style={styles.container}>
        <View style={{alignSelf:'flex-start',borderBottomWidth:0.5,borderBottomColor:'gray',width:'100%',padding:10}}>  
            <TouchableOpacity 
             onPress={() => navigation.goBack()} >
          <Ionicons style={{fontSize:30,color:'black',marginLeft:5}} name='chevron-back-outline'/>
          </TouchableOpacity>
          </View>
          <Image style={{width:120,height:120,alignSelf:'center',marginTop:20}}
            source={require('../assets/images/coins.png')}/>
      <View style={{marginTop:15,padding:15}} >
      <Text style={{color:'black',fontFamily:'Poppins-Bold',fontSize:30}}>
        Cashback
      </Text>
      <Text style={{color:'black',fontFamily:'Poppins-Regular',fontSize:20,marginTop:10}}>
       Total Cashbacks you earned :
      </Text>
      <TouchableOpacity style={{backgroundColor:'#DCDCDC',alignContent: 'center',flexDirection:'row',
       width:180,borderRadius:5,marginTop:20,}} onPress={()=>setShowCashback(true)} >
      <Text style={{color:'#008BF7',fontFamily:'Poppins-Bold',fontSize:25,marginLeft:10,textAlign:'center'}}>
       120
      </Text>
      <View style={{borderLeftWidth:1,padding:5,alignSelf:'center',marginLeft:10,flexDirection:'row',}}>
        <Text style={{color:'black',fontFamily:'Poppins-Regular',fontSize:15}}>View history</Text>
        <Ionicons style={{fontSize:20,color:'black',}} name='chevron-forward-outline'/>
      </View>
      </TouchableOpacity>
      
      <Text style={{color:'gray',fontFamily:'Poppins-Regular',fontSize:13,marginTop:20,}}>
       Note: 
      </Text>
      <Text style={{color:'gray',fontFamily:'Poppins-Regular',fontSize:13,}}>
       • Your earned cashback is permanent.
      </Text>
      <Text style={{color:'gray',fontFamily:'Poppins-Regular',fontSize:13,}}>
      • Use cashback to book any ride.
       </Text>
      <Divider style={{marginTop:15}}/>

      { showCashback &&
      <>
     <View style={{marginTop:25}}>
        <Text style={{fontFamily:'Poppins-Bold',fontSize:15}}>+ 56 cashback</Text>
        <Text style={{fontFamily:'Poppins-Regular',fontSize:15,color:'gray'}}>Ride on  15-Mar-23 </Text>

        <Text style={{fontFamily:'Poppins-Bold',fontSize:15,marginTop:10}}>+ 44 cashback</Text>
        <Text style={{fontFamily:'Poppins-Regular',fontSize:15,color:'gray'}}>Ride on  2-Apr-23</Text>

        <Text style={{fontFamily:'Poppins-Bold',fontSize:15,marginTop:10}}>+ 20 cashback</Text>
        <Text style={{fontFamily:'Poppins-Regular',fontSize:15,color:'gray'}}>Ride on  6-Apr-23</Text>
     </View>

     </>
      }

  </View>
</View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      // alignItems: 'center',
      // justifyContent: 'center',
      backgroundColor:'white',
    },
})

export default Cashback;