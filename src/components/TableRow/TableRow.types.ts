import type { TouchableOpacityProps } from 'react-native';

export interface Props {
  last?: boolean;
  onPress?: TouchableOpacityProps['onPress'];
  rightIcon?: boolean;
  subtitle?: string;
  title: string;
}
