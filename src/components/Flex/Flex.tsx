import React, { useMemo } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { theme } from 'theme';

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

  // margins
  m,
  mt,
  mb,
  ml,
  mr,
  mx,
  my,
  ...props
}: Props) {
  const marginStyles = useMemo(
    () => ({
      margin: theme.spacing(m),
      marginTop: theme.spacing(mt),
      marginBottom: theme.spacing(mb),
      marginLeft: theme.spacing(ml),
      marginRight: theme.spacing(mr),
      marginHorizontal: theme.spacing(mx),
      marginVertical: theme.spacing(my),
    }),
    [m, mt, mb, ml, mr, mx, my]
  );

  return (
    <SafeAreaView
      {...props}
      style={{
        ...marginStyles,
        ...styles.flex,
        ...styles[direction],
        ...styles[`justify-content-${justifyContent}`],
        ...styles[wrap],
      }}
    />
  );
}

export default Flex;
