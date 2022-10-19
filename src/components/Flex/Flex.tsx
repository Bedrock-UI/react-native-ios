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
  // flex properties
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

  // padding
  p,
  pt,
  pb,
  pl,
  pr,
  px,
  py,

  // width
  width,
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

  const paddingStyles = useMemo(
    () => ({
      padding: theme.spacing(p),
      paddingTop: theme.spacing(pt),
      paddingBottom: theme.spacing(pb),
      paddingLeft: theme.spacing(pl),
      paddingRight: theme.spacing(pr),
      paddingHorizontal: theme.spacing(px),
      paddingVertical: theme.spacing(py),
    }),
    [p, pt, pb, pl, pr, px, py]
  );

  return (
    <SafeAreaView
      {...props}
      style={{
        ...styles.flex,
        ...styles[direction],
        ...styles[`justify-content-${justifyContent}`],
        ...styles[wrap],
        ...marginStyles,
        ...paddingStyles,
        width,
      }}
    />
  );
}

export default Flex;
