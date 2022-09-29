import { PlatformColor } from 'react-native';

const theme = {
  palette: {
    background: PlatformColor('systemGray6'),
    error: PlatformColor('systemRed'),
    label: PlatformColor('label'),
    neutral: {
      100: PlatformColor('systemGray'),
      200: PlatformColor('systemGray2'),
      300: PlatformColor('systemGray3'),
      400: PlatformColor('systemGray4'),
      500: PlatformColor('systemGray5'),
      600: PlatformColor('systemGray6'),
    },
    primary: {
      light: '#E0ECFE',
      main: PlatformColor('systemBlue'),
    },
    white: '#FFFFFF',
  },
};

export default theme;
