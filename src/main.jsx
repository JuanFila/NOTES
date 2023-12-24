import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from "styled-components"
import GlobalStyles from './styles/global';
import theme from "./styles/theme";
import {Home} from "./pages/Home/index"
import { Signin } from './pages/Signin/index';
import { Details } from './pages/Details/index';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Signin />
    </ThemeProvider>
  </React.StrictMode>,
)
