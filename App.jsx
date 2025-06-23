import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Start } from './src/components/Start';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Start/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // optional
  },
});
