import { useState } from 'react';
import Modal from 'react-modal';

import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';

import { Container, RadioBox, TransactionTypeContainer } from './styles';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}
export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const [type, setType] = useState<'income' | 'outcome'>('income');

  function handleSetIncomeTransactionType() {
    setType('income');
  }

  function handleSetOutcomeTransactionType() {
    setType('outcome');
  }
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content">
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close">
        <img src={closeImg} alt="Fechar modal" />
      </button>
      <Container>
        <h2>Cadastrar transação</h2>

        <input type="text" placeholder="Título" name="title" />
        <input type="number" placeholder="Valor" name="amount" />
        <TransactionTypeContainer>
          <RadioBox
            type="button"
            isActive={type === 'income'}
            activeColor="green"
            onClick={handleSetIncomeTransactionType}>
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>
          <RadioBox
            type="button"
            isActive={type === 'outcome'}
            activeColor="red"
            onClick={handleSetOutcomeTransactionType}>
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>
        <input type="text" placeholder="Categoria" name="category" />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
