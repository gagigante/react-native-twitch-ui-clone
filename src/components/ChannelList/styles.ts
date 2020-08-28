import styled from 'styled-components/native';

export const List = styled.View`
  padding: 8px 0 0;
`;

export const ChannelContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-right: 14px;
  margin-bottom: 25px;
`;

export const LeftSide = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.View`
  background: ${props => props.theme.colors.tag};
  width: 48px;
  height: 48px;
  border-radius: 24px;
`;

export const Column = styled.View`
  padding-left: 16px;
`;

export const Username = styled.Text`
  color: ${props => props.theme.colors.black};
  font-family: roboto_500;
  font-size: 16px;
`;

export const Info = styled.Text`
  margin-top: 1px;
  color: ${props => props.theme.colors.gray};
  font-size: 13px;
`;

export const RightSide = styled.View``;

export const WhiteCircle = styled.View`
  background: ${props => props.theme.colors.black};
  width: 9px;
  height: 9px;
  border-radius: 4.5px;
`;

