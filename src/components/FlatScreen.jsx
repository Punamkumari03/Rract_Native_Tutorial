import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'
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
export default function FlatScreen() {
    const renderItem =({item})=>(
        <View style={styles.item}>
            <Text>{item.name}</Text>
        </View>
    );
  return (
    <View style={styles.container}>
      <Text>FlatScreen</Text>
      <FlatList data={data} renderItem={renderItem} keyExtractor={(item)=>item.id} />
    </View>
  )
}
const styles=StyleSheet.create({
  
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        backgroundColor: '#f9c2ff',
        borderRadius: 10,
    },
    text: {
        fontSize: 32,
        fontWeight: 'bold',
    },
      container: {
    flex: 1,
    padding: 20,
    width: '100%', // take full width of parent
    height: '100%', // take full height of parent
    backgroundColor: '#fff', // optional
  },

})