import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { theme } from 'theme';

import type { Props } from './Textarea.types';

const textAreaStyles = StyleSheet.create({
  base: {
    backgroundColor: theme.palette.neutral[500],
    borderRadius: 8,
    color: theme.palette.label,
    fontSize: theme.typography.textarea.fontSize,
    lineHeight: theme.typography.textarea.lineHeight,
    padding: 8,
    textAlignVertical: 'top',
    width: '100%',
  },
});

const MIN_HEIGHT = 40;

function Textarea({ numberOfLines, style, ...props }: Props) {
  return (
    <TextInput
      {...props}
      multiline
      numberOfLines={numberOfLines}
      placeholderTextColor={theme.palette.secondaryLabel}
      style={[
        style,
        textAreaStyles.base,
        {
          height: MIN_HEIGHT + (numberOfLines - 1) * theme.typography.textarea.lineHeight,
        },
      ]}
    />
  );
}

export default Textarea;
