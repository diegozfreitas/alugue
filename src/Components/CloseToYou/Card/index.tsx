import React from "react";
import { Alert, View } from "react-native";

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
  const { image, description, name } = data;
  return (
    <Container onPress={() => Alert.alert("Oi", "Você clicou no item " + name)}>
      <View>
        <Image
          source={{
            uri: image,
          }}
        />
      </View>

      <View>
        <Title>{name}</Title>
        <Description>{description}</Description>
      </View>
    </Container>
  );
};
