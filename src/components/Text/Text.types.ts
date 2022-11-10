import type { ColorValue, TextProps } from 'react-native';

export interface Props {
  color?: ColorValue;
  align?: 'left' | 'center' | 'right';
  children?: TextProps['children'];
  variant: 'body1' | 'body2' | 'caption';
  weight?: 'light' | 'normal' | 'bold';
}
