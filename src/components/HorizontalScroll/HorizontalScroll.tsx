import { ScrollView } from 'react-native';

import type { Props } from './HorizontalScroll.types';

function HorizontalScroll(props: Props) {
  return <ScrollView {...props} horizontal={true} showsHorizontalScrollIndicator={false} />;
}

export default HorizontalScroll;
