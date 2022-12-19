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
    background: PlatformColor('systemBackground'),
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
    success: {
      50: '#e8f5e9',
      100: '#c8e6c9',
      200: '#a5d6a7',
      300: '#81c784',
      400: '#66bb6a',
      500: '#4caf50',
      600: '#43a047',
      700: '#388e3c',
      800: '#2e7d32',
      900: '#1b5e20',
    },
    warning: {
      50: '#fff8e1',
      100: '#ffecb3',
      200: '#ffe082',
      300: '#ffd54f',
      400: '#ffca28',
      500: '#ffc107',
      600: '#ffb300',
      700: '#ffa000',
      800: '#ff8f00',
      900: '#ff6f00',
    },
  },
  spacing: (value: number | string | undefined) => {
    if (value === undefined) {
      return undefined;
    }

    if (typeof value === 'string') {
      return value;
    }

    return value * 4;
  },
};

export default theme;
