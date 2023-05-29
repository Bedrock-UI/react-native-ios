import { Platform } from 'react-native';
import { androidTheme } from './android';
import { iosTheme } from './ios';

function getTheme() {
  if (Platform.OS === 'android') {
    return androidTheme;
  }

  return iosTheme;
}

const theme = getTheme();

export { theme };
