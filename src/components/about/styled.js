import styled from "styled-components";

export const ContainerTexto = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  @media (max-width: 800px) {
    flex-direction: column-reverse;
    text-align: center;
  }

  .circulo4 {
    border-radius: 50%;
    width: 25px;
    height: 25px;
    padding: 4px;
    margin-right: 0.6rem;
    background: ${(props) => props.theme.lilas2};
    color: ${(props) => props.theme.body};
  }

  .circulo1 {
    border-radius: 50%;
    width: 25px;
    height: 25px;
    padding: 5px;
    margin-right: 0.6rem;
    background: ${(props) => props.theme.laranja1};
    color: ${(props) => props.theme.body};
  }

  .circulo2 {
    border-radius: 50%;
    width: 25px;
    height: 25px;
    padding: 4px;
    margin-right: 0.6rem;
    background: ${(props) => props.theme.laranja2};
    color: ${(props) => props.theme.body};
  }

  .circulo3 {
    border-radius: 50%;
    width: 25px;
    height: 25px;
    padding: 4px;
    margin-right: 0.6rem;
    background: ${(props) => props.theme.subtitulo};
    color: ${(props) => props.theme.body};
  }
`;

export const Container = styled.div`
  margin: 1rem;
`;


export const Imagem = styled.img`
  width: 34rem;
  @media (max-width: 800px) {
    width: 20rem;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const Lista = styled.div`
  display: grid;
  grid-template-columns: 290px 290px;
  @media (max-width: 800px) {
    grid-template-columns: 100%;
  }
`;

export const Conjunto = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Titulo = styled.h1`
  width: 25rem;
  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const Informacao = styled.button`
  margin-bottom: 1rem;
`;

export const Subtitulo = styled.text`
  width: 33rem;
  font-size: 1.2rem;
  margin-bottom: 2.5rem;
  margin-top: 1rem;
  color: ${(props) => props.theme.subtitulo};
  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const Titulo2 = styled.h1`
  margin-top: 6rem;
  display: flex;
  justify-content: center;
  width: 15rem;
  @media (max-width: 800px) {
    text-align: center;
  }
`;
