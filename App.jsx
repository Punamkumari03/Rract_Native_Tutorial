import { View, Text, Button } from 'react-native'
import React from 'react'
import { Start } from './src/components/Start'


export default function App() {
  return (
    <View>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>hello this is punam kumari</Text>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>hello this is punam kumari</Text>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>hello this is punam kumari</Text>
          <Button title='click me' onPress={() => alert('Button clicked!')} />
            <Start/>
    </View>
  )
}