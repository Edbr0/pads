import styled from "styled-components/native";

export const TextContent = styled.Text`
  color: ${({ theme }) => theme.COLORS.TEXT_PRIMARY};
  font-size: 50px;
  font-weight: 700;
  text-align: center;
  margin: auto;
`;

export const Container = styled.TouchableOpacity.attrs({ activeOpacity: 0.8 })`
  width: 85%;
  height: 110px;
  margin: 10px 40px 10px 40px;
  background: ${({ theme }) => theme.COLORS.BACKGROUND};
  border: 3px solid;
  border-radius: 3px;
  border-color: ${({ theme }) => theme.COLORS.PRIMARY};
`;
