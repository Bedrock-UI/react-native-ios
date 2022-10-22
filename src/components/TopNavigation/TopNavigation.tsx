import React from 'react';
import { StyleSheet, SafeAreaView, Text, TouchableOpacity } from 'react-native';
import { theme } from 'theme';

import type { Props } from './TopNavigation.types';

const topNavigationStyles = StyleSheet.create({
  base: {
    borderBottomColor: theme.palette.neutral[400],
    borderBottomWidth: 0.5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 42,
    width: '100%',
  },
  button: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingHorizontal: 16,
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
    <SafeAreaView style={topNavigationStyles.base}>
      <TouchableOpacity style={topNavigationStyles.button}>
        <Text style={topNavigationStyles.buttonText}>{left?.title || ''}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
      >
        <Text style={topNavigationStyles.title}>{title}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={topNavigationStyles.button}>
        <Text style={{ ...topNavigationStyles.buttonText, textAlign: 'right' }}>
          {right?.title || ''}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default TopNavigation;
