import {
  Container,
  Informacao,
  Paragrafo,
  Titulo,
  Ilustracao,
  Card,
  TituloPrincipal,
  ParagrafoPrincipal,
  Menu,
  Texto,
} from "./styled";
import ilustracao1 from "./../../assets/images/illustration-features-tab-1.svg";
import ilustracao2 from "./../../assets/images/illustration-features-tab-2.svg";
import ilustracao3 from "./../../assets/images/illustration-features-tab-3.svg";
import { useState } from "react";
import { StringsComuns } from "../../i18n/localization/texts";
export default function Features() {
  const [opcao, setOpcao] = useState("");

  return (
    <Container>
      <TituloPrincipal>
        {StringsComuns.components.features.titulo}
      </TituloPrincipal>
      <ParagrafoPrincipal>
        {StringsComuns.components.features.paragrafo}
      </ParagrafoPrincipal>

      <Menu>
        <p onClick={() => setOpcao("1")}>
          {StringsComuns.components.features.menu.opcao1}
        </p>
        <p onClick={() => setOpcao("2")}>
          {StringsComuns.components.features.menu.opcao2}
        </p>
        <p onClick={() => setOpcao("3")}>
          {StringsComuns.components.features.menu.opcao3}
        </p>
      </Menu>

      <div>
        {opcao === "1" ? (
          <Card>
            <Ilustracao>
              <img src={ilustracao1} alt="features" />
            </Ilustracao>
            <Texto>
              <Titulo>{StringsComuns.components.features.card1.titulo}</Titulo>
              <Paragrafo>
                {StringsComuns.components.features.card1.paragrafo}
              </Paragrafo>
              <Informacao href="/">
                {StringsComuns.components.features.button}
              </Informacao>
            </Texto>
          </Card>
        ) : opcao === "2" ? (
          <Card>
            <Ilustracao>
              <img src={ilustracao2} alt="features" />
            </Ilustracao>
            <Texto>
              <Titulo>{StringsComuns.components.features.card2.titulo}</Titulo>
              <Paragrafo>
                {StringsComuns.components.features.card2.paragrafo}
              </Paragrafo>
              <Informacao href="/">
                {StringsComuns.components.features.button}
              </Informacao>
            </Texto>
          </Card>
        ) : (
          <Card>
            <Ilustracao>
              <img src={ilustracao3} alt="features" />
            </Ilustracao>
            <Texto>
              <Titulo>{StringsComuns.components.features.card3.titulo}</Titulo>
              <Paragrafo>
                {StringsComuns.components.features.card3.paragrafo}
              </Paragrafo>
              <Informacao href="/">
                {StringsComuns.components.features.button}
              </Informacao>
            </Texto>
          </Card>
        )}
      </div>
    </Container>
  );
}
