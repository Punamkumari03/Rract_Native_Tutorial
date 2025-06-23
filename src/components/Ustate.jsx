import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'


export default function Ustate() {
    const[name,setName] = useState('Punam Kumari')
  return (
    <View>
      <Text>Ustate</Text>
      <Text>{name}</Text>
      <Button title="Counter button" onPress={()=>setName('punam-new')} />
    </View>
  )
}