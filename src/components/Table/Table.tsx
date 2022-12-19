import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { theme } from 'theme';
import { TableRow } from 'components/TableRow';

import type { Props } from './Table.types';

const styles = StyleSheet.create({
  root: {
    width: '100%',
  },
  header: {
    color: theme.palette.neutral[100],
    fontSize: theme.typography.caption.fontSize,
    lineHeight: theme.typography.caption.lineHeight,
    marginBottom: 8,
    marginHorizontal: 16,
    textTransform: 'uppercase',
  },
  table: {
    backgroundColor: theme.palette.background,
    borderRadius: 10,
    overflow: 'hidden',
  },
});

function Table({ header = '', rows = [] }: Props) {
  return (
    <View style={styles.root}>
      {header && <Text style={styles.header}>{header}</Text>}

      <View style={styles.table}>
        {rows.map((props, index) => (
          <TableRow {...props} last={index === rows.length - 1} key={index} />
        ))}
      </View>
    </View>
  );
}

export default Table;
