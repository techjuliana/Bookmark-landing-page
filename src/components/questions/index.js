import { Container, Resposta, PerguntasCard, Lista, Pergunta } from "./styled";
import arrow from "./../../assets/images/icon-arrow.svg";
import {
  Informacao,
  ParagrafoPrincipal,
  TituloPrincipal,
} from "../features/styled";
export default function Questions() {
  return (
    <Container>
      <TituloPrincipal>Frequently Asked Questions</TituloPrincipal>
      <ParagrafoPrincipal>
        Here are some of our FAQs. If you have any other questions
        <br /> you’d like answered please feel free to email us.
      </ParagrafoPrincipal>

      <PerguntasCard>
        <Lista>
          <Resposta>
            <Pergunta>
              What is Bookmark? <img src={arrow} alt="arrow" />
            </Pergunta>
            Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa,
            ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros
            aliquet convallis ultricies. Mauris augue massa, ultricies non
            ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis
            ultricies. Mauris augue massa, ultricies non ligula. Suspendisse
            imperdiet.
          </Resposta>
        </Lista>

        <Lista>
          <Resposta>
            <Pergunta>
              How can I request a new browser? <img src={arrow} alt="arrow" />
            </Pergunta>
            Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa,
            ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros
            aliquet convallis ultricies. Mauris augue massa, ultricies non
            ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis
            ultricies. Mauris augue massa, ultricies non ligula. Suspendisse
            imperdiet.
          </Resposta>
        </Lista>

        <Lista>
          <Resposta>
            <Pergunta>
              Is there a mobile app? <img src={arrow} alt="arrow" />
            </Pergunta>
            Sed consectetur quam id neque fermentum accumsan. Praesent luctus
            vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula
            quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin
            ex et ultricies bibendum.
          </Resposta>
        </Lista>

        <Lista>
          <Resposta>
            <Pergunta>
              What about other Chromium browsers?{" "}
              <img src={arrow} alt="arrow" />
            </Pergunta>
            Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat
            mi, at euismod dui. Aliquam vitae neque eget nisl gravida
            pellentesque non ut velit.
          </Resposta>
        </Lista>
      </PerguntasCard>
      <Informacao href="/">More Info</Informacao>
    </Container>
  );
}
