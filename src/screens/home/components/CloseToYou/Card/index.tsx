import React from 'react';
import { View } from 'react-native'

import { Container, Image, Title, Description } from './style'

import { thisComp } from './types'

export const Card: React.FC<thisComp> = ({ cover, description, name, onPress }) => {
  return (
    <Container onPress={onPress} >
      <View>
        <Image source={cover} />
      </View>

      <View>
        <Title>{name}</Title>
        <Description>{name}</Description>
      </View>
    </Container>
  )
}