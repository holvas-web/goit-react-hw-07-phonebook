import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { GlobalStyles } from './components/GlobalStyle';
import { App } from 'components/App';
import { store } from 'redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <GlobalStyles />
    </Provider>
  </React.StrictMode>
);
