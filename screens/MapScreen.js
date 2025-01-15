import React, {useState, useEffect,useCallback,} from 'react';
import MapView, {Marker} from 'react-native-maps';
import * as Location from 'expo-location'; 
import { StyleSheet,SafeAreaView,TouchableOpacity,View, TextInput,Image, Animated,
  ScrollView,Text,} from 'react-native';
  import Ionicons from 'react-native-vector-icons/Ionicons';
import { useFonts } from 'expo-font';
import { LinearGradient } from "expo-linear-gradient";
import Profile from './Profile'
import DropDownPicker from 'react-native-dropdown-picker';
import { ProgressBar, MD3Colors } from 'react-native-paper'
import Booking from './Booking';
import { useBackHandler } from '@react-native-community/hooks';


const vehicleDetail=[
  {
    name:'Moto',
    img: source=require('../assets/images/VehiclesImage/motorbike.png'),
    price:64
  },
  {
    name:'Premium',
    img: source=require('../assets/images/VehiclesImage/premium.png'),
    price:280
  },
  {
    name:'XL',
    img: source=require('../assets/images/VehiclesImage/XL.png'),
    price:280
  },
  {
    name:'Sports',
    img: source=require('../assets/images/VehiclesImage/sports.png'),
    price:280
  },
  {
    name:'SUV',
    img: source=require('../assets/images/VehiclesImage/suv.png'),
    price:280
  },
  {
    name:'Mini',
    img: source=require('../assets/images/VehiclesImage/Mini.png'),
    price:280
  },
  {
    name:'Sedan',
    img: source=require('../assets/images/VehiclesImage/sedan.png'),
    price:280
  },
  {
    name:'Electric',
    img: source=require('../assets/images/VehiclesImage/electricCar.png'),
    price:280
  },
];

const cities=[
  'India','new york','rajasthan','jaipur','Delhi'
]


