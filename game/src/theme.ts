// theme.ts

// 1. import `extendTheme` function
import { extendTheme } from '@chakra-ui/react';

// 2. Add your color mode config
const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

// 3. extend the theme
const theme = extendTheme({
  config,
  colors: {
    gray: {
      50: '#ebf4fa',
      100: '#d1dae1',
      200: '#b4c1cb',
      300: '#97a7b5',
      400: '#798ea0',
      500: '#5f7486',
      600: '#4a5b69',
      700: '#34414c',
      800: '#1e272f',
      900: '#050e15',
    },
  },
});

export default theme;
