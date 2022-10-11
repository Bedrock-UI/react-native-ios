import type { ReactNode } from 'react';
import type { TouchableOpacityProps } from 'react-native';

export interface TableRow {
  onPress?: TouchableOpacityProps['onPress'];
  rightIcon?: ReactNode;
  subtitle?: string;
  title: string;
}

export interface Props {
  header?: string;
  rows: TableRow[];
}
