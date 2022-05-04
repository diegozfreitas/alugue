import React from "react";
import { View, FlatList } from "react-native";

import { Container, Title } from "./style";
import { Card, DataCardProps } from "./Card";


interface TipDayDataProps {
  data: DataCardProps[];
}

export const TipDay = ({ data }: TipDayDataProps) => {

  return (
    <Container>
      <View>
        <Title>Dicas</Title>
      </View>

      <FlatList
        data={data}
        keyExtractor={(item: DataCardProps) => item.id}
        renderItem={({ item }: { item: DataCardProps }) => <Card data={item} />}
        horizontal
        contentContainerStyle={{
          paddingStart: 16,
        }}
      />
    </Container>
  );
};
