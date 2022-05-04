import React from "react";
import { Alert } from "react-native";

import { Container, Image, Title } from "./style";

export interface DataCardProps {
  id: string;
  image: string;
  description: string;
  name: string;
}

export interface CardProps {
  data: DataCardProps;
}

export const Card = ({ data }: CardProps) => {
  const { image, name } = data;

  return (
    <Container
      onPress={() => Alert.alert("Oi", "Você clicou na imagem " + name)}
    >
      <Image
        source={{
          uri: image,
        }}
      />

      <Title>{name}</Title>
    </Container>
  );
};
