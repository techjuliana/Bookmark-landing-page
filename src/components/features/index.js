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
import ilustracao from "./../../assets/images/illustration-features-tab-1.svg";
import ilustracao2 from "./../../assets/images/illustration-features-tab-2.svg";
import { useState } from "react";
export default function Features() {
  const [opcao, setOpcao] = useState("");

  return (
    <Container>
      <TituloPrincipal>Features</TituloPrincipal>
      <ParagrafoPrincipal>
        Our aim is to make it quick and easy for you to access your
        <br /> favourite websites. Your bookmarks sync between your devices
        <br /> so you can access them on the go.
      </ParagrafoPrincipal>

      <Menu>
        <p onClick={() => setOpcao("1")}>Simple Bookmarking</p>
        <p onClick={() => setOpcao("2")}>Speedy Searching</p>
        <p onClick={() => setOpcao("3")}>Easy Sharing</p>
      </Menu>

      <div>
        {opcao === "1" ? (
          <Card>
            <Ilustracao>
              <img src={ilustracao} alt="features" />
            </Ilustracao>
            <Texto>
              <Titulo>Bookmark in one click</Titulo>
              <Paragrafo>
                Organize your bookmarks however you like. Our simple
                drag-and-drop interface gives you complete control over how you
                manage your favourite sites.
              </Paragrafo>
              <Informacao href="/">More Info</Informacao>
            </Texto>
          </Card>
        ) : (
          <Card>
            <Ilustracao>
              <img src={ilustracao2} alt="features" />
            </Ilustracao>
            <Texto>
              <Titulo>Intelligent search</Titulo>
              <Paragrafo>
                Our powerful search feature will help you find saved sites in no
                time at all. No need to trawl through all of your bookmarks.
              </Paragrafo>
              <Informacao href="/">More Info</Informacao>
            </Texto>
          </Card>
        )}
        {/* <Card>
            <Ilustracao>
              <img src={ilustracao3} alt="features" />
            </Ilustracao>
            <Texto>
              <Titulo>Share your bookmarks</Titulo>
              <Paragrafo>
              Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.
              </Paragrafo>
              <Informacao href="/">More Info</Informacao>
            </Texto>
          </Card> */}
      </div>
    </Container>
  );
}
