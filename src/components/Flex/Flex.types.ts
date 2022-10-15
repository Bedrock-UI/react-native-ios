import type { ViewProps } from 'react-native';

export interface Props {
  children?: ViewProps['children'];
  direction?: 'column' | 'row';
  justifyContent?: 'center' | 'flex-start' | 'space-between';
  wrap?: 'nowrap' | 'wrap';
}
