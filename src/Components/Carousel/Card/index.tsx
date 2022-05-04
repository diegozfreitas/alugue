import React from "react";
import { Alert } from "react-native";

import { Container, Image, Title, Description } from "./style";

export interface DataCardProps {
  id: string;
  image: string;
  description: string;
  name: string;
}

interface CardProps {
  data: DataCardProps;
}

export const Card = ({ data }: CardProps) => {
  const { image, name } = data;
  return (
    <Container onPress={() => Alert.alert("Oi", "Você clicou no item" + name)}>
      <Image
        source={{
          uri: image,
        }}
      />

      <Title>{name}</Title>

      <Description>
        Lorem ipsum dolor sit amet consectetur adipisicing elit
      </Description>
    </Container>
  );
};
