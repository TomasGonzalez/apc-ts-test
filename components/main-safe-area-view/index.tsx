import { Platform, StatusBar } from 'react-native';
import styled from '../../styled-components';

const MainSafeAreaView = styled.SafeAreaView`
  display: flex;
  flex: 1;
  padding-top: ${Platform.OS === 'android' ? StatusBar.currentHeight : 0};
`;

export default MainSafeAreaView;
