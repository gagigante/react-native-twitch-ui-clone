import styled from 'styled-components/native';
import { Platform } from 'react-native';
import Constants from 'expo-constants';

const statusBarHeight = Platform.OS === 'android' ? Constants.statusBarHeight : 0;

export const Wrapper = styled.SafeAreaView`
  background: ${props => props.theme.colors.primary};
  flex: 1;
  padding-top: ${statusBarHeight}px;
  justify-content: center;
  align-items: center;
`;

export const Heading = styled.Text`
  color: ${props => props.theme.colors.purple};
  font-family: roboto_500;
  font-size: 30px;
`;
