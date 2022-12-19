import React, { useMemo } from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { theme } from 'theme';

import type { Props } from './Button.types';

const buttonStyles = StyleSheet.create({
  base: {
    alignSelf: 'flex-start',
    fontSize: theme.typography.body1.fontSize,
    lineHeight: theme.typography.body1.lineHeight,
  },

  // sizes
  small: {
    borderRadius: 24,
    height: 36,
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 6,
    paddingBottom: 6,
  },
  medium: {
    borderRadius: 12,
    height: 48,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 12,
    paddingBottom: 12,
  },
  large: {
    height: 56,
    borderRadius: 12,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
    paddingBottom: 16,
  },
  // variants
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
    fontSize: theme.typography.body1.fontSize,
    lineHeight: theme.typography.body1.lineHeight,
    textAlign: 'center',
    fontWeight: '500',
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
    color: theme.palette.background,
  },
  small: {
    fontSize: theme.typography.body2.fontSize,
    lineHeight: theme.typography.body2.lineHeight,
  },
  medium: {},
  large: {},
});

function Button({
  error = false,
  fullWidth = false,
  size = 'medium',
  title,
  variant = 'filled',
  ...props
}: Props) {
  const computedButtonStyles = useMemo(
    () => ({
      ...buttonStyles.base,
      ...buttonStyles[variant],
      ...buttonStyles[size],
      ...(error ? { ...buttonStyles.error } : {}),
      ...(fullWidth ? { ...buttonStyles.fullWidth } : {}),
    }),
    [error, fullWidth, size, variant]
  );

  const computedTextStyles = useMemo(
    () => ({
      ...textStyles.base,
      ...textStyles[size],
      ...textStyles[variant],
    }),
    [size, variant]
  );

  return (
    <TouchableOpacity {...props} style={computedButtonStyles}>
      <Text style={computedTextStyles}>{title}</Text>
    </TouchableOpacity>
  );
}

export default Button;
