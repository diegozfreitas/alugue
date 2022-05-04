import styled from 'styled-components/native';
import { TextInput } from 'react-native-gesture-handler'

export const Container = styled.View`
  padding: 0px 15px;
  padding-right: 15px;
  flex-direction: row;
  align-items: center;
  width: 100%;
  margin: 20px 0px;
`;

export const ContentInput = styled.View`
  width: 98%;
  flex-direction: row;
  text-align: center;
  color: #333;
  padding: 8px 10px;
  border: 1px solid #d2d2d2;
  border-radius: 10px;
`;

export const InputSearch = styled(TextInput)`
  margin-left: 10px;
`;

