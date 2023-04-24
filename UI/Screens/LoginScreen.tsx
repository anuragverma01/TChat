import {View, Text, StatusBar, StyleSheet, Image} from 'react-native';
import React from 'react';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import {useFocusEffect} from '@react-navigation/native';
import {useCallback} from 'react';
import gif from '../../Assets/Images/phone.gif';
import Logo from '../../Assets/Images/TChat.png';
import CountryCodeScreen from '../Component/CountryCodeScreen';
export default function LoginScreen() {
  const insets = useSafeAreaInsets();
  useFocusEffect(
    useCallback(() => {
      StatusBar.setBarStyle('dark-content');
      StatusBar.setBackgroundColor('#ffff');
    }, []),
  );

  return (
    <SafeAreaProvider>
      <View
        style={{
          flex: 1,
          //   justifyContent: 'space-between',
          //   alignItems: 'center',
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
          backgroundColor: '#ffff',
        }}>
        <View style={{marginHorizontal: 20, marginVertical: 20}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text
              style={{
                fontSize: 40,
                fontFamily: 'Molle-Italic',
                color: '#8126d1',
              }}>
              TChat
            </Text>
            <Image style={{width: 50, height: 50}} source={Logo} />
          </View>
          {/* <Text style={{fontSize: 25, color: '#000000', fontWeight: 'bold'}}>
            Login
          </Text> */}
          <Text
            style={{
              fontSize: 16,
              //   fontWeight: 'bold',
              color: '#a1ada4',
              marginVertical: 5,
              fontFamily: 'Charmonman-Regular',
            }}>
            Hello, welcome back to our Tchat
          </Text>
        </View>
        <View>
          <Image
            resizeMode="contain"
            style={{width: 300, height: 250, alignSelf: 'center'}}
            source={gif}
          />
        </View>
        <View>
          <Text
            style={{
              marginHorizontal: 60,
              marginVertical: 5,
              fontSize: 35,
              color: '#a1ada4',
              alignSelf: 'center',
              fontFamily: 'Molle-Italic',
            }}>
            Verification
          </Text>
          <View>
            <Text
              style={{
                textAlign: 'center',
                alignSelf: 'center',
                paddingHorizontal: 90,
                fontStyle:'italic'
              }}>
              We will send you One time Code on your phone number
            </Text>
          </View>
        </View>

        <CountryCodeScreen />
      </View>
    </SafeAreaProvider>
  );
}
