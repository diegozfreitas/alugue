import styled from 'styled-components/native'
import { ScrollView } from 'react-native-gesture-handler'

export const Container = styled.View`
  
`;

export const Title = styled.Text`
  padding: 0 15px;
  font-size: 22px;
  font-weight: 700;
  font-family: Nunito;
  color: #333;
  margin: 20px 0 20px;
`;

export const ContainerItems = styled(ScrollView)`
  padding: 0 15px;
`;