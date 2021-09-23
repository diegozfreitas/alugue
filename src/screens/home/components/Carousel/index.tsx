import React from 'react'
import { View } from 'react-native'

import { Container, Title, ContainerItems } from './style'

import { Card } from './Card'

export const Carousel = () => {
  return (
    <Container>
      <View>
        <Title>
          Novidades
        </Title>
      </View>

      <ContainerItems horizontal showsHorizontalScrollIndicator={false}>
        <Card
          cover={require('../../../../assets/house1.jpg')}
          name="casa de praia"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit"
          onPress={() => alert('clicado na casa 1')}
        />

        <Card
          cover={require('../../../../assets/house2.jpg')}
          name="casa de praia"
          description="Quas quos tempora quisquam labore error, quo quia atque"
          onPress={() => alert('clicado na casa 2')}
        />

        <Card
          cover={require('../../../../assets/house1.jpg')}
          name="casa de praia"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit"
          onPress={() => alert('clicado na casa 3')}
        />

        <Card
          cover={require('../../../../assets/house3.jpg')}
          name="casa de praia"
          description="Quas quos tempora quisquam labore error, quo quia atque"
          onPress={() => alert('clicado na casa 4')}
        />

        <Card
          cover={require('../../../../assets/house4.jpg')}
          name="casa de praia"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit"
          onPress={() => alert('clicado na casa 5')}
        />

        <Card
          cover={require('../../../../assets/house5.jpg')}
          name="casa de praia"
          description="Quas quos tempora quisquam labore error, quo quia atque"
          onPress={() => alert('clicado na casa 6')}
        />

        <Card
          cover={require('../../../../assets/house6.jpg')}
          name="casa de praia"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit"
          onPress={() => alert('clicado na casa 7')}
        />

        <Card
          cover={require('../../../../assets/house1.jpg')}
          name="casa de praia"
          description="Quas quos tempora quisquam labore error, quo quia atque"
          onPress={() => alert('clicado na casa 8')}
        />

        <Card
          cover={require('../../../../assets/house2.jpg')}
          name="casa de praia"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit"
          onPress={() => alert('clicado na casa 9')}
        />

        <Card
          cover={require('../../../../assets/house4.jpg')}
          name="casa de praia"
          description="Quas quos tempora quisquam labore error, quo quia atque"
          onPress={() => alert('clicado na casa 10')}
        />
      </ContainerItems>
    </Container>
  )
}
