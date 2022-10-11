import { PlatformColor } from 'react-native';

const theme = {
  typography: {
    title1: {
      fontSize: 34,
      lineHeight: 40,
    },
    title2: {
      fontSize: 28,
      lineHeight: 34,
    },
    title3: {
      fontSize: 24,
      lineHeight: 28,
    },
    title4: {
      fontSize: 20,
      lineHeight: 24,
    },
    body1: {
      fontSize: 18,
      lineHeight: 24,
    },
    body2: {
      fontSize: 16,
      lineHeight: 24,
    },
    caption: {
      fontSize: 14,
      lineHeight: 20,
    },
    input: {
      fontSize: 18,
      lineHeight: 20,
    },
  },
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
