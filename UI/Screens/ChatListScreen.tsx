import React, {FC, ReactElement, useEffect, useState} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {useCallback} from 'react';
import {ListItem, Avatar} from '@react-native-material/core';
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

const ChatListScreen = () => {
  const insets = useSafeAreaInsets();

  useFocusEffect(
    useCallback(() => {
      StatusBar.setBarStyle('dark-content');
      StatusBar.setBackgroundColor('#49b881');
    }, []),
  );


  const navigation = useNavigation();
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
        <ListItem  onPress={() => navigation.navigate('Chat')}
          leadingMode="avatar"
          leading={
            <Avatar
              image={{uri: 'https://mui.com/static/images/avatar/1.jpg'}}
            />
          }
          title="Brunch this weekend?"
          secondaryText="I'll be in your neighborhood doing errands this…"
        />
        <ListItem
          leadingMode="avatar"
          leading={
            <Avatar
              image={{uri: 'https://mui.com/static/images/avatar/2.jpg'}}
            />
          }
          title="Summer BBQ"
          secondaryText="Wish I could come, but I'm out of town this…"
        />
        <ListItem
          leadingMode="avatar"
          leading={
            <Avatar
              image={{uri: 'https://mui.com/static/images/avatar/3.jpg'}}
            />
          }
          title="Oui Oui"
          secondaryText="Do you have Paris recommendations? Have you ever…"
        />
      </View>
    </SafeAreaProvider>
  );
};

export default ChatListScreen;
