import styled from 'styled-components/native'

export const Container = styled.TouchableOpacity`
  margin-right: 15px;
  border: 1px solid #dedede;
  border-radius: 10px;
  width: 200px;
  height: auto;
  padding-bottom: 10px;
  overflow: hidden;
`;

export const Image = styled.Image`
  width: 100%;
  height: 100px;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-family: Nunito_400Regular;
  font-weight: 700;
  color: #333;
  margin: 0 10px;
`;

export const Description = styled.Text`
  font-size: 14px;
  font-family: Nunito_400Regular;
  color: #333;
  margin: 0 10px;
`;