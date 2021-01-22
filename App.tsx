import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar, Platform, Text, View } from 'react-native';
import Login from './src/routes/Login';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Login />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingLeft: Platform.OS === 'android' ? 15 : 0,
    paddingRight: Platform.OS === 'android' ? 15 : 0,
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    marginLeft: Platform.OS === 'android' ? 0 : 15,
    marginRight: Platform.OS === 'android' ? 0 : 15,
  },
});
