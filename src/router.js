import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Feather } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native'

import Home from './screens/home'
import Details from './screens/details'

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="home"
          component={Home}
          options={{
            title: "ALUGUE",
            headerTitleStyle: {
              fontFamily: 'Nunito_700Bold'
            },
            headerRight: () => (
              <TouchableOpacity style={{ marginRight: 15 }}>
                <Feather name="shopping-bag" size={24} color="black" />

              </TouchableOpacity>
            )

          }}
        />
        <Stack.Screen
          name="details"
          component={Details}
          options={{
            title: "Detalhe",
            headerTitleStyle: {
              fontFamily: 'Nunito_700Bold'
            },
            headerRight: () => (
              <TouchableOpacity style={{ marginRight: 15 }}>
                <Feather name="shopping-bag" size={24} color="black" />
              </TouchableOpacity>
            )

          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes;