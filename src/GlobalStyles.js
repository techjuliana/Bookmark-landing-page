import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

 body {
  width: 100vw;
  height: 100vh;
  display:flex;
  justify-content:center;
  background: ${(props) => props.theme.White};
  font-family: 'Rubik', sans-serif;
  font-size:18px;
  color: ${(props) => props.theme.Dark};
 }

 button{
 padding:0.7rem;
  border-radius: 0.2rem; 
  cursor: pointer;
 }

 * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  border:none;
  outline: none;
  text-decoration:none;
  color:inherit;
}
`;
