import Ionicons from '@expo/vector-icons/Ionicons';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { theme } from 'theme';
import { Flex } from 'components/Flex';

import type { Props } from './TableRow.types';

const styles = StyleSheet.create({
  root: {
    borderBottomColor: theme.palette.neutral[400],
    borderBottomWidth: 0.5,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: 48,
    paddingHorizontal: 16,
    width: '100%',
  },
  active: {
    backgroundColor: theme.palette.neutral[500],
  },
  last: {
    borderBottomWidth: 0,
  },
  rightIcon: {
    color: theme.palette.neutral[300],
  },
  title: {
    fontSize: theme.typography.body1.fontSize,
    lineHeight: theme.typography.body1.lineHeight,
  },
});

function TableRow({ last = false, onPress, rightIcon, title }: Props) {
  const [active, setActive] = useState<boolean>(false);

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={onPress}
      onPressIn={() => setActive(true)}
      onPressOut={() => setActive(false)}
      style={{
        ...styles.root,
        ...(active ? styles.active : {}),
        ...(last ? styles.last : {}),
      }}
    >
      <Flex justifyContent="space-between">
        <Flex direction="column" justifyContent="center">
          <Text style={styles.title}>{title}</Text>
        </Flex>

        {rightIcon && (
          <Flex direction="column" justifyContent="center">
            <Ionicons name="chevron-forward" style={styles.rightIcon} size={18} />
          </Flex>
        )}
      </Flex>
    </TouchableOpacity>
  );
}

export default TableRow;
