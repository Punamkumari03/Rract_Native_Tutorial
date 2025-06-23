import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'
import Child from './Child'

export default function Props() {
    const[count,SetCount]=useState(0);
  return (
    <View>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Props</Text>
      <Button title="Counter" onPress={()=>SetCount(count+1)} />
      <Child data={count} /> 
    </View>
  )
}