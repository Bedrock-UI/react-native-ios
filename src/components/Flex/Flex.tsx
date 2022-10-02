import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import type { Props } from './Flex.types';

const styles = StyleSheet.create({
  flex: {
    display: 'flex',
    flex: 0,
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
});

function Flex({ direction = 'row', wrap = 'wrap', ...props }: Props) {
  return (
    <SafeAreaView
      {...props}
      style={{
        ...styles.flex,
        ...styles[direction],
        ...styles[wrap],
      }}
    />
  );
}

export default Flex;
