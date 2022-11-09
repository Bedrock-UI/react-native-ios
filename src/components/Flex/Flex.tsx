import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useSpacing } from 'hooks/useSpacing';

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
  'justify-content-flex-end': {
    justifyContent: 'flex-end',
  },
  'justify-content-flex-start': {
    justifyContent: 'flex-start',
  },
  'justify-content-space-between': {
    justifyContent: 'space-between',
  },
});

function Flex({
  // flex properties
  direction = 'row',
  justifyContent = 'flex-start',
  wrap = 'wrap',

  // style
  style,

  // sizing
  height,
  width,
  ...props
}: Props) {
  const spacingStyles = useSpacing(props);

  return (
    <View
      {...props}
      style={[
        {
          ...styles.flex,
          ...styles[direction],
          ...styles[`justify-content-${justifyContent}`],
          ...styles[wrap],
          ...spacingStyles,
          height,
          width,
        },
        style,
      ]}
    />
  );
}

export default Flex;
