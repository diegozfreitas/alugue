import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Father } from '@expo/vector-icons'

import Home from './screens/home'
import Details from './screens/details'

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes;