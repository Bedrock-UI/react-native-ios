import { Platform } from 'react-native';
import { androidTheme } from './android';
import { iosTheme } from './ios';

const theme = {
  ...(Platform.OS === 'android' ? androidTheme : {}),
  ...(Platform.OS === 'ios' ? iosTheme : {}),
};

export { theme };
