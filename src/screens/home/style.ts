import styled from "styled-components/native";
import { ScrollView } from "react-native-gesture-handler";

export const Container = styled(ScrollView).attrs({
  showsVerticalScrollIndicator: false,
})`
  background-color: #fff;
`;
