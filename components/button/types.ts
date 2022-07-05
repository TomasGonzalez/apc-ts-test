import { ThemeProps } from 'styled-components/native';
import { PressableProps } from 'react-native';

interface CustomTypes {
  title?: string;
}

export type StyledButton = PressableProps & Partial<ThemeProps> & CustomTypes;
