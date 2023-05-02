import React from 'react';
import { Switch as SwitchBase } from 'react-native';

import type { Props } from './Switch.types';

function Switch(props: Props) {
  return <SwitchBase {...props} />;
}

export default Switch;
