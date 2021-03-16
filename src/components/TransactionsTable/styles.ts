import styled from 'styled-components';

export const Container = styled.main`
  margin-top: 4rem;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    th {
      color: var(--text-body);
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
    }

    td {
      padding: 1rem 2rem;
      border: 0;
      background: var(--shape);
      color: var(--text-body);

      &.title {
        color: var(--text-title);
      }

      &.income {
        color: var(--green);
      }

      &.outcome {
        color: var(--red);
      }
      &:first-of-type {
        border-radius: var(--border-radius-value) 0 0 var(--border-radius-value);
      }

      &:last-of-type {
        border-radius: 0 var(--border-radius-value) var(--border-radius-value) 0;
      }
    }
  }
`;
