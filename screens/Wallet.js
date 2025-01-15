import React, {useCallback,useState} from 'react';
import { StyleSheet,TouchableOpacity,View, TextInput,Image, Animated,
  ScrollView,Text,Alert,ActivityIndicator} from 'react-native';
import { useFonts } from 'expo-font';
import { Modal, Portal,Button, Provider,Divider } from 'react-native-paper';

import Ionicons from 'react-native-vector-icons/Ionicons';

const Wallet =({navigation})=>{

         
      const [showWallet , setShowWallet]=useState(false) 

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
            source={require('../assets/images/walletBig.png')}/>
      <View style={{marginTop:15,padding:15}} >
      <Text style={{color:'black',fontFamily:'Poppins-Bold',fontSize:30}}>
        Wallet
      </Text>
      <Text style={{color:'black',fontFamily:'Poppins-Regular',fontSize:20,marginTop:10}}>
       Total balance you have :
      </Text>

      <View style={{flexDirection:'row'}}>
      <View style={{marginTop:20,}} >
      <Text style={{color:'#008BF7',fontFamily:'Poppins-Bold',fontSize:25,marginLeft:10,textAlign:'center'}}>
       200
      </Text>
      </View>

      <TouchableOpacity style={{backgroundColor:'#DCDCDC',alignContent: 'center',flexDirection:'row',
       padding:4,borderRadius:5,marginTop:20,marginLeft:20}} >
      <View style={{padding:5,alignSelf:'center',flexDirection:'row',}}>
      <Ionicons style={{fontSize:20,color:'black',}} name='add-outline'/>
        <Text style={{color:'black',fontFamily:'Poppins-Regular',fontSize:15}}>Add amount</Text>
      </View>
      </TouchableOpacity>
      </View>

      <Text style={{color:'gray',fontFamily:'Poppins-Regular',fontSize:13,marginTop:20,}}>
       Note: 
      </Text>
      <Text style={{color:'gray',fontFamily:'Poppins-Regular',fontSize:13,}}>
      • Your wallet balance is permanent.
      </Text>
      <Text style={{color:'gray',fontFamily:'Poppins-Regular',fontSize:13,}}>
      • Wallet balance is not work for withdrawl.
      </Text>
      <Text style={{color:'gray',fontFamily:'Poppins-Regular',fontSize:13,}}>
      • Don't panic you can use wallet balance while booking of your ride. 
       </Text>
      <Divider style={{marginTop:15}}/>

      {/* { showWallet &&
      <>
     <View style={{marginTop:25}}>
        <Text style={{fontFamily:'Poppins-Bold',fontSize:15}}># NEW50</Text>
        <Text style={{fontFamily:'Poppins-Regular',fontSize:15,}}>Get 50% off on your first ride. T&C apply</Text>

        <Text style={{fontFamily:'Poppins-Bold',fontSize:15,marginTop:10}}># ELECTO15 </Text>
        <Text style={{fontFamily:'Poppins-Regular',fontSize:15,}}>Get 15% off on booking of Electric car. T&C apply</Text>
     </View>

     </>
      } */}

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

export default Wallet;