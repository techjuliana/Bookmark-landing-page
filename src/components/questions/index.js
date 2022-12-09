import {
  Container,
  Resposta,
  EsconderTexto,
  PerguntasCard,
  Lista,
  Pergunta,
} from "./styled";
import arrow from "./../../assets/images/icon-arrow.svg";
import { Informacao, Paragrafo, Titulo } from "../features/styled";
export default function Questions() {
  function mostrarTexto() {
    //   if(dropMenu.style.display === "none"){
    //     dropMenu.style.display = "block";
    // }
    // else{
    //     dropMenu.style.display = "none";
    // }
  }
  return (
    <Container>
      <Titulo>Frequently Asked Questions</Titulo>
      <Paragrafo>
        Here are some of our FAQs. If you have any other questions
        <br /> you’d like answered please feel free to email us.
      </Paragrafo>

      <PerguntasCard>
        <Lista>
          <Pergunta onClick={mostrarTexto}>
            What is Bookmark? <img src={arrow} alt="arrow" />
          </Pergunta>

          <EsconderTexto>
            <Resposta>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum
              quis quam ornare mattis.
            </Resposta>
          </EsconderTexto>
        </Lista>

        <Lista>
          <Pergunta>
            How can I request a new browser? <img src={arrow} alt="arrow" />
          </Pergunta>

          <EsconderTexto>
            <Resposta>
              Vivamus luctus eros aliquet convallis ultricies. Mauris augue
              massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus
              eros aliquet convallis ultricies. Mauris augue massa, ultricies
              non ligula. Suspendisse imperdie tVivamus luctus eros aliquet
              convallis ultricies. Mauris augue massa, ultricies non ligula.
              Suspendisse imperdiet.
            </Resposta>
          </EsconderTexto>
        </Lista>

        <Lista>
          <Pergunta>
            Is there a mobile app? <img src={arrow} alt="arrow" />
          </Pergunta>

          <EsconderTexto>
            <Resposta>
              Sed consectetur quam id neque fermentum accumsan. Praesent luctus
              vestibulum dolor, ut condimentum urna vulputate eget. Cras in
              ligula quis est pharetra mattis sit amet pharetra purus. Sed
              sollicitudin ex et ultricies bibendum.
            </Resposta>
          </EsconderTexto>
        </Lista>

        <Lista>
          <Pergunta>
            What about other Chromium browsers? <img src={arrow} alt="arrow" />
          </Pergunta>

          <EsconderTexto>
            <Resposta>
              Integer condimentum ipsum id imperdiet finibus. Vivamus in
              placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida
              pellentesque non ut velit.
            </Resposta>
          </EsconderTexto>
        </Lista>
      </PerguntasCard>
      <Informacao href="/">More Info</Informacao>
    </Container>
  );
}
