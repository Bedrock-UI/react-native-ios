import type { TextInputProps } from 'react-native';

export interface Props extends TextInputProps {
  error?: boolean;
  helperText?: string;
}
