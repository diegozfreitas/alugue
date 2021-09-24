import styled from 'styled-components/native'

export const Container = styled.TouchableOpacity`
  margin-right: 15px;
  border: 1px solid #dedede;
  border-radius: 10px;
  width: 200px;
  height: 200px;
  overflow: hidden;
  flex-direction: row;
  margin-bottom: 20px;

  position: relative;
`;

export const Image = styled.Image`
  width: 200px;
  height: 200px;
  
`;

export const Title = styled.Text`
  font-size: 18px;
  font-family: Nunito;
  font-weight: 700;
  color: #fff;
  position: absolute;
  top: 10px;
  left: 10px;
  text-shadow: 1px 1px 2px rgba(150, 150, 150, 1);
  text-transform: capitalize;
`;
