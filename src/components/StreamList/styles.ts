import styled from 'styled-components/native';

export const List = styled.View`
  padding: 8px 0 24px;
`;

export const StreamContainer = styled.TouchableOpacity`
  flex-direction: row;
  flex: 1;
  margin-bottom: 24px;
  margin-right: 24px;
`;

export const StreamThumbnail = styled.Image`
  width: 119px;
  height: 66px;
`;

export const StreamColumn = styled.View`
  margin-left: 11px;
  flex: 1;
`;

export const StreamRow = styled.View`
  height: 66px;
  justify-content: space-between;
`;

export const StreamHeader = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const StreamDescription = styled.Text`
  color: ${props => props.theme.colors.black};
`;

export const StreamCategory = styled.Text`
  color: ${props => props.theme.colors.gray};
  font-family: roboto_500;
`;

export const StreamAvatar = styled.View`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background: ${props => props.theme.colors.tag};
`;

export const StreamUsername = styled.Text`
  color: ${props => props.theme.colors.black};
  margin-left: 5px;
  font-family: roboto_700;
  font-weight: 700;
`;

export const TagRow = styled.View`
  margin-top: 8px;
  flex-direction: row;
`;

export const TagView = styled.View`
  background: ${props => props.theme.colors.tag};
  padding: 2px 8px;
  border-radius: 10px;
  margin-right: 5px;
`;

export const TagText = styled.Text`
  color: ${props => props.theme.colors.tagText};
`;

