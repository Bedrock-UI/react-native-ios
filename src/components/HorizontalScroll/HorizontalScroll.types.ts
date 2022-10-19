import type { ScrollViewProps } from 'react-native';

export interface Props
  extends Omit<ScrollViewProps, 'horizontal' | 'showsHorizontalScrollIndicator'> {}
