import React from 'react';


import { GoogleOAuthProvider } from '@react-oauth/google';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './routes';
import store from './store';


import { GlobalStyles } from './styles/global';
import { theme } from './styles/theme/default';


function App() {
  return (
    <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <BrowserRouter>
        <GoogleOAuthProvider clientId="618685727072-kguim5llp7jh1gj7qh6kgqmg8q2pi9uk.apps.googleusercontent.com">
          <Routes />
          </GoogleOAuthProvider>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
   
  );
}

export default App;
