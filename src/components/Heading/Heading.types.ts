import type { ColorValue, TextProps } from 'react-native';

export interface Props {
  align?: 'left' | 'center' | 'right';
  children?: TextProps['children'];
  color?: ColorValue;
  level: 'display1' | 1 | 2 | 3 | 4 | 5 | 6;
  weight?: 'light' | 'normal' | 'bold';
}
