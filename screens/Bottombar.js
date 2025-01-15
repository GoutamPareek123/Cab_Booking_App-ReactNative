import React, { useCallback } from "react";
import {
  View,
  ImageBackground,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useFonts } from "expo-font";
import MapView from "./MapScreen";
import Profile from "./Profile";
import HomeScreen from "./HomeScreen";
import { LinearGradient } from "expo-linear-gradient";

const Bottombar = () => {
  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("..//assets/fonts/Poppins-Regular.ttf"),
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  const Tab = createBottomTabNavigator();
  return (
    <SafeAreaView style={styles.container}>
      <Tab.Navigator
        screenOptions={({ route, focused }) => ({
          tabBarShowLabel: true,

          headerShown: false,
          tabBarStyle: {
            borderColor: "red",
            borderTopWidth: 0.2,
            backgroundColor: "black",
            height: 55,
          },

          tabBarIcon: ({ focused, size, color }) => {
            let iconName;
            if (route.name === "HomeScreen") {
              iconName = focused ? "home" : "home-outline";
              color = focused ? "white" : "gray";
              size = 24;
            } else if (route.name === "Profile") {
              iconName = focused ? "person" : "person-outline";
              color = focused ? "white" : "gray";
              size = 24;
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            tabBarLabel: ({ focused, color, size }) => (
              <Text
                style={{
                  color: focused ? "white" : color,
                  fontSize: 10,
                  marginBottom: 5,
                  fontFamily: "Poppins-Regular",
                }}
              >
                Home
              </Text>
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: ({ focused, color, size }) => (
              <Text
                style={{
                  color: focused ? "white" : color,
                  fontSize: 10,
                  marginBottom: 5,
                  fontFamily: "Poppins-Regular",
                }}
              >
                Profile
              </Text>
            ),
          }}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    margin: 15,
    fontSize: 15,
    color: "white",
  },
  searchInput: {
    backgroundColor: "#E4E6E6",
    height: 35,
    borderRadius: 10,
    width: 230,
    paddingHorizontal: 30,
  },
  searchbar: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 15,
  },
});

export default Bottombar;
