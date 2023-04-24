import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ChatScreen from './UI/Screens/ChatScreen';
import LoginScr from './UI/Screens/LoginScreen';
import OtpVerifyScreen from './UI/Screens/OtpVerifyScreen';
import SplashScreen from './UI/Screens/SplashScreen';
import ChatListScreen from './UI/Screens/ChatListScreen';
import TabBar from './UI/Screens/TabBar';
// import Test from './Test/Test';

const  Routing=() => {

  type StackParamList = {
    PhoneNumber: undefined;
  };

  const Stack = createNativeStackNavigator();
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ChatList">
         <Stack.Screen name="Chat" component={ChatScreen} options={{headerShown:(false)}} />
         <Stack.Screen name="Login" component={LoginScr} options={{headerShown:(false)}} />
         <Stack.Screen name="Otp" component={OtpVerifyScreen} options={{headerShown:(false)}} />
         <Stack.Screen name="SplashScreen" component={SplashScreen} options={{headerShown:(false)}} />
         <Stack.Screen name="ChatList" component={ChatListScreen} options={{headerShown:(false)}} />
         <Stack.Screen name="TabBar" component={TabBar} options={{headerShown:(false)}} />
         <Stack.Screen name="Test" component={OtpVerifyScreen} options={{headerShown:(false)}} />

      </Stack.Navigator>

    </NavigationContainer>
  );
}
export default Routing;