import type { ViewProps } from 'react-native';

export interface Props {
  children?: ViewProps['children'];
  direction?: 'column' | 'row';
  wrap?: 'nowrap' | 'wrap';
}
