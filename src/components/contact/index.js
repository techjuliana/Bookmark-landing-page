import {
  Container,
  Enviar,
  Email,
  Formulario,
  TituloPrincipal,
  Titulo,
} from "./styled";

export default function Contact() {
  return (
    <Container>
      <TituloPrincipal>35,000+ already joined</TituloPrincipal>
      <Titulo>
        Stay up-to-date with what
        <br /> we’re doing
      </Titulo>

      <Formulario action="/">
        <Email
          type="text"
          required
          placeholder="Enter your email address"
          id="email"
          class="input"
        />
        <Enviar type="submit">Contact Us</Enviar>
      </Formulario>
    </Container>
  );
}
