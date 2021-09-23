import React from 'react';
import { Text } from 'react-native';

import {Container, Image, Title, Description}from './style'

import {thisComp} from './types'

export const Card: React.FC<thisComp> = ({cover, description, name, onPress}) => {
  return(
    <Container onPress={onPress}>
      <Image source={cover}/>
      <Title>{name}</Title>
      <Description>{name}</Description>
    </Container>
  )
}