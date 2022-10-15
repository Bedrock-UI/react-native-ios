import React from 'react';
import { StyleSheet, TextInput as TextInputBase } from 'react-native';
import { theme } from 'theme';

import type { Props } from './TextInput.types';

const textInputStyles = StyleSheet.create({
  base: {
    backgroundColor: theme.palette.neutral[500],
    borderRadius: 8,
    color: theme.palette.neutral[100],
    height: 36,
    fontSize: theme.typography.input.fontSize,
    lineHeight: theme.typography.input.lineHeight,
    padding: 8,
    width: '100%',
  },
});

function TextInput(props: Props) {
  return <TextInputBase {...props} style={textInputStyles.base} />;
}

export default TextInput;
