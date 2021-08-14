import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import theme from './theme';
import "./index.css"
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react"

ReactDOM.render(
<React.StrictMode>
  <ChakraProvider>
     <ColorModeScript initialColorMode={theme.config.initialColorMode} />
     <App />
 </ChakraProvider>
</React.StrictMode>, document.getElementById('root'));