const MapScreen=({navigation})=>{

  const [searchText, setSearchText] = useState('');
  const [filteredCities, setFilteredCities] = useState([]);

 
  const [index, setIndex] = useState();

  function vehicleSelect () {
      setIndex()
  }



  const renderCities = () => {
    if (searchText === '') {
      return null;
    }  else {
      return filteredCities.map((city) => (
        <Text style={styles.city}>{city}</Text>
      ));
    }
  };

  const profileButton =()=>{
    navigation.navigate(Profile);
}
const bookingButton=()=>{
  navigation.navigate(Booking);
}
const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  
  const [items, setItems] = useState([
    { label: 'UPI' , value: 'upi',  icon: () => <Image source={require('../assets/images/googlePay.png')} style={{width:25,height:25}}/> },
    { label: 'Debit and credit card' , value: 'debit',icon: () => <Image source={require('../assets/images/debitCard.png')} style={styles.paymentIcon}/> },
    { label: 'Cash' , value: 'cash', icon: () => <Image source={require('../assets/images/dollar.png')} style={styles.paymentIcon}/> },
  ]);

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
  
    useEffect(() =>{
        userLocation();
    }, [] )

    const [showNext, setShowNext,]=useState(false);
    const [booking, setBooking]=useState(false);

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
       
      

        

     {!showNext &&
          <>
           <View style={{backgroundColor:'black',position:'absolute',borderRadius:50,
      padding:7,top:400,alignSelf:'flex-end',right:20,}}>
          <TouchableOpacity style={{}}
                  onPress={userLocation}>
      <Image style={{width:32,height:32}}
      source={require('../assets/images/findLocation.png')}/>
      </TouchableOpacity>
      </View>
      
           <View style={[styles.box,{alignItems: 'center', }]}>
  
          <View style={{alignSelf:'flex-start',marginTop:20,marginLeft:15}}>
          <Text style={{color:'white',fontSize:18,fontFamily:'Poppins-Medium'}}>Where to go?</Text>
          </View>
          <View style={{}}>
          <TextInput onPress={()=>{
            animation.value ={height:800}}} 
            style={[styles.inputstyle,{marginTop:5}]}
              placeholder='Enter your Destination'
              placeholderTextColor="gray"
          />
          
          <Image style={{width:24,height:24,position:'absolute',marginTop:20,alignSelf:'flex-end',right:10,}}
          source={require('../assets/images/desLocation.png')}/>
          </View>

          <LinearGradient style= {[styles.buttonRound,{position:'absolute',marginTop:205}]}
                colors={["#00BFE1", "#008BF7"]} start={[0.0, 0.5]} end={[1.0, 0.5]} locations={[0.0, 1.0]}>
                    <TouchableOpacity onPress={()=>setShowNext(true)}>
                     <Ionicons style={{fontSize:32}} name='arrow-forward-outline'/>
                    </TouchableOpacity>
                    </LinearGradient>
          </View>
          
          </>
          } 


            {showNext &&
          <>
          <View style={{backgroundColor:'black',position:'absolute',borderRadius:50,
      padding:7,top:380,alignSelf:'flex-end',right:20,}}>
          <TouchableOpacity style={{}}
                  onPress={userLocation}>
      <Image style={{width:32,height:32}}
      source={require('../assets/images/findLocation.png')}/>
      </TouchableOpacity>
      </View>

          <View style={[styles.box2,{alignItems: 'center', }]}>

          <View style={{alignSelf:'flex-start',marginTop:20,marginLeft:15}}>
          <Text style={{color:'white',fontSize:18,fontFamily:'Poppins-Medium'}}>Choose a ride</Text>
          </View>
            
          
               
            <ScrollView horizontal showsHorizontalScrollIndicator={false} >
            {
             vehicleDetail.map((data,index)=>{
              return(

            <View >
            <TouchableOpacity style={[styles.vehicleBorder,{borderColor: index === setIndex ? '#008BF7' : 'gray',
            backgroundColor:index === setIndex ? '#001423':'#111111' }]} onPress={() => vehicleSelect()}>
            <Image style={styles.vehicle}
            source={data.img}
            />
            </TouchableOpacity>
            
            <Text style={styles.vehicleName}>{data.name}</Text>
            </View>
            )})}
          </ScrollView>

                <View style={{alignSelf:'flex-start',marginLeft:15,flexDirection:'row',justifyContent:'center'}}>
                <Text style={{color:'white',fontFamily:'Poppins-Medium',fontSize:15,marginTop:2}}>Price:</Text>
                <Text style={{color:'#008BF7',fontFamily:'Poppins-Medium',fontSize:18,marginLeft:5}}>Rs. 140</Text>
                 </View>

                  <View  style={styles.paymentBorder}>
                <DropDownPicker style={{backgroundColor:'#626262'}}
                                textStyle={{
                                  fontFamily:'Poppins-Medium',
                                  fontSize:15,
                                  
                                }}
                                labelProps={{
                                  numberOfLines: 1
                                }}   
                                        
                placeholder='Payment'   
                maxHeight={200}           
              open={open}
              value={value}
              items={items}              
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems} 
                />
            </View>

          <LinearGradient style= {[styles.buttonRound,{position:'absolute',marginTop:230,alignSelf:'flex-end',right:15,justifyContent:'center'}]}
                colors={["#00BFE1", "#008BF7"]} start={[0.0, 0.5]} end={[1.0, 0.5]} locations={[0.0, 1.0]}>
                    <TouchableOpacity onPress={bookingButton}>
                    <Text style={{color:'black',fontSize:17,fontFamily:'Poppins-Bold',}}>Go</Text>
                    </TouchableOpacity>
                    </LinearGradient>
              
          </View>

          <View style={{backgroundColor:'black',borderRadius:50,
      width:38,height:38,alignSelf:'flex-start',marginTop:15,marginLeft:10,justifyContent:'center',
      position:'absolute',}}>
        <TouchableOpacity 
          onPress={()=>setShowNext(false)}  >
          <Ionicons style={{fontSize:30,color:'white',alignSelf:'center'}} name='chevron-back-outline'/>
          </TouchableOpacity>
          </View>
          </>  
          }   

                      
      
       </View>
  );
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
    height:280,
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
  box2:{
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
  inputstyle:{
    backgroundColor:'#3B3B3B',
    height:50,
    width:290,
    borderRadius:10,
    paddingHorizontal:15,
    color:'white',
    paddingRight:40,
  },
    paymentBorder:{
      marginLeft:15,
      marginBottom:15,
      alignSelf:'flex-start',
      width:130,
      
    },
  buttonRound:{
    width:55,
    height:55,
    borderRadius:100,
    alignItems:'center',
    justifyContent:'center'
  },
  buttonContainer:{
    width:120,
    height:50,
    borderRadius:10,
    alignItems:'center',
    justifyContent:'center'
  },
  vehicle:{
    width:55,
    height:55,
  },
  vehicleBorder:{
    borderWidth:0.5,
    // borderColor:'gray',
    width:82,
    height:85,
    justifyContent:'center',
    alignItems: 'center',
    borderRadius:15,
    // backgroundColor:'#111111',
    marginLeft:15,
    marginTop:10,
  },
  vehicleName:{
    color: 'white',
    textAlign:'center',
    marginLeft:15,
    fontFamily:'Poppins-Regular',
    fontSize:11,
    marginTop:2
  },
  paymentIcon:{
    width:20,
    height:20
  },
  barContainer:{
    marginTop:15,
    
  },
  city: {
    padding: 10,
    fontSize: 18,
    height: 44,color:'white',
  },
  noResults: {
    padding: 10,
    fontSize: 18,
    color: 'gray',
  },
});

export default MapScreen;

