import React, { useMemo } from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { theme } from 'theme';

import type { Props } from './Button.types';

const buttonStyles = StyleSheet.create({
  base: {
    alignSelf: 'flex-start',
    borderRadius: 4,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
  },
  plain: {},
  gray: {
    backgroundColor: theme.palette.neutral[500],
  },
  tinted: {
    backgroundColor: theme.palette.primary.light,
  },
  filled: {
    backgroundColor: theme.palette.primary.main,
  },
  error: {
    backgroundColor: theme.palette.error,
  },
  fullWidth: {
    width: '100%',
  },
});

const textStyles = StyleSheet.create({
  base: {
    fontSize: 18,
    lineHeight: 24,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  plain: {
    color: theme.palette.primary.main,
  },
  gray: {
    color: theme.palette.primary.main,
  },
  tinted: {
    color: theme.palette.primary.main,
  },
  filled: {
    color: theme.palette.white,
  },
});

function Button({ error = false, fullWidth = false, title, variant = 'filled', ...props }: Props) {
  const variantButtonStyles = useMemo(() => buttonStyles[variant], [variant]);
  const variantTextStyles = useMemo(() => textStyles[variant], [variant]);

  return (
    <TouchableOpacity
      {...props}
      style={{
        ...variantButtonStyles,
        ...(error ? { ...buttonStyles.error } : {}),
        ...(fullWidth ? { ...buttonStyles.fullWidth } : {}),
        ...buttonStyles.base,
      }}
    >
      <Text style={{ ...variantTextStyles, ...textStyles.base }}>{title}</Text>
    </TouchableOpacity>
  );
}

export default Button;
