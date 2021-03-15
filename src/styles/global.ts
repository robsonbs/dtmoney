import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
:root{
  --red: #e52e4d;
  --blue: #5429cc;
  --green: #33CC95;
  --blue-light: #6933ff;
  --text-title: #363f5f;
  --text-body: #969cb3;
  --background: #f0f2f5;
  --shape: #FFFFFF;
  --border-radius-value: 0.25rem;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

// font-size: 16px (Desktop)

html{
  @media(max-width: 1080px){
    font-size: 93.75%; // 15px
  }

  @media(max-width: 720px){
    font-size: 87.50%; // 14px
  }
}

body {
  background: var(--background);
  -webkit-font-smoothing: antialiased;
}

body, input, textarea, button{
   font-family: 'Poppins', sans-serif;
   font-weight: 400;
}

h1,h2,h3,h4,h5,h6,strong{
  font-weight: 600;
}

button{
  cursor: pointer;
}

[disabled]{
  opacity: 0.6;
  cursor: not-allowed;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.react-modal-overlay{
 background: rgba(0,0,0,0.5);
 position: fixed;
 top: 0;
 bottom: 0;
 left: 0;
 right: 0;
 display: flex;
 justify-content: center;
 align-items: center;
}

.react-modal-content{
  width: 100%;
  max-width: 576px;
  background: var(--background);
  padding: 3rem;
  position: relative;
  border-radius: var(--border-radius-value)
}

.react-modal-close {
  position: absolute;
  right: 1.5rem;
  top: 1.5rem;
  border: 0;
  background: transparent;
  transition: filter 0.2s;

  &:hover{
    filter: brightness(0.8);
  }
}
`;
