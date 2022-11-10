import type { ReactNode } from 'react';

interface LinkProps {
  icon?: ReactNode;
  onPress: () => void;
  title: string;
}

export interface Props {
  left?: LinkProps;
  right?: LinkProps;
  title?: string;
}
