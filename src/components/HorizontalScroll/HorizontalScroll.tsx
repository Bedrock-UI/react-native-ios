import { ScrollView, StyleSheet } from 'react-native';

import type { Props } from './HorizontalScroll.types';

const styles = StyleSheet.create({
  root: {
    width: '100%',
  },
});

function HorizontalScroll({ style, ...props }: Props) {
  return (
    <ScrollView
      {...props}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={[style, styles.root]}
    />
  );
}

export default HorizontalScroll;
