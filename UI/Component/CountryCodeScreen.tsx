import React, {useState, useRef} from 'react';
import {View, Text, Alert, StyleSheet, Pressable} from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import {useNavigation} from '@react-navigation/native';

const CountryCodeScreen = () => {
  const [phoneNumber, setphoneNumber] = useState('');
  const phoneInput = useRef(null);
  // const buttonPress = () => {
  //   Alert.alert(phoneNumber);
  // };
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <PhoneInput
        ref={phoneInput}
        defaultValue={phoneNumber}
        defaultCode="IN"
        layout="first"
        withShadow
        autoFocus
        containerStyle={styles.phoneContainer}
        textContainerStyle={styles.textInput}
        onChangeFormattedText={text => {
          setphoneNumber(text);
        }}
      />
      <Pressable style={styles.button} onPress={() => navigation.navigate('Otp')}>
        <Text style={styles.continueText}>GET OTP</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  phoneContainer: {
    width: '75%',
    height: 50,
    borderRadius: 50,
  },
  button: {
    marginTop: 30,
    width: '60%',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
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
  textInput: {
    paddingVertical: 0,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
  },

  continueText: {
    color: '#ffff',
  },
});

export default CountryCodeScreen;
