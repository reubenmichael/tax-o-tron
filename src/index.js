import React from 'react';
import ReactDOM from 'react-dom';
import { CssBaseline } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/styles'
import App from './App';
import theme from './theme/theme'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <App />
      </CssBaseline>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
