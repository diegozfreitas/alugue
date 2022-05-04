import React from "react";
import { View } from "react-native";

import { Container, Title, ContainerItems } from "./style";

import { Card, DataCardProps } from "./Card";

interface CarouselProps {
  data: DataCardProps[];
}

export const Carousel = ({ data }: CarouselProps) => {
  return (
    <Container>
      <View>
        <Title>Novidades</Title>
      </View>

      <ContainerItems>
        {data.map((item: DataCardProps, key) => (
          <Card data={item} key={key} />
        ))}
      </ContainerItems>
    </Container>
  );
};
