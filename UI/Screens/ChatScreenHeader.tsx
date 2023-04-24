import React, {FC, ReactElement, useEffect, useState} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {useCallback} from 'react';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import User from '../../Assets/Images/user.png';
import ChatScreen from './ChatScreen';
import {useNavigation} from '@react-navigation/native';
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

export default function ChatScreenHeader(props) {
  const insets = useSafeAreaInsets();
  const {name, avatar} = props;
  const navigation = useNavigation();
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
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#49b881',
            height: '15%',
            // alignItems:'baseline',
          }}>
          <Pressable  onPress={() => navigation.navigate('ChatList')} style={{justifyContent: 'center'}}>
            <Icon name="arrow-back" color="#ffff" size={32} />
          </Pressable>
          <Image
            source={{uri: avatar}}
            style={{
              width: 40,
              height: 40,
              borderRadius: 50,
              alignSelf: 'center',
              marginHorizontal: 5,
            }}
          />

          <Text
            style={{
              marginHorizontal: 10,
              alignSelf: 'center',
              fontSize: 20,
              color: '#ffff',
            }}>
            {name}
          </Text>
        </View>
      </View>
    </SafeAreaProvider>
  );
}
