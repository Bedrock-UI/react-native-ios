import { PlatformColor } from 'react-native';

const theme = {
  typography: {
    display1: {
      fontSize: 100,
      lineHeight: 104,
    },
    h1: {
      fontSize: 36,
      lineHeight: 40,
    },
    h2: {
      fontSize: 32,
      lineHeight: 36,
    },
    h3: {
      fontSize: 28,
      lineHeight: 32,
    },
    h4: {
      fontSize: 24,
      lineHeight: 28,
    },
    h5: {
      fontSize: 20,
      lineHeight: 24,
    },
    h6: {
      fontSize: 16,
      lineHeight: 20,
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
