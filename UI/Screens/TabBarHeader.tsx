import React, {FC, ReactElement, useEffect, useState} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {useCallback} from 'react';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import ChatScreen from './ChatScreen';
import {
  StyleSheet,
  View,
  StatusBar,
  Text,
  Pressable,
  Image,
} from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

export default function TabBarHeader() {
  const insets = useSafeAreaInsets();
//   const {name, avatar} = props;

  useFocusEffect(
    useCallback(() => {
      StatusBar.setBarStyle('dark-content');
      StatusBar.setBackgroundColor('#49b881');
    }, []),
  );

  return (
    <SafeAreaProvider>
      <View
        style={{
          flex: 1,
          // Paddings to handle safe area
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        }}>
      
      </View>
    </SafeAreaProvider>
  );
}
