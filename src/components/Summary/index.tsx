import { useContext, useMemo } from 'react';

import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import { formatAmount } from '../../utils/formatValues';
import { TransactionContext } from '../TransactionsContext';

import { Container } from './styles';

export function Summary() {
  const { transactions } = useContext(TransactionContext);

  const summary = useMemo(
    () =>
      transactions.reduce(
        (acc, transaction) => {
          if (transaction.type === 'income') {
            acc.income += transaction.amount;
          } else if (transaction.type === 'outcome') {
            acc.expense += transaction.amount;
          }
          acc.total = acc.income - acc.expense;

          return acc;
        },
        { income: 0, expense: 0, total: 0 },
      ),
    [transactions],
  );

  return (
    <Container>
      <div>
        <header>
          <span>Entradas</span>
          <img src={incomeImg} alt="Ícone Entradas" />
        </header>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(summary.income)}
        </strong>
      </div>
      <div>
        <header>
          <span>Saídas</span>
          <img src={outcomeImg} alt="Ícone Saídas" />
        </header>
        <strong>{formatAmount(summary.expense)}</strong>
      </div>
      <div className="highlight-background ">
        <header>
          <span>Total</span>
          <img src={totalImg} alt="Ícone Total" />
        </header>
        <strong>{formatAmount(summary.total)}</strong>
      </div>
    </Container>
  );
}
