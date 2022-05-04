import React from 'react';
import { StatusBar } from 'expo-status-bar';

import AppLoading from 'expo-app-loading';
import { useFonts, Nunito_400Regular, Nunito_700Bold } from '@expo-google-fonts/nunito'

import Routes from './src/router';

export default function App() {
  let [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }
  
  return (
    <>
      <StatusBar style="light" backgroundColor="#000" translucent={false} />
      <Routes />
    </>
  );
}
