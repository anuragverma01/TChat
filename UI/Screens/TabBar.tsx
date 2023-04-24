import * as React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ChatListScreen from './ChatListScreen';
import TabBarHeader from './TabBarHeader';

// function FeedScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Feed!</Text>
//     </View>
//   );
// }

function NotificationsScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Notifications!</Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Profile!</Text>
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();

const TabBar = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Tab.Navigator
        initialRouteName="Chat"
        screenOptions={{
          tabBarActiveTintColor: '#ffff',
          tabBarLabelStyle: {fontSize: 12},
          tabBarStyle: {backgroundColor: '#49b881'},
        }}>
        <Tab.Screen
          name="Chat"
          component={ChatListScreen}
          options={{tabBarLabel: 'Chats'}}
        />
        <Tab.Screen
          name="Notifications"
          component={NotificationsScreen}
          options={{tabBarLabel: 'Status'}}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{tabBarLabel: 'Calls'}}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
};
export default TabBar;
