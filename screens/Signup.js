import React, {useCallback, useState,useEffect} from 'react';
import {View,Text,StyleSheet,TouchableOpacity,TextInput,Image, Alert} from 'react-native';
import { useFonts } from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';
import Login from './Login';
import firebase, { auth } from '../firebase';



const Signup =({navigation})=>{

    const [firstName, setFirstName]= useState('')
    const [lastName, setLastName]= useState('')
    const [email, setEmail]= useState('')
    const [password, setPassword]= useState('')

    const handleSignup = () => {
      auth
      .createUserWithEmailAndPassword(email, password)
      .then(userCredentials => {
          const user = userCredentials.user
          console.log("Account created",user.email)
          Alert.alert(
            "Account created",user.email,
           [{
              text: 'Okay',
              onPress: ( navigation.navigate(Login))
            },]
          )
      })  
      .catch (error => alert(error.message))
    };
    
      

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
    <LinearGradient colors={['black','black', '#00222A']} style={styles.container}>
        

        <View style={{ alignItems: 'center' }}>
            <Image style={styles.logo}
            source={require('../assets/images/signinLogo2.png')}/>
        </View>
       
        <Text style={{color:'white',fontFamily:'Poppins-Bold',fontSize:35,marginTop:40,}}>SIGN UP</Text>
       
      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <View style={{marginTop:20}}>
        <TextInput
        style={[styles.inputstyle,{minWidth:150}]}
        placeholder='First Name'
        value={firstName}
        onChangeText={text=> setFirstName(text)}
        placeholderTextColor="gray"
        keyboardType="email-address"
        autoCapitalize='sentences'
        autoCorrect={false}        
        />
        </View>
        <View style={{marginTop:20}}>
        <TextInput
        style={[styles.inputstyle,{minWidth:150}]}
        placeholder='Last Name'
        value={lastName}
        onChangeText={text=> setLastName(text)}
        placeholderTextColor="gray"
        keyboardType="email-address"
        autoCapitalize='sentences'
        autoCorrect={false}        
        />
        </View>
      </View>

       <View style={{marginTop:20}}>
        <TextInput
        style={styles.inputstyle}
        placeholder='Set your email'
        value={email}
        onChangeText={text=> setEmail(text)}
        placeholderTextColor="gray"
        keyboardType="email-address"
        autoCapitalize='none'
        autoCorrect={false}
        
        />
        </View>
       
        <View style={{marginTop:20}}>
        <TextInput
        style={styles.inputstyle}
        placeholder='Create password'
        value={password}
        onChangeText={text=> setPassword(text)}
        placeholderTextColor="gray"
        secureTextEntry={false}
        autoCapitalize='none'
        autoCorrect={false}
        />
        </View>

        <TouchableOpacity style={styles.logborder} onPress={handleSignup}>
            <Text style={{color:'black',fontFamily:'Poppins-Medium',fontSize:22,textAlign:'center',}}>
                Create</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{marginTop:90}} onPress={() => navigation.goBack()} >
            <Text style={{color:'gray',fontFamily:'Poppins-Regular',fontSize:12,textAlign:'center',}}>
                 Already have an account ! Login</Text>
        </TouchableOpacity>

       
    </LinearGradient>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor:'black',
      paddingHorizontal:25,
    },
    logo:{
        width:130,
        height:145
    },
    inputstyle:{
        backgroundColor:'#1C1C1C',
        height:55,
        borderRadius:5,
        padding:15,
        color:'white',
        fontFamily:'Poppins-Regular'
    },
    logborder:{
        backgroundColor:'white',
        marginTop:40,
        height:55,
        width:150,
        justifyContent:'center',
        borderRadius:5,
        alignSelf:'center'
    }

})

export default Signup;