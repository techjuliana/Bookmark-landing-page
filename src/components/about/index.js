import {
  Links,
  Container,
  Chrome,
  Firefox,
  ColunaImagem,
  Paragrafo,
  Titulo,
  Linha,
  Textos,
} from "./styled";
import imagem from "./../../assets/images/illustration-hero.svg";
export default function About() {
  return (
    <Container>
      <Linha>
        <Textos>
          <Titulo>A Simple Bookmark Manager</Titulo>
          <Paragrafo>
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </Paragrafo>
          <Links>
            <Chrome
              href="https://www.google.com/intl/pt-BR/chrome/"
              target="_blank"
            >
              Get it on Chrome
            </Chrome>
            <Firefox
              href="https://www.mozilla.org/pt-BR/firefox/new/"
              target="_blank"
            >
              Get it on Firefox
            </Firefox>
          </Links>
        </Textos>

        <ColunaImagem>
          <img src={imagem} alt="bookmark" />
        </ColunaImagem>
      </Linha>
    </Container>
  );
}
