import React from 'react';
import { View, Text, Button, StyleSheet, Dimensions } from 'react-native';

export const Start = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>hello this is punam kumari</Text>
      <Text style={styles.text}>hello this is punam kumari</Text>
      <Text style={styles.heading}>This is start component</Text>
      <Button title='click me' onPress={() => alert('Button clicked!')} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
    justifyContent: 'center', // optional: center vertically
    alignItems: 'center',     // optional: center horizontally
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  heading: {
    fontSize: 60,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
});
