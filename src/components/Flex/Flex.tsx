import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import type { Props } from './Flex.types';

const styles = StyleSheet.create({
  flex: {
    display: 'flex',
  },

  // flex direction
  column: {
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
  },

  // flex wrap
  nowrap: {
    flexWrap: 'nowrap',
  },
  wrap: {
    flexWrap: 'wrap',
  },

  // justify content
  'justify-content-center': {
    justifyContent: 'center',
  },
  'justify-content-flex-start': {
    justifyContent: 'flex-start',
  },
  'justify-content-space-between': {
    justifyContent: 'space-between',
  },
});

function Flex({
  direction = 'row',
  justifyContent = 'flex-start',
  wrap = 'wrap',
  ...props
}: Props) {
  return (
    <SafeAreaView
      {...props}
      style={{
        ...styles.flex,
        ...styles[direction],
        ...styles[`justify-content-${justifyContent}`],
        ...styles[wrap],
      }}
    />
  );
}

export default Flex;
