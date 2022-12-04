import React, { useMemo } from 'react';
import { StyleSheet, Text } from 'react-native';
import { theme } from 'theme';

import type { Props } from './Heading.types';

const styles = StyleSheet.create({
  base: {
    color: theme.palette.label,
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
    fontWeight: '200',
  },

  'level-display1': {
    fontSize: theme.typography.display1.fontSize,
    lineHeight: theme.typography.display1.lineHeight,
  },
  'level-1': {
    fontSize: theme.typography.h1.fontSize,
    lineHeight: theme.typography.h1.lineHeight,
  },
  'level-2': {
    fontSize: theme.typography.h2.fontSize,
    lineHeight: theme.typography.h2.lineHeight,
  },
  'level-3': {
    fontSize: theme.typography.h3.fontSize,
    lineHeight: theme.typography.h3.lineHeight,
  },
  'level-4': {
    fontSize: theme.typography.h4.fontSize,
    lineHeight: theme.typography.h4.lineHeight,
  },
  'level-5': {
    fontSize: theme.typography.h5.fontSize,
    lineHeight: theme.typography.h5.lineHeight,
  },
  'level-6': {
    fontSize: theme.typography.h6.fontSize,
    lineHeight: theme.typography.h6.lineHeight,
  },
});

function Heading({ align = 'left', level, weight = 'normal', ...props }: Props) {
  const alignStyle = useMemo(() => styles[`align-${align}`], [align]);
  const levelStyle = useMemo(() => styles[`level-${level}`], [level]);
  const weightStyle = useMemo(() => styles[`weight-${weight}`], [weight]);

  return (
    <Text
      {...props}
      style={{
        ...styles.base,
        ...alignStyle,
        ...levelStyle,
        ...weightStyle,
      }}
    />
  );
}

export default Heading;
