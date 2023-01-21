import React, { useMemo } from 'react';
import { StyleSheet, TextInput as TextInputBase } from 'react-native';
import { theme } from 'theme';
import { Flex } from '../Flex';
import { Text } from '../Text';

import type { Props } from './TextInput.types';

const textInputStyles = StyleSheet.create({
  base: {
    backgroundColor: theme.palette.neutral[500],
    borderRadius: 8,
    color: theme.palette.label,
    height: 40,
    fontSize: theme.typography.input.fontSize,
    lineHeight: theme.typography.input.lineHeight,
    padding: 8,
    width: '100%',
  },
  error: {
    backgroundColor: theme.palette.error[50],
    borderWidth: 1,
    borderColor: theme.palette.error[600],
  },
});

function TextInput({ error, helperText = '', ...props }: Props) {
  const helperTextColor = useMemo(() => {
    if (error) {
      return theme.palette.error[600];
    }

    return theme.palette.secondaryLabel;
  }, [error]);

  return (
    <Flex direction="column" fullWidth>
      <TextInputBase
        {...props}
        placeholderTextColor={theme.palette.secondaryLabel}
        style={{
          ...textInputStyles.base,
          ...(error ? textInputStyles.error : {}),
        }}
      />

      {helperText && (
        <Text color={helperTextColor} variant="caption">
          {helperText}
        </Text>
      )}
    </Flex>
  );
}

export default TextInput;
