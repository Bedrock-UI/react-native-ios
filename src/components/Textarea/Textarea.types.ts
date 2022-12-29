import type { TextInputProps } from 'react-native';

export interface Props extends Omit<TextInputProps, 'multline'> {
  numberOfLines: number;
}
