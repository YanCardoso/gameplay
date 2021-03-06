import React from 'react';
import { useFonts } from 'expo-font';
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import { Rajdhani_500Medium, Rajdhani_700Bold } from '@expo-google-fonts/rajdhani';
import AppLoading from 'expo-app-loading';
import { AuthProvider } from './src/hooks/auth';
import { StatusBar } from 'react-native';
import { Background } from './src/components/Background';
import { Routes } from './src/routes';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold
  });


  if (!fontsLoaded) {
    return (
      <AppLoading />
    )
  } else {

    return (
      <Background>

        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </Background>

    );
  }

}

