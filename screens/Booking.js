import React, {useState, useEffect,useCallback,} from 'react';
import MapView, {Marker} from 'react-native-maps';
import * as Location from 'expo-location'; 
import { StyleSheet,SafeAreaView,TouchableOpacity,View,Image, Animated,Text,Alert,} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useFonts } from 'expo-font';
import Profile from './Profile'
import MapScreen from './MapScreen'
import { LinearGradient } from "expo-linear-gradient";
import { ProgressBar, MD3Colors, } from 'react-native-paper'
import AwesomeAlert from 'react-native-awesome-alerts';
import { useBackHandler } from '@react-native-community/hooks';

const headings= [
  'Finding your ride....', 'Searching drivers near you', 'Looking for drivers to accept',
   'We appreciate your patient', 'We almost find your ride',
]
const subHeadings= [
  ' You are awesome, so we are finding awesome ride to make you look more awesome.',
  'We care for you please wear your helmet and ask driver to wear helmet if not.',
]


const Booking =({navigation})=>{

    const profileButton =()=>{
        navigation.navigate(Profile);
    }
    const cancelRide =()=>{
      navigation.navigate(MapScreen);
  }
  // useBackHandler(useCallback(
  //   ()=>setShowAlert(!showAlert)
  // ))
    
    const [showAlert, setShowAlert] = useState(false);

    const [errorMsg, setErrorMsg] = useState(null);
    const [mapRegion, setMapRegion] = useState({
        latitude:  26.806683,
        longitude:  75.810730,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    });

    const userLocation = async ()=>{
      let { status } = await Location.requestForegroundPermissionsAsync();
      console.log(status)
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
        let text = 'Waiting..';
      if (errorMsg) {
        text = errorMsg;
      } else if (location) {
        text = JSON.stringify(location);
      }
        let location = await Location.getCurrentPositionAsync({enableHighAccuracy: true});
        setMapRegion({
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
        });
        console.log(location.coords.latitude, location.coords.longitude)
    };
    const [newHeadings, setnewHeadings] = useState("");

    const shuffle = useCallback(() => {
        const index = Math.floor(Math.random() * headings.length);
        setnewHeadings(headings[index]);
    }, [] );

    useEffect(() => {
        const intervalID = setInterval(shuffle, 3000);
        return () => clearInterval(intervalID);
    }, [shuffle])
    
    const [newSubHeadings, setNewSubHeadings] = useState("Get Set Go!! ");

    const Shuffle = useCallback(() => {
        const index = Math.floor(Math.random() * subHeadings.length);
        setNewSubHeadings(subHeadings[index]);
    }, [] );

    useEffect(() => {
        const intervalID = setInterval(Shuffle, 4000);
        return () => clearInterval(intervalID);
    }, [Shuffle])
  
    useEffect(() =>{
        userLocation();
    }, [] )

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

    const position = new Animated.ValueXY({x:0,y:300})
      Animated.timing(position,{
        toValue:{x:100,y:0},
        useNativeDriver: true,
      }).start()

      const backPosition = new Animated.ValueXY({x:-200,y:0})
      Animated.timing(backPosition,{
        toValue:{x:10,y:0},
        useNativeDriver: true,
      }).start()

        return(
 <View style={styles.container}>
         <MapView style={styles.map}
       userInterfaceStyle={'dark'}
      region={mapRegion} >
       
        <Marker coordinate={mapRegion} title="Location" />
        {userLocation}
        </MapView>

                 
        <TouchableOpacity style={{backgroundColor:'black',borderRadius:50,
      padding:0,top:15,alignSelf:'flex-end',right:20,position:'absolute'}} 
      onPress={profileButton}>
        <Image style={{width:38,height:38}}
        source={require('../assets/images/avatar.png')}/>
      </TouchableOpacity>

      <AwesomeAlert 
        show={showAlert}

               
        message={<Text>We are finding your ride.{'\n'}Are you sure you want to cancel the request. </Text>}
        messageStyle={{fontSize:18, color:"black",fontFamily:'Poppins-Medium'}}

        showCancelButton={true}
        cancelText="No"
        cancelButtonStyle={{ backgroundColor:"black", width:70,alignItems:'center',marginBottom:15}}
        cancelButtonTextStyle={{ fontSize: 19,fontFamily:'Poppins-Medium', }}
        onCancelPressed={() => {
          console.log('No button pressed')
          setShowAlert(false)
        }}

        showConfirmButton={true}
        confirmText="Sure"
        confirmButtonStyle={{ backgroundColor:"#DCDCDC", width:70,alignItems:'center',marginBottom:15}}
        confirmButtonTextStyle={{ fontSize: 19,fontFamily:'Poppins-Medium',color:'black' }}
        onConfirmPressed={() => {
          console.log("Sure button pressed")
          setShowAlert(false)
          onPress={cancelRide}
        }}

        // showProgress={true}
        // progressColor="red"
        // progressSize={40}
          
        closeOnTouchOutside={false} // default true
        closeOnHardwareBackPress={false} // default true
        // onDismiss={() => console.log('Dismiss Called.')}

        // customView={
        //   <View style={{ backgroundColor:'lightgreen', padding: 10, marginVertical: 10, borderRadius: 10 }}>
        //     <Text style={{ color:"green", fontSize: 16 }}>
        //       Custom Prop in the Alert message
        //     </Text>
        //   </View>
        // }
      />

   <View style={[styles.box,{paddingHorizontal:15, }]}>
  
        <View style={styles.barContainer}>
    <Text style={{color:'white',fontSize:17,fontFamily:'Poppins-Medium',}}>{newHeadings}</Text>
    <View style={{marginTop:10}}>
    <ProgressBar color='#008BF7' animatedValue={0.5} />
    </View>
    </View>
    <Text style={{color:'white',fontSize:12,fontFamily:'Poppins-Medium',marginTop:15,textAlign:'center'}}>
      {newSubHeadings}</Text>
      <View style={[styles.boxSmall,{paddingHorizontal:15, }]}>  

      <Image source={require('../assets/images/Gifs/location.gif')} style={{ width: 120, height: 120,marginTop:20 }} />

      <TouchableOpacity style={{position:'absolute',marginTop:100,alignSelf:'flex-end',}} onPress={() => setShowAlert(!showAlert)}>
      <LinearGradient style= {[styles.buttonRound,{right:15,justifyContent:'center'}]}
      colors={["#00BFE1", "#008BF7"]} start={[0.0, 0.5]} end={[1.0, 0.5]} locations={[0.0, 1.0]}>

         
          <Ionicons style={{fontSize:32}} name='close-outline'/>
          
          </LinearGradient>
          </TouchableOpacity>
         </View>
 
    </View>
 </View>
        )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
    },
    map: {
      width: '100%',
      height: '100%',
    },
    box:{
        width:330,
        height:300,
        backgroundColor: 'black',
        position:'absolute',
        bottom:0,
        marginBottom:10,
        borderRadius:20,
        // alignItems: 'center', 
        shadowColor:'black',
          shadowOpacity:1,
          shadowRadius:20,
          shadowOffset: {
          height:1,width:1}, elevation:20
      },
      barContainer:{
        marginTop:15,
        
      },
      boxSmall:{
        width:330,
        height:170,
        backgroundColor: '#404040',
        position:'absolute',
        bottom:0,
        
        borderRadius:20,
        alignItems: 'center', 
      //  justifyContent:'center'
      },
      buttonRound:{
        width:55,
        height:55,
        borderRadius:100,
        alignItems:'center',
        justifyContent:'center'
      },
})
export default Booking;