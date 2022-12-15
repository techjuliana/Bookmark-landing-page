import { StringsComuns } from "../../i18n/localization/texts";
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
      <TituloPrincipal>
        {StringsComuns.components.contact.tituloPrincipal}
      </TituloPrincipal>
      <Titulo>{StringsComuns.components.contact.titulo}</Titulo>

      <Formulario action="/sucessoEmail">
        <Email
          type="text"
          required
          placeholder={StringsComuns.components.contact.textoBotao}
          id="email"
          className="input"
        />
        <Enviar type="submit">{StringsComuns.components.contact.botao}</Enviar>
      </Formulario>
    </Container>
  );
}
