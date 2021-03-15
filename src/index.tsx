import { createServer } from 'miragejs';
import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './App';

createServer({
  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: 'Desenvolvimento de Site',
          type: 'income',
          amount: 12000,
          category: 'Development',
        },
      ];
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
