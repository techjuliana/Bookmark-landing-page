import styled from "styled-components";

export const Container = styled.footer`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${(props) => props.theme.Dark};
  @media (max-width: 800px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

export const Conjunto = styled.div`
  display: flex;
  flex-direction: row;
  color: ${(props) => props.theme.white};
`;

export const Logo = styled.img`
  padding: 0.7rem;
  margin-right: 3rem;
`;

export const Rota = styled.p`
  margin: 1rem;
  color: ${(props) => props.theme.White};
  :hover {
    color: ${(props) => props.theme.Red};
  }
`;
