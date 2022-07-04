import styled from 'styled-components';
import { ThemeProps } from 'styled-components/native';

const SectionView = styled.View`
  background-color: ${(props: ThemeProps) => props.theme.colors.primary};
  border-radius: ${(props: ThemeProps) => props.theme.borderRadius};
  padding: ${(props: ThemeProps) => props.theme.defaultPadding};
  width: 100%;
`;

export default SectionView;
