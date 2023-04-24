import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ChatScreen from './UI/Screens/ChatScreen';
import LoginScr from './UI/Screens/LoginScreen';
import OtpVerifyScreen from './UI/Screens/OtpVerifyScreen';
import SplashScreen from './UI/Screens/SplashScreen';
// import Test from './Test/Test';
export default function Routing() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
         <Stack.Screen name="Home" component={ChatScreen} options={{headerShown:(false)}} />
         <Stack.Screen name="Login" component={LoginScr} options={{headerShown:(false)}} />
         <Stack.Screen name="Otp" component={OtpVerifyScreen} options={{headerShown:(false)}} />
         <Stack.Screen name="SplashScreen" component={SplashScreen} options={{headerShown:(false)}} />
      
         <Stack.Screen name="Test" component={OtpVerifyScreen} options={{headerShown:(false)}} />
         
      </Stack.Navigator>
    </NavigationContainer>
  );
}
