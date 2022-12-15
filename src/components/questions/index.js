import { Container, Resposta, PerguntasCard, Lista, Pergunta } from "./styled";
import arrow from "./../../assets/images/icon-arrow.svg";
import {
  Informacao,
  ParagrafoPrincipal,
  TituloPrincipal,
} from "../features/styled";
import { StringsComuns } from "../../i18n/localization/texts";
export default function Questions() {
  return (
    <Container>
      <TituloPrincipal>
        {StringsComuns.components.questions.titulo}
      </TituloPrincipal>
      <ParagrafoPrincipal>
        {StringsComuns.components.questions.paragrafo}
      </ParagrafoPrincipal>

      <PerguntasCard>
        <Lista>
          <Resposta>
            <Pergunta>
              {StringsComuns.components.questions.pergunta1.titulo}
              <img src={arrow} alt="arrow" />
            </Pergunta>
            {StringsComuns.components.questions.pergunta1.resposta}
          </Resposta>
        </Lista>

        <Lista>
          <Resposta>
            <Pergunta>
              {StringsComuns.components.questions.pergunta2.titulo}
              <img src={arrow} alt="arrow" />
            </Pergunta>
            {StringsComuns.components.questions.pergunta2.resposta}
          </Resposta>
        </Lista>

        <Lista>
          <Resposta>
            <Pergunta>
              {StringsComuns.components.questions.pergunta3.titulo}
              <img src={arrow} alt="arrow" />
            </Pergunta>
            {StringsComuns.components.questions.pergunta3.resposta}
          </Resposta>
        </Lista>

        <Lista>
          <Resposta>
            <Pergunta>
              {StringsComuns.components.questions.pergunta4.titulo}

              <img src={arrow} alt="arrow" />
            </Pergunta>
            {StringsComuns.components.questions.pergunta4.resposta}
          </Resposta>
        </Lista>
      </PerguntasCard>
      <Informacao href="/">More Info</Informacao>
    </Container>
  );
}
