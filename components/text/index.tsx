import styled from 'styled-components';
import { ThemeProps } from 'styled-components/native';

const Text = styled.Text`
  color: ${(props: ThemeProps) => props.theme.colors.contrast};
`;

export default Text;
