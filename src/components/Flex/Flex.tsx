import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import type { Props } from './Flex.types';

const styles = StyleSheet.create({
  flex: {
    display: 'flex',
    flex: 0,
  },
  column: {
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
  },
});

function Flex({ direction = 'row', ...props }: Props) {
  return (
    <SafeAreaView
      {...props}
      style={{
        ...styles.flex,
        ...styles[direction],
      }}
    />
  );
}

export default Flex;
