import { StyleSheet, TouchableOpacity } from 'react-native';
import { Flex } from 'components/Flex';
import { Text } from 'components/Text';
import { theme } from 'theme';

import type { Props } from './SegmentedControl.types';

const styles = StyleSheet.create({
  control: {
    display: 'flex',
    flexGrow: 1,
    backgroundColor: theme.palette.background,
    borderColor: theme.palette.primary.main,
    borderWidth: 1,
    borderLeftWidth: 0.5,
    borderRightWidth: 0.5,
    paddingVertical: theme.spacing(1),
  },
  controlFirst: {
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    borderLeftWidth: 1,
  },
  controlLast: {
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    borderRightWidth: 1,
  },
  controlActive: {
    backgroundColor: theme.palette.primary.main,
  },
});

function SegmentedControl({ controls, onChange, selectedIndex }: Props) {
  return (
    <Flex fullWidth>
      {controls.map(({ title }, index) => (
        <Flex key={index} style={{ width: `${100 / controls.length}%` }}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => onChange(index)}
            style={{
              ...styles.control,
              ...(index === 0 ? styles.controlFirst : {}),
              ...(index === controls.length - 1 ? styles.controlLast : {}),
              ...(selectedIndex === index ? styles.controlActive : {}),
            }}
          >
            <Text
              color={
                selectedIndex === index ? theme.palette.background : theme.palette.primary.main
              }
              align="center"
              variant="body1"
            >
              {title}
            </Text>
          </TouchableOpacity>
        </Flex>
      ))}
    </Flex>
  );
}

export default SegmentedControl;
