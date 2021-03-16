import { createContext, ReactNode, useEffect, useState } from 'react';

import { api } from '../services/api';

interface Transaction {
  id: number;
  title: string;
  type: 'income' | 'outcome';
  amount: number;
  category: string;
  createdAt: string;
}

export type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;

interface TransactionProviderProps {
  children: ReactNode;
}

interface TransactionContextData {
  /* eslint-disable no-unused-vars */
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
}
export const TransactionContext = createContext({} as TransactionContextData);

export function TransactionsProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api
      .get('/transactions')
      .then(response => setTransactions(response.data.transactions));
  }, []);

  async function createTransaction(transactionInput: TransactionInput) {
    const response = await api.post<{ transaction: Transaction }>(
      '/transactions',
      { ...transactionInput, createdAt: new Date() },
    );
    const { transaction } = response.data;

    setTransactions(oldState => [...oldState, transaction]);
  }
  return (
    <TransactionContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionContext.Provider>
  );
}
