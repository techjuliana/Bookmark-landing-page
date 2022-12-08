import {
  ContainerTexto,
  Lista,
  Informacao,
  Subtitulo,
  Titulo,
  Conjunto,
  Imagem,
  Container,
  // Titulo2,
} from "./styled";
import imagem from "./../../assets/images/illustration-hero.svg";
export default function About() {
  return (
    <Container>
      <ContainerTexto>
        <Conjunto>
          <Titulo>A simple BookMark Manager</Titulo>
          <Subtitulo>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </Subtitulo>
          <Lista>
            <Informacao>Get it on Chrome</Informacao>
            <Informacao>Get it on Firefox</Informacao>
          </Lista>
        </Conjunto>
        <Imagem src={imagem} alt="" />
      </ContainerTexto>
    </Container>
  );
}
