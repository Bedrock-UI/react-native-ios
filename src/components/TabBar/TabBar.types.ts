import type { TouchableOpacityProps, ViewProps } from 'react-native';

export interface Props {
  children: ViewProps['children'];
}

export interface TabProps {
  icon: ViewProps['children'];
  label?: string;
  onPress: TouchableOpacityProps['onPress'];
}
