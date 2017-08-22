import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import './styles/index.css';

import { GC_AUTH_TOKEN } from './constants';
// 1
import { ApolloProvider, createNetworkInterface, ApolloClient } from 'react-apollo';

// 2
const networkInterface = createNetworkInterface({
  uri: 'https://api.graph.cool/simple/v1/cj6bbskjm0dsm0101tbgl0ot3'
})

// Middleware to fill in token info with the request headers if 
// the token is available in the current session.
networkInterface.use([
  {
    applyMiddleware(req, next) {
      if (!req.options.headers) {
        req.options.headers = {};
      }

      const token = localStorage.getItem(GC_AUTH_TOKEN);
      req.options.headers.authorization = token ? `Bearer ${token}` : null;
      next();
    }
  }
]);

// 3
const client = new ApolloClient({
  networkInterface
})

// 4
ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </BrowserRouter>
  , document.getElementById('root')
)
registerServiceWorker()