import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  top: 0;
  left: 0;
  padding: 2rem;
  justify-content: space-between;
  @media (max-width: 800px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

export const Conjunto = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Logo = styled.img`
  margin-right: 3rem;
`;

export const Rota = styled.p`
  margin: 1rem;
  :hover {
    color: ${(props) => props.theme.Red};
  }
`;

export const Carrinho = styled.button`
  color: ${(props) => props.theme.White};
  background: ${(props) => props.theme.Red};
  :hover {
    background: ${(props) => props.theme.White};
    border: 2px solid ${(props) => props.theme.Red};
    color: ${(props) => props.theme.Red};
  }
`;
