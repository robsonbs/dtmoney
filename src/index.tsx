import { createServer, Model } from 'miragejs';
import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './App';

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Desenvolvimento de Site',
          type: 'income',
          amount: 12000,
          category: 'Desenvolvimento',
          createdAt: new Date(),
        },
        {
          id: 2,
          title: 'Luz',
          type: 'outcome',
          amount: 230.32,
          category: 'Despesas',
          createdAt: new Date(),
        },
      ],
    });
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction');
    });

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);
      return schema.create('transaction', data);
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
