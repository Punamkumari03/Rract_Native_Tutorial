import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Task from './Task'

export default function TodoList() {
  return (
    <View style={styles.container}>
      <View style={styles.taskwrapper}>
        <Text style={styles.sectionTitle}>Today's Task</Text>
        <View style={styles.items}>
            <Task text={'Task1'} />
             <Task text={'Task2'} />
        </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#E8EAED',
      alignItems: 'center',
      justifyContent: 'center',
    },
    taskwrapper:{
        paddingTop: 80,
        paddingHorizontal: 20,
    },
    sectionTitle:{
        fontSize: 24,
        fontWeight: 'bold',
        color: '#555',
        marginBottom: 20,
    },
    items:{
        marginTop:30,
    },
})