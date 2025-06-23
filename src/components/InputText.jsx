import { View, Text, TextInput, Button } from 'react-native'
import React, { useState } from 'react'

export default function InputText() {
    const[name, setName] =useState('');
  return (
    <View>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>username:{name}</Text>
      <TextInput style={{ borderWidth: 1, borderColor: 'gray', marginTop: 60,padding: 10 }} placeholder='Enter your name' value={name} onChangeText={text => setName(text)}  />
        <Button title='Submit' onPress={() => alert(`Hello ${name}`)} />
    </View>
  )
}