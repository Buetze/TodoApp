import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './TodoApp';
import { BrowserRouter as Router } from 'react-router-dom';


import store from './store/StoreModel';
import { StoreProvider } from 'easy-peasy';

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <Router >
        <TodoApp />
      </Router >
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
);