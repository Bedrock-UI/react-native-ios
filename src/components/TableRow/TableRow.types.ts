import type { ReactNode } from 'react';
import type { TouchableOpacityProps } from 'react-native';

interface BaseProps {
  last?: boolean;
  left?: ReactNode;
  onPress?: TouchableOpacityProps['onPress'];
  subtitle?: string;
  title: string;
}

interface RightIconProps extends BaseProps {
  rightIcon?: boolean;
  rightText?: never;
}

interface RightTextProps extends BaseProps {
  rightIcon?: never;
  rightText?: string;
}

export type Props = RightIconProps | RightTextProps;
