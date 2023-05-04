import type { ViewProps } from 'react-native';

export interface Props extends ViewProps {
  children?: ViewProps['children'];
  direction?: 'column' | 'row';
  fullWidth?: boolean;
  justifyContent?: 'center' | 'flex-end' | 'flex-start' | 'space-between';
  style?: ViewProps['style'];
  wrap?: 'nowrap' | 'wrap';

  // margins
  m?: number;
  mb?: number;
  mx?: number;
  ml?: number | 'auto';
  mr?: number | 'auto';
  mt?: number;
  my?: number;

  // padding
  p?: number;
  pb?: number;
  px?: number;
  pl?: number;
  pr?: number;
  pt?: number;
  py?: number;

  // gaps
  columnGap?: number;
  rowGap?: number;
  gap?: number;

  // sizing
  height?: number | string;
  width?: number | string;
}
