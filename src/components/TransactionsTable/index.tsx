import { useContext } from 'react';

import { formatAmount } from '../../utils/formatValues';
import { TransactionContext } from '../TransactionsContext';

import { Container } from './styles';

export function TransactionsTable() {
  const { transactions } = useContext(TransactionContext);
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categorias</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td className="title">{transaction.title}</td>
              <td className={transaction.type}>
                {transaction.type === 'outcome' && '-'}
                {formatAmount(transaction.amount)}
              </td>
              <td>{transaction.category}</td>
              <td>
                {new Intl.DateTimeFormat('pt-BR').format(
                  new Date(transaction.createdAt),
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
