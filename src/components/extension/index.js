import {
  Container,
  Links,
  Paragrafo,
  Titulo,
  Cards,
  Card,
  Linha,
  TituloCard,
  Imagem,
} from "./styled";
import chrome from "./../../assets/images/logo-chrome.svg";
import firefox from "./../../assets/images/logo-firefox.svg";
import opera from "./../../assets/images/logo-opera.svg";
import { StringsComuns } from "../../localization/texts";
export default function extension() {
  return (
    <Container>
      <Titulo>{StringsComuns.components.extension.titulo}</Titulo>
      <Paragrafo>{StringsComuns.components.extension.paragrafo}</Paragrafo>
      <Cards>
        <Card>
          <Imagem src={chrome} alt="chrome logo" />
          <TituloCard>
            {StringsComuns.components.extension.chrome.titulo}
          </TituloCard>
          <Paragrafo>
            {StringsComuns.components.extension.chrome.paragrafo}
          </Paragrafo>
          <Linha />
          <Links href="/">
            {StringsComuns.components.extension.chrome.button}
          </Links>
        </Card>
        <Card id="card2">
          <Imagem src={firefox} alt="firefox logo" />
          <TituloCard>
            {StringsComuns.components.extension.firefox.titulo}
          </TituloCard>
          <Paragrafo>
            {StringsComuns.components.extension.firefox.paragrafo}
          </Paragrafo>
          <Linha />
          <Links href="/">
            {StringsComuns.components.extension.firefox.button}
          </Links>
        </Card>
        <Card id="card3">
          <Imagem src={opera} alt="opera logo" />
          <TituloCard>
            {StringsComuns.components.extension.opera.titulo}
          </TituloCard>
          <Paragrafo>
            {StringsComuns.components.extension.opera.paragrafo}
          </Paragrafo>
          <Linha />
          <Links href="/">
            {StringsComuns.components.extension.opera.button}
          </Links>
        </Card>
      </Cards>
    </Container>
  );
}
