import React from 'react';
import ReactDOM from 'react-dom';

import GlobalStyle from './global-style';
import AppContainer from './App/AppContainer';

ReactDOM.render(
  <React.Fragment>
    <GlobalStyle />
    <AppContainer />
  </React.Fragment>,
  document.getElementById('root'),
);
