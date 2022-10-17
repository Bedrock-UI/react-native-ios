import type { ViewProps } from 'react-native';

export interface Props {
  children?: ViewProps['children'];
  direction?: 'column' | 'row';
  justifyContent?: 'center' | 'flex-start' | 'space-between';
  wrap?: 'nowrap' | 'wrap';

  m?: number;
  mb?: number;
  mx?: number;
  ml?: number;
  mr?: number;
  mt?: number;
  my?: number;
}
