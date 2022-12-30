import type { TouchableOpacityProps } from 'react-native';

interface BaseProps {
  last?: boolean;
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
