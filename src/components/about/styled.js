import styled from "styled-components";

export const Container = styled.div`
  padding: 6rem;
  min-height: 100vh;
`;

export const Linha = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Textos = styled.div`
  max-width: 28rem;
`;

export const ColunaImagem = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  ::after {
    content: "";
    position: absolute;
    right: -10rem;
    bottom: -2rem;
    width: 90%;
    height: 80%;
    background: ${(props) => props.theme.Blue};
    z-index: -1;
    border-top-left-radius: 30% 50%;
    border-bottom-left-radius: 30% 50%;
  }
`;

export const Links = styled.div`
  display: flex;
  align-items: center;
  a {
    margin-right: 1rem;
    padding: 0.7rem 1rem;
    font-size: 0.9rem;
  }
`;

export const Firefox = styled.a`
  background: ${(props) => props.theme.White};
  color: ${(props) => props.theme.Dark};
  box-shadow: 0 0 0.5rem ${(props) => props.theme.Grayish};
  :hover {
    border: 2px solid ${(props) => props.theme.Dark};
  }
`;

export const Chrome = styled.a`
  color: ${(props) => props.theme.White};
  background: ${(props) => props.theme.Blue};
  border: 2px solid ${(props) => props.theme.Blue};
  :hover {
    color: ${(props) => props.theme.Blue};
  }
`;

export const Paragrafo = styled.p`
  line-height: 1.5;
  margin-bottom: 2rem;
`;
export const Titulo = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;
