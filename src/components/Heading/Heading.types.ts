import type { TextProps } from 'react-native';

export interface Props {
  align?: 'left' | 'center' | 'right';
  children?: TextProps['children'];
  variant: 'display1' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  weight?: 'light' | 'normal' | 'bold';
}
