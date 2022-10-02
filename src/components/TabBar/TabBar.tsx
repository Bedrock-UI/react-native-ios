import React, { useMemo } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { Flex } from 'components/Flex';
import { theme } from 'theme';

import type { Props, TabProps } from './TabBar.types';

const tabBarStyles = StyleSheet.create({
  base: {
    display: 'flex',
    flex: 0,
    flexDirection: 'row',
  },
});

const tabStyles = StyleSheet.create({
  base: {},
});

function TabBar({ children }: Props) {
  return <SafeAreaView style={tabBarStyles.base}>{children}</SafeAreaView>;
}

function Tab(props: TabProps) {
  return null;
}

TabBar.Tab = Tab;

export default TabBar;
