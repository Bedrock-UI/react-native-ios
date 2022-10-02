import type { TouchableOpacityProps } from 'react-native';

export interface Props extends TouchableOpacityProps {
  error?: boolean;
  fullWidth?: boolean;
  size?: 'small' | 'medium' | 'large';
  title: JSX.Element | string;
  variant?: 'filled' | 'gray' | 'plain' | 'tinted';
}
