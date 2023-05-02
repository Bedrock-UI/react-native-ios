import Ionicons from '@expo/vector-icons/Ionicons';
import React, { useMemo, useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { theme } from 'theme';
import { Flex } from 'components/Flex';
import { Text } from 'components/Text';

import type { Props } from './TableRow.types';

const styles = StyleSheet.create({
  root: {
    borderBottomColor: theme.palette.neutral[400],
    borderBottomWidth: 0.5,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingVertical: 4,
    paddingHorizontal: 16,
    width: '100%',
  },
  rootWithSubtitle: {
    paddingVertical: 0,
  },
  textAndRightContainer: {
    flexGrow: 1,
  },
  textContainer: {
    paddingVertical: 8,
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
});

function TableRow({
  disablePress,
  last = false,
  left,
  onPress,
  rightIcon,
  rightText,
  subtitle,
  title,
}: Props) {
  const [active, setActive] = useState<boolean>(false);

  const rootStyles = useMemo(
    () => ({
      ...styles.root,
      ...(subtitle ? styles.rootWithSubtitle : {}),
      ...(active && !disablePress ? styles.active : {}),
      ...(last ? styles.last : {}),
    }),
    [active, disablePress, last, subtitle]
  );

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={onPress}
      onPressIn={() => setActive(true)}
      onPressOut={() => setActive(false)}
      style={rootStyles}
    >
      <Flex>
        {left && (
          <Flex direction="column" justifyContent="center" mr={2}>
            {left}
          </Flex>
        )}

        <Flex justifyContent="space-between" style={styles.textAndRightContainer}>
          <Flex direction="column" justifyContent="center" style={styles.textContainer}>
            <Text variant="body1">{title}</Text>

            {subtitle && (
              <Text color={theme.palette.secondaryLabel} variant="caption">
                {subtitle}
              </Text>
            )}
          </Flex>

          {rightIcon && (
            <Flex direction="column" justifyContent="center">
              <Ionicons name="chevron-forward" style={styles.rightIcon} size={18} />
            </Flex>
          )}

          {rightText && (
            <Flex direction="column" justifyContent="center">
              <Text color={theme.palette.secondaryLabel} variant="body1">
                {rightText}
              </Text>
            </Flex>
          )}
        </Flex>
      </Flex>
    </TouchableOpacity>
  );
}

export default TableRow;
