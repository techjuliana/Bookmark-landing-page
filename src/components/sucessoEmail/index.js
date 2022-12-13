import { Container, Sucesso, PerguntasCard } from "./styled";
import arrow from "./../../assets/images/icon-arrow.svg";
import { ParagrafoPrincipal } from "../features/styled";
import { Link } from "react-router-dom";
import { StringsComuns } from "../../localization/texts";
export default function SucessoEmail() {
  return (
    <Container>
      <h1> {StringsComuns.components.SucessoEmail.titulo}</h1>
      <ParagrafoPrincipal>
        {StringsComuns.components.SucessoEmail.paragrafo}
      </ParagrafoPrincipal>
      <PerguntasCard>
        <img src={arrow} alt="bookmark" />
        <Link to="/">
          <Sucesso> {StringsComuns.components.SucessoEmail.button}</Sucesso>
        </Link>
      </PerguntasCard>
    </Container>
  );
}
