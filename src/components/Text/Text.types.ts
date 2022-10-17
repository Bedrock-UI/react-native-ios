import type { TextProps } from 'react-native';

export interface Props {
  align?: 'left' | 'center' | 'right';
  children?: TextProps['children'];
  variant: 'body1' | 'body2' | 'caption';
  weight?: 'light' | 'normal' | 'bold';
}
