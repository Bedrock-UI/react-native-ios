import Constants from 'expo-constants';

const DEVELOPMENT_BASE_URL = `http://${Constants.manifest?.debuggerHost?.split(':').shift()}:3000`;

const DEVELOPMENT = {
  NEXT_PUBLIC_BACKEND_URL: `${DEVELOPMENT_BASE_URL}/api`,
};

const PRODUCTION = {
  NEXT_PUBLIC_BACKEND_URL: 'https://climb-tracker.com/api',
};

if (process.env.NODE_ENV === 'development') {
  process.env = {
    ...process.env,
    ...DEVELOPMENT,
  };
} else {
  process.env = {
    ...process.env,
    ...PRODUCTION,
  };
}
