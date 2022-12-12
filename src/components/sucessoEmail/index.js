import { Container, Sucesso, PerguntasCard } from "./styled";
import arrow from "./../../assets/images/icon-arrow.svg";
import {  ParagrafoPrincipal } from "../features/styled";
import { Link } from "react-router-dom";
export default function SucessoEmail() {
  return (
    <Container>
      <h1>Email successfully registered</h1>
      <ParagrafoPrincipal>
        Enjoy more content on our landing page, Enjoy more content on our
        landing page,
        <br />
        Enjoy more content on our landing page.
      </ParagrafoPrincipal>
      <PerguntasCard>
        <img src={arrow} alt="bookmark" />
        <Link to="/">
          <Sucesso>Back to Home</Sucesso>
        </Link>
      </PerguntasCard>
    </Container>
  );
}
