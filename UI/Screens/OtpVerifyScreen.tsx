import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Image,
  TextInput,
  Pressable,
} from 'react-native';
import React from 'react';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import {useFocusEffect} from '@react-navigation/native';
import {useCallback} from 'react';
import gif from '../../Assets/Images/phone.gif';
import Logo from '../../Assets/Images/TChat.png';
import Otp from '../../Assets/Images/Otp.gif';
import { useNavigation } from '@react-navigation/native';
export default function OtpVerifyScreen() {
  const insets = useSafeAreaInsets();
  useFocusEffect(
    useCallback(() => {
      StatusBar.setBarStyle('dark-content');
      StatusBar.setBackgroundColor('#ffff');
    }, []),
  );

  const navigation = useNavigation();

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
          {/* <Text
            style={{
              fontSize: 16,
              //   fontWeight: 'bold',
              color: '#a1ada4',
              marginVertical: 5,
              fontFamily: 'Charmonman-Regular',
            }}>
            Hello, welcome back to our Tchat
          </Text> */}
        </View>
        <View>
          <Image
            resizeMode="contain"
            style={{width: 300, height: 250, alignSelf: 'center'}}
            source={Otp}
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
                fontStyle: 'italic',
              }}>
              You will get a OTP via SMS
            </Text>
          </View>

          <View style={{marginVertical: 50}}>
            <TextInput
              inputMode="numeric"
              maxLength={4}
              keyboardType="number-pad"
              //   secureTextEntry={true}
              style={styles.Box}></TextInput>
            <Pressable style={styles.button}>
              <Text style={styles.continueText}>Verify</Text>
            </Pressable>
          </View>
          <View style={{flexDirection: 'row', alignSelf: 'center'}}>
            <Text>Didn't receive the Verification OTP ?</Text>
            <Text onPress={()=> navigation.replace('Login')} style={{color: '#581c94', fontWeight: '500'}}>
              Resend Again
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaProvider>
  );
}
const styles = StyleSheet.create({
  button: {
    marginTop: 30,
    width: '60%',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#7070cc',
    borderRadius: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },

  continueText: {
    color: '#ffff',
  },

  Box: {
    width: '70%',
    height: 45,
    borderColor: '#cccbc8',
    borderWidth: 0.5,
    borderRadius: 10,
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 20,
    color: '#8a8986',
  },
});
