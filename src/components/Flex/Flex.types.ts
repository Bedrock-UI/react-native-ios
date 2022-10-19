import type { ViewProps } from 'react-native';

export interface Props {
  children?: ViewProps['children'];
  direction?: 'column' | 'row';
  justifyContent?: 'center' | 'flex-start' | 'space-between';
  wrap?: 'nowrap' | 'wrap';

  // margins
  m?: number;
  mb?: number;
  mx?: number;
  ml?: number;
  mr?: number;
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

  // width
  width?: number | string;
}
