import React from 'react';
import { StyleSheet, TextInput as TextInputBase } from 'react-native';
import { theme } from 'theme';

import type { Props } from './TextInput.types';

const textInputStyles = StyleSheet.create({
  base: {},
});

function TextInput(props: Props) {
  return <TextInputBase {...props} />;
}

export default TextInput;
