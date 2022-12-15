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
import { StringsComuns } from "../../i18n/localization/texts";
export default function About() {
  return (
    <Container>
      <Linha>
        <Textos>
          <Titulo>{StringsComuns.components.about.titulo}</Titulo>
          <Paragrafo>{StringsComuns.components.about.paragrafo}</Paragrafo>
          <Links>
            <Chrome
              href="https://www.google.com/intl/pt-BR/chrome/"
              target="_blank"
            >
              {StringsComuns.components.about.buttons.chrome}
            </Chrome>
            <Firefox
              href="https://www.mozilla.org/pt-BR/firefox/new/"
              target="_blank"
            >
              {StringsComuns.components.about.buttons.firefox}
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
