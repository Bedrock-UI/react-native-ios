import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { theme } from 'theme';
import { Flex } from '../Flex';
import { Text } from '../Text';

import type { Props } from './TopNavigation.types';

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    alignContent: 'center',
    borderBottomColor: theme.palette.neutral[400],
    borderBottomWidth: 0.5,
    height: 42,
  },
  buttonText: {
    color: theme.palette.primary.main,
    fontSize: 18,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
  },
});

function TopNavigation({ left, right, title = '' }: Props) {
  return (
    <Flex fullWidth justifyContent="space-between" style={styles.root}>
      <Flex style={{ flex: 1, justifyContent: 'flex-start' }}>
        <TouchableOpacity onPress={left?.onPress}>
          <Flex px={left?.icon ? 2 : 4}>
            {left?.icon && (
              <Flex direction="column" justifyContent="center">
                {left.icon}
              </Flex>
            )}

            <Flex direction="column" justifyContent="center">
              <Text color={theme.palette.primary.main} variant="body1">
                {left?.title || ''}
              </Text>
            </Flex>
          </Flex>
        </TouchableOpacity>
      </Flex>

      <Flex>
        <TouchableOpacity>
          <Text variant="body1">{title}</Text>
        </TouchableOpacity>
      </Flex>

      <Flex style={{ flex: 1, justifyContent: 'flex-end' }}>
        <TouchableOpacity onPress={right?.onPress}>
          <Flex px={right?.icon ? 2 : 4}>
            {right?.icon && (
              <Flex direction="column" justifyContent="center">
                {right.icon}
              </Flex>
            )}

            <Flex direction="column" justifyContent="center">
              <Text color={theme.palette.primary.main} variant="body1">
                {right?.title || ''}
              </Text>
            </Flex>
          </Flex>
        </TouchableOpacity>
      </Flex>
    </Flex>
  );
}

export default TopNavigation;
