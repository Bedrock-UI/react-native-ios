import React from 'react';
import { StyleSheet, Switch as SwitchBase } from 'react-native';
import { theme } from 'theme';

import type { Props } from './Switch.types';

const switchStyles = StyleSheet.create({
  base: {},
});

function Switch(props: Props) {
  return <SwitchBase {...props} />;
}

export default Switch;
