import React from 'react';
import { View } from 'react-native'

import { Container, Image, Title } from './style'

import { thisComp } from './types'

export const Card: React.FC<thisComp> = ({ cover, name, onPress }) => {
  return (
    <Container onPress={onPress} >
      <Image source={cover} />

      <Title>{name}</Title>
    </Container>
  )
}