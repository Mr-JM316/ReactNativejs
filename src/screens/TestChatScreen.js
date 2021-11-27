import React, { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'

import Chat from '../components/chat'

import { LoremIpsum } from 'lorem-ipsum'

//https://github.com/Eduardo-Balistieri/instagram-colorful-dm

const MESSAGES_COUNT = 150
const MIN_WORDS = 2
const MAX_WORDS = 8


const lorem = new LoremIpsum()

const App = () => {
  const [messages, setMessages] = useState([{id:'',messsage:'', received:''}])

  useEffect(() => {
    const generatedMessages = []
    for (let id = 0; id < MESSAGES_COUNT; id++) {
      const wordsCount = Math.round(Math.random() * (MAX_WORDS - MIN_WORDS) + MIN_WORDS)

      const newMessage = {
        id,
        message: lorem.generateWords(wordsCount),
        received: Math.random() > 0.5
      }
      generatedMessages.push(newMessage)
    }

    setMessages(generatedMessages)
  }, [])

  return (
    <View style={styles.container}>
      <StatusBar style='light' backgroundColor='rgba(0, 0, 0, 0.8)' />
      <Chat messages={messages} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000'
  }
})

export default App