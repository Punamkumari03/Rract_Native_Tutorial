import React from 'react'
import { View, Text, Button } from 'react-native'
export const Start = () => {
  return (
   <View>
         <Text style={{ fontSize: 20, fontWeight: 'bold' }}>hello this is punam kumari</Text>
           <Text style={{ fontSize: 20, fontWeight: 'bold' }}>hello this is punam kumari</Text>
             <Text style={{ fontSize: 60, fontWeight: 'bold' }}>This is start component</Text>
             <Button title='click me' onPress={() => alert('Button clicked!')} />
       </View>
  )
}
