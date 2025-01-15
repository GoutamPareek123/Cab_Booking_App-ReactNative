import React, {useCallback} from 'react';
import { StyleSheet,TouchableOpacity,View, TextInput,Image, Animated,
  ScrollView,Text,Alert,ActivityIndicator,Button} from 'react-native';
import { useFonts } from 'expo-font';
import { List,Divider } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Coupon from './Coupon'
import Cashback from './Cashback'
import Wallet from './Wallet'
import Login from './Login'

const Profile =({navigation})=>{

  const couponButton =()=>{
    navigation.navigate(Coupon)
}
const cashbackButton =()=>{
  navigation.navigate(Cashback)
}
const walletButton =()=>{
  navigation.navigate(Wallet)
}
const logoutButton =()=>{
  navigation.navigate(Login)
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

      const position = new Animated.ValueXY({x:0,y:500})
      Animated.timing(position,{
        toValue:{x:200,y:0},
        useNativeDriver: true,
        duration:700
      }).start()

    return(
        <View style={styles.container}>
            
          <View style={styles.avatarBorder}>
         
            <TouchableOpacity style={{position:'absolute',alignSelf:'flex-start',marginLeft:20,marginTop:20}}
             onPress={() => navigation.goBack()} >
          <Ionicons style={{fontSize:30,color:'white',}} name='chevron-back-outline'/>
          </TouchableOpacity>
          <Image style={{width:80,height:80}}
          source={require('../assets/images/avatar.png')}
          />
            <Text style={{color:'white',fontSize:25,fontFamily:'Poppins-Bold',marginTop:10,textAlign:'center'}}>GOUTAM{'\n'}PAREEK</Text>

            <View style={{flexDirection:'row',marginTop:10}}>
              <TouchableOpacity style={{flexDirection:'row',backgroundColor:'#006ABB',padding:6,
              paddingHorizontal:15,borderRadius:20,}}
              onPress={couponButton}
              >
            <Image style={{width:20,height:20}}
          source={require('../assets/images/coupons.png')}
          />
          <Text style={{fontFamily:'Poppins-Regular',fontSize:12,textAlign:'center', marginLeft:5,color:'white'}}>2</Text>
               </TouchableOpacity>
               <TouchableOpacity style={{flexDirection:'row',backgroundColor:'#006ABB',padding:6,
               paddingHorizontal:15,borderRadius:20,marginLeft:15}} onPress={cashbackButton}>
            <Image style={{width:20,height:20}}
          source={require('../assets/images/cashback.png')}
          />
          <Text style={{fontFamily:'Poppins-Regular',fontSize:12,textAlign:'center', marginLeft:5, color:'white'}}>120</Text>
               </TouchableOpacity>
               <TouchableOpacity style={{flexDirection:'row',backgroundColor:'#006ABB',padding:6,
               paddingHorizontal:15,borderRadius:20,marginLeft:15}} onPress={walletButton}>
            <Image style={{width:20,height:20}}
          source={require('../assets/images/wallet.png')}
          />
          <Text style={{fontFamily:'Poppins-Regular',fontSize:12,textAlign:'center', marginLeft:5, color:'white'}}>200</Text>
               </TouchableOpacity>
              
            </View>
          </View>

          <Animated.View style={[styles.overContainer,{transform:[{translateY:position.y}  ]}]}>
            
            <ScrollView style={{}}>
            <TouchableOpacity style={{}}> 
             <List.Item
             titleStyle={{color:'white',fontFamily:'Poppins-Regular'}}
             title="Trips"            
             left={props => <List.Icon {...props} icon="car-outline" color="white"/>}
              />
              </TouchableOpacity>
             
              <TouchableOpacity style={{marginTop:10}}> 
             <List.Item
             titleStyle={{color:'white',fontFamily:'Poppins-Regular'}}
             title="Messages"            
             left={props => <List.Icon {...props} icon="message-outline" color="white"/>}
              />
              </TouchableOpacity>
              <TouchableOpacity style={{marginTop:10}}> 
             <List.Item
             titleStyle={{color:'white',fontFamily:'Poppins-Regular'}}
             title="Send a gift"            
             left={props => <List.Icon {...props} icon="gift-outline" color="white"/>}
              />
              </TouchableOpacity>
              <TouchableOpacity style={{marginTop:10}}> 
             <List.Item
             titleStyle={{color:'white',fontFamily:'Poppins-Regular'}}
             title="Help"            
             left={props => <List.Icon {...props} icon="help-circle-outline" color="white"/>}
              />
              </TouchableOpacity>
              <TouchableOpacity style={{marginTop:10}}> 
             <List.Item
             titleStyle={{color:'white',fontFamily:'Poppins-Regular'}}
             title="Settings"            
             left={props => <List.Icon {...props} icon="cog-outline" color="white"/>}
              />
              </TouchableOpacity>
              <TouchableOpacity style={{marginTop:10}}> 
             <List.Item
             titleStyle={{color:'white',fontFamily:'Poppins-Regular'}}
             title="Refer friends, unlock deals"            
             left={props => <List.Icon {...props} icon="send-outline" color="white"/>}
              />
              </TouchableOpacity>
              <TouchableOpacity style={{marginTop:10}}> 
             <List.Item
             titleStyle={{color:'white',fontFamily:'Poppins-Regular'}}
             title="Earn by driving or delivering"            
             left={props => <List.Icon {...props} icon="wallet-outline" color="white"/>}
              />
              </TouchableOpacity>
              <TouchableOpacity style={{marginTop:10}} onPress={logoutButton}> 
             <List.Item
             titleStyle={{color:'white',fontFamily:'Poppins-Regular'}}
             title="Log out"            
             left={props => <List.Icon {...props} icon="power" color="white"/>}
              />
              </TouchableOpacity>

              <View style={{ alignItems: 'center',marginTop:15}}>
            <Image style={styles.bottomLogo}
            source={require('../assets/images/bottom3d.png')}/>
        </View>

          </ScrollView>
          </Animated.View>
            
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor:'black',
    },
    avatarBorder:{
      backgroundColor:'#008BF7',
      alignItems:'center',
      width:'100%',
      height:'100%',
      padding:20
    },
    overContainer:{
      width:'100%',
      height:440,
      backgroundColor: 'black',
      position:'absolute',
      bottom:0,   
      borderTopEndRadius:20,  
      borderTopStartRadius:20,      
      shadowColor:'black',
        shadowOpacity:1,
        shadowRadius:20,
        shadowOffset: {
        height:-3,width:-1}, elevation:20,
    },
    bottomLogo:{
      width:'100%',
      height:130
  },
})

export default Profile;