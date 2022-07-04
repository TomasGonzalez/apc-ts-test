import styled from 'styled-components';

import { ThemeProps } from 'styled-components/native';

const MainView = styled.View`
  display: flex;
  flex: 1;
  background-color: ${(props: ThemeProps) => props.theme.colors?.background};
  padding: ${(props: ThemeProps) => props.theme.defaultPadding};
`;

export default MainView;
