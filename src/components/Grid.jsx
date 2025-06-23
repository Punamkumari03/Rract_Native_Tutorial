import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import styles from './style/customstyle'
const data = [
  { id: '1', name: 'Item 1' },
  { id: '2', name: 'Item 2' },
  { id: '3', name: 'Item 3' },
  { id: '4', name: 'Item 4' },
  { id: '5', name: 'Item 5' },
{ id: '6', name: 'Item 3' },
  { id: '7', name: 'Item 4' },
  { id: '8', name: 'Item 5' },
]
export default function Grid() {
  return (
    <View>
      <Text>Grid</Text>
      <ScrollView contentContainerStyle={styles.flexproperty}>
      { data.map((item)=>(
        <View key={item.id} style={{width: '48%', margin: '1%'}}>
            <Text style={styles.container}>{item.name}</Text>
        </View>
       ))}
      </ScrollView>
    </View>
  )
}