import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { theme } from 'theme';

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
    backgroundColor: theme.palette.white,
    borderRadius: 10,
  },
  row: {
    borderBottomColor: theme.palette.neutral[400],
    borderBottomWidth: 0.5,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: 48,
    marginLeft: 16,
    paddingRight: 16,
  },
  rowLast: {
    borderBottomWidth: 0,
  },
  rowTitle: {
    fontSize: theme.typography.body1.fontSize,
    lineHeight: theme.typography.body1.fontSize,
  },
});

function Table({ header = '', rows = [] }: Props) {
  return (
    <View style={styles.root}>
      {header && <Text style={styles.header}>{header}</Text>}

      <View style={styles.table}>
        {rows.map(({ title }, index) => (
          <View
            key={index}
            style={{
              ...styles.row,
              ...(index === rows.length - 1 ? styles.rowLast : {}),
            }}
          >
            <Text style={styles.rowTitle}>{title}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

export default Table;
