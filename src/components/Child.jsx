import { View, Text } from 'react-native'
import React from 'react'

const Child = (props) => {

  return (
    <View>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Child</Text>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{props.data}</Text>
    </View>
  )
}

export default Child