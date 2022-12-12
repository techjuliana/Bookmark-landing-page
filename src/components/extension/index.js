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
export default function extension() {
  return (
    <Container>
      <Titulo>Download the extension</Titulo>
      <Paragrafo>
        We’ve got more browsers in the pipeline. Please do let us know if
        <br /> you’ve got a favourite you’d like us to prioritize
      </Paragrafo>

      <Cards>
        <Card>
          <Imagem src={chrome} alt="chrome logo" />
          <TituloCard>Add to Chrome</TituloCard>
          <Paragrafo>Minimum version 62</Paragrafo>
          <Linha />
          <Links href="/">Add & Install Extension</Links>
        </Card>
        <Card id="card2">
          <Imagem src={firefox} alt="firefox logo" />
          <TituloCard>Add to Firefox</TituloCard>
          <Paragrafo>Minimum version 55</Paragrafo>
          <Linha />
          <Links href="/">Add & Install Extension</Links>
        </Card>
        <Card id="card3">
          <Imagem src={opera} alt="opera logo" />
          <TituloCard>Add to Opera</TituloCard>
          <Paragrafo>Minimum version 46</Paragrafo>
          <Linha />
          <Links href="/">Add & Install Extension</Links>
        </Card>
      </Cards>
    </Container>
  );
}
