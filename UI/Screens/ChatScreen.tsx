import React, {useState, useCallback, useEffect} from 'react';
import {GiftedChat} from 'react-native-gifted-chat';
import ChatScreenHeader from './ChatScreenHeader';
import {View, Image} from 'react-native';

const ChatScreen = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello ID 1',
        createdAt: new Date(),
        user: {
          _id: 1,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },

      {
        _id: 2,
        text: 'Hello Id 2',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },

      {
        _id: 3,
        text: 'Hello Id 3',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },

      {
        _id: 4,
        text: 'Hello Id 4',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    );
    
  }, []);

  return (
    <View style={{flex: 1}}>
      <ChatScreenHeader
        name={'Dev'}
        avatar={'https://placeimg.com/140/140/any'}
      />
      <GiftedChat
        placeholder={'Message'}
        messages={messages}
        renderUsernameOnMessage={true}
        onSend={messages => onSend(messages)}
        user={{
          _id: 1,
        }}
      />
    </View>
  );
};

export default ChatScreen;
