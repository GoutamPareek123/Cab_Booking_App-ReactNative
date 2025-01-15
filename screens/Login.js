import React, {useCallback,useEffect,useState} from 'react';
import {View,ImageBackground,Text,StyleSheet,SafeAreaView, TouchableOpacity,
    TextInput,Image,Animated} from 'react-native';
import { useFonts } from 'expo-font';
import Signup from './Signup'
import HomeScreen from './HomeScreen';
import Bottombar from './Bottombar';
import { LinearGradient } from 'expo-linear-gradient';
import firebase, { auth } from '../firebase';


const Login =({navigation})=>{

    const [email, setEmail]= useState('')
    const [password, setPassword]= useState('')

    const [isPasswordSecure, setIsPasswordSecure] = useState(true);

    const handleLogin = () => {
       
        if(email=="",password==""){
             alert("Please enter valid details.");
              }
              else if (auth) {
                  auth
                  .signInWithEmailAndPassword(email, password)
                  .then(userCredentials => {
                      const user = userCredentials.user
                      console.log("logged in with User", user.email)
                      navigation.navigate(Bottombar)
                      
                    })  
                }                
                
        else(error => alert(error.message))
      };
    
    useEffect(() => {
      const unsubscribe=  auth.onAuthStateChanged(user => {
            if (user) {
             navigation.navigate(Bottombar)
            }
        })
        return unsubscribe
    },[])

    const signupButton =()=>{
        navigation.navigate(Signup)
    }

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
    <LinearGradient colors={['black','black', '#220022']} style={styles.container}>
         <View style={{flexDirection:'row'}}>
        <Text style={{color:'white',fontFamily:'Poppins-Medium',fontSize:22,marginBottom:40}}>Hello.</Text>
        <Text style={{color:'white',fontFamily:'DarlingtonDemo',fontSize:28,marginBottom:40,marginLeft:5}}>Welcome</Text>
        </View>

        
        <View style={{ alignItems: 'center' }}>
            <Image style={styles.logo}
            source={require('../assets/images/loginLogo2.png')}/>
        </View>
       
        <Text style={{color:'white',fontFamily:'Poppins-Bold',fontSize:35,marginTop:40,}}>LOGIN IN</Text>
       
       <View style={{marginTop:20}}>
        <TextInput
        style={styles.inputstyle}
        placeholder='Enter your email'
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
        placeholder='Password'
        value={password}
        onChangeText={text=> setPassword(text)}
        placeholderTextColor="gray"
        autoCapitalize='none'
        autoCorrect={false}
        secureTextEntry={true}
        />
        </View>

        <TouchableOpacity style={styles.logborder} onPress={handleLogin}>
            <Text style={{color:'black',fontFamily:'Poppins-Medium',fontSize:22,textAlign:'center',}}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{marginTop:90}}  onPress={signupButton} >
            <Text style={{color:'gray',fontFamily:'Poppins-Regular',fontSize:12,textAlign:'center',}}>Don't have an account ? Sign up</Text>
        </TouchableOpacity>

        
    </LinearGradient>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor:'black',
      padding:25,
    },
    logo:{
        width:290,
        height:120
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

export default Login;