import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { theme } from 'theme';
import { Flex } from '../Flex';
import { Text } from '../Text';

import type { Props } from './TopNavigation.types';

const topNavigationStyles = StyleSheet.create({
  base: {
    borderBottomColor: theme.palette.neutral[400],
    borderBottomWidth: 0.5,
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
    <Flex justifyContent="space-between" height={42} width="100%" style={topNavigationStyles.base}>
      <Flex direction="column" justifyContent="center">
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

      <Flex direction="column" justifyContent="center">
        <TouchableOpacity>
          <Text variant="body1">{title}</Text>
        </TouchableOpacity>
      </Flex>

      <Flex direction="column" justifyContent="center">
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
