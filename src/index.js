import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

import { App } from 'components/App';
import COLORS from 'constants/colors';
import './index.css';
import '@fontsource/manrope/400.css';
import '@fontsource/manrope/500.css';
import '@fontsource/manrope/600.css';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        fontFamily: 'Manrope',
      },
    },
  },

  textStyles: {
    name: {
      fontSize: ['18px', '16px'],
      fontWeight: 500,
      lineHeight: '24px',
    },
    note: {
      color: '#12141780',
      fontSize: '12px',
      fontWeight: 400,
      lineHeight: '18px',
    },

    h2: {
      fontSize: ['36px', '48px'],
      fontWeight: 'semibold',
      lineHeight: '110%',
      letterSpacing: '-1%',
    },
  },

  layerStyles: {
    accented: {
      color: `${COLORS.blue}`,
    },

    selected: {
      bg: 'teal.500',
      color: 'teal.700',
      border: '2px solid',
      borderColor: 'orange.500',
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <BrowserRouter basename="test-fin">
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);
