import React, { useState } from 'react';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator, Avatar, ConversationHeader } from '@chatscope/chat-ui-kit-react'
import { useSelector } from 'react-redux';
import { API_KEY } from '../../utils/urls';
import AlligatorAvatar from './images/avatars/AlligatorAvatar.png';

export const Chatbot = () => {
  // const [playerAvatar, setPlayerAvatar] = useState(null);
  const username = useSelector((store) => store.user.username);
  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      message: 'Hello, What would you like to learn about today?',
      sender: 'Animal'
    }
  ])

  const handleSend = async (message) => {
    const newMessage = {
      message,
      sender: 'user',
      direction: 'outgoing'
    }
    const newMessages = [...messages, newMessage]
    setMessages(newMessages);
    setTyping(true);
    // eslint-disable-next-line no-use-before-define
    await processMessageToChatGPT(newMessages);
  }

  async function processMessageToChatGPT(chatMessages) {
    const apiMessages = chatMessages.map((messageObject) => {
      let role = '';
      if (messageObject.sender === 'ChatGPT') {
        role = 'assistant'
      } else {
        role = 'user'
      }
      return { role, content: messageObject.message }
    });

    // role: "user" a message from the user, "assistant" a response from ChatGPT,
    // "system" one initial message defining how we want chatgpt to talk

    const systemMessage = {
      role: 'system',
      content: 'Explain all concepts like I am 10 years old' // can change this to anything example---speak like a pirate
    }

    const apiRequestBody = {
      model: 'gpt-3.5-turbo',
      messages: [
        systemMessage,
        ...apiMessages
      ]
    };

    await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        // eslint-disable-next-line prefer-template
        Authorization: 'Bearer ' + API_KEY,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(apiRequestBody)
    }).then((data) => { return data.json() })
      .then((data) => {
        console.log(data);
        console.log(data.choices[0].message.content);
        setMessages(
          [...chatMessages, {
            message: data.choices[0].message.content,
            sender: 'ChatGPT'
          }]
        );
        setTyping(false);
      });
  }

  return (
    <div style={{ height: '100%', width: '100%' }}>

      <MainContainer style={{ display: 'flex', flexDirection: 'column' }}>

        <ConversationHeader style={{ }}>
          <Avatar
            alt="avatar"
            src={/* playerAvatar || */ AlligatorAvatar}
            sx={{ width: 70, height: 70 }} />

          <ConversationHeader.Content>
            <span style={{
              color: 'black',
              fontFamily: 'Fredoka',
              alignSelf: 'flex-center'
            }}>{username ? (<p>{username}</p>) : null}
            </span>
          </ConversationHeader.Content>
        </ConversationHeader>

        <ChatContainer>
          <MessageList
            scrollBehavior="smooth"
            typingIndicator={typing ? <TypingIndicator content="Chatbot is typing" /> : null}>
            {messages.map((message, i) => {
              // eslint-disable-next-line react/no-array-index-key
              return <Message key={i} model={message} />
            })}
          </MessageList>
          <MessageInput placeholder="Write your question here!" onSend={handleSend} attachButton={false} sendButton={false} />
        </ChatContainer>
      </MainContainer>

    </div>

  )
}
