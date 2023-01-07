import React, { useMemo } from 'react';
import { StyleSheet, Text as ReactNativeText } from 'react-native';
import { theme } from 'theme';

import type { Props } from './Text.types';

const styles = StyleSheet.create({
  base: {
    display: 'flex',
  },

  'align-left': {
    textAlign: 'left',
  },
  'align-center': {
    textAlign: 'center',
  },
  'align-right': {
    textAlign: 'center',
  },

  'weight-bold': {
    fontWeight: '700',
  },
  'weight-normal': {
    fontWeight: '500',
  },
  'weight-light': {
    fontWeight: '300',
  },

  body1: {
    fontSize: theme.typography.body1.fontSize,
    lineHeight: theme.typography.body1.lineHeight,
  },
  body2: {
    fontSize: theme.typography.body2.fontSize,
    lineHeight: theme.typography.body2.lineHeight,
  },
  caption: {
    fontSize: theme.typography.caption.fontSize,
    lineHeight: theme.typography.caption.lineHeight,
  },
});

function Text({
  align = 'left',
  color = theme.palette.label,
  variant,
  weight = 'normal',
  ...props
}: Props) {
  const alignStyle = useMemo(() => styles[`align-${align}`], [align]);
  const variantStyle = useMemo(() => styles[variant], [variant]);
  const weightStyle = useMemo(() => styles[`weight-${weight}`], [weight]);

  return (
    <ReactNativeText
      {...props}
      style={{
        color,
        ...styles.base,
        ...alignStyle,
        ...variantStyle,
        ...weightStyle,
      }}
    />
  );
}

export default Text;
