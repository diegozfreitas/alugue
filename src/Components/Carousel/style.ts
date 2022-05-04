import styled from "styled-components/native";
import { ScrollView } from "react-native-gesture-handler";

export const Container = styled.View`
  width: 100%;
  flex-direction: column;
`;

export const Title = styled.Text`
  padding: 0 15px;
  font-size: 22px;
  font-weight: 700;
  font-family: Nunito_400Regular;
  color: #333;
  margin: 0 0 20px 0;
`;

export const ContainerItems = styled(ScrollView).attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    paddingEnd: 20,
  },
})`
  padding: 0 15px;
`;
