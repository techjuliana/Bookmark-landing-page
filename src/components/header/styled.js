import styled from "styled-components";

export const Container = styled.nav`
  display: flex;
  justify-content: center;
  top: 0;
  left: 0;
  padding: 2rem;
  justify-content: space-between;
`;

export const Conjunto = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 800px) {
    flex-direction: column;
    background-color: hsla(229, 31%, 21%, 0.951);
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    height: 100vh;
    display: ${({ navToggle }) => (navToggle ? "flex" : "none")};
  }
`;

export const Logo = styled.img`
  margin-right: 3rem;
`;

export const Rota = styled.text`
  margin: 1.4rem;
  @media (max-width: 800px) {
    text-align:center;
    color: ${(props) => props.theme.White};
    margin: 4rem;
    display: flex;
  }
  :hover {
    color: ${(props) => props.theme.Red};
  }
`;

export const Carrinho = styled.button`
  padding-left: 1rem;
  padding-right: 1rem;
  margin-left: 1rem;
  color: ${(props) => props.theme.White};
  background: ${(props) => props.theme.Red};
  :hover {
    background: ${(props) => props.theme.White};
    border: 2px solid ${(props) => props.theme.Red};
    color: ${(props) => props.theme.Red};
  }
`;

export const MobileNav = styled.div`
  display: none;
  button {
    background-color: transparent;
    position: relative;
    z-index: 100;
  }
  i {
    font-size: 1.4rem;
    color: ${({ navToggle }) => (navToggle ? "hsl(229, 31%, 21%)" : "black")};
  }
  @media screen and (max-width: 800px) {
    flex: 1;
    display: flex;
    justify-content: flex-end;
  }
`;
