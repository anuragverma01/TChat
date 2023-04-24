// Example of Animated Splash Screen in React Native
// https://aboutreact.com/animated-splash-screen/

// import React in our code
import React, {FC, ReactElement, useEffect, useState} from 'react';
// import all the components we are going to use
import {View, Text, Image, StyleSheet, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Logo from '../../Assets/Images/Splash.png'
const SplashScreen = () => {
  const [align, setAlign] = useState('center');
  const [alignsecond, setAlignsecond] = useState(false);

  const navigation = useNavigation();
  setTimeout(() => {
    setAlign('flex-start'), setAlignsecond(true);
  }, 3000);

  
  return (
    <View style={[styles.container, {justifyContent: align}]}>
      <Image
        source={
          Logo
        }
        style={{}}
      />
      {!alignsecond ? null : navigation.replace('Login')}
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 40,
  },
});
