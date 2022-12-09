import { Container, Informacao, Paragrafo, Titulo, Ilustracao } from "./styled";
import ilustracao from "./../../assets/images/illustration-features-tab-1.svg";
export default function Features() {
  return (
    <Container>
      <Titulo>Features</Titulo>
      <Paragrafo>
        Our aim is to make it quick and easy for you to access your
        <br /> favourite websites. Your bookmarks sync between your devices
        <br /> so you can access them on the go.
      </Paragrafo>

      <div className="features-controller">
        <p className="control active">Simple Bookmarking</p>
        <p className="control">Speedy Searching</p>
        <p className="control">Easy Sharing</p>
      </div>

      <div className="features-tab">
        <Ilustracao>
          <img src={ilustracao} alt="features illustration" id="image" />
        </Ilustracao>
        <div className="right-col">
          <Titulo id="lendo">Bookmark in one click</Titulo>
          <Paragrafo id="paragrafo">
            Organize your bookmarks however you like. Our simple drag-and-drop
            interface gives you complete control over how you manage your
            favourite sites.
          </Paragrafo>
          <Informacao href="/">More Info</Informacao>
        </div>
      </div>
    </Container>
  );
}
