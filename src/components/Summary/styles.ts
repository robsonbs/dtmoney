import styled from 'styled-components';

export const Container = styled.div`
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:2rem;
  margin-top:-8rem;

  div {
    background   : var(--shape);
    padding      : 1.5rem 2rem;
    border-radius: var(--border-radius-value);
    margin-bottom: 2rem;
    color        : var(--text-title); 
  
    header {
      display        : flex;
      align-items    : center;
      justify-content: space-between;
    }

    strong{
      display: block;
      margin-top: 1rem;
      font-size: 2rem;
      font-weight:500;
      line-height:3rem;
    }
}

>div p {
  font-size  : 2rem;
  font-size  : 200;
  line-height: 3rem;
  margin-top : 1rem;
  white-space: nowrap;
}
>div.highlight-background {
  background: var(--green);
  color     : var(--shape);
}
>div.highlight-background.danger{
  background: var(--danger-color);
}
`;
