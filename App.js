import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/Pages/Login';
import Routes from './src/routes';
import { AuthProvider }from './src/context/auth';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';




export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <AuthProvider>
          <Routes/>
        </AuthProvider>
      </SafeAreaProvider>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
});
