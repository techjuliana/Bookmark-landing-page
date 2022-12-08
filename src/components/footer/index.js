import { Container, Logo, Rota, Carrinho, Conjunto } from "./styled";
import logo from "./../../assets/images/logo-bookmark.svg";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <Container>
      <Link to="/">
        <Logo src={logo} alt="logo" />
      </Link>

      <Conjunto>
        <Link to="/features">
          <Rota>FEATURES</Rota>
        </Link>


        <Link to="/contact">
          <Rota>CONTACT</Rota>
        </Link>

        <Carrinho>
          <Link to="/">
            <Rota>LOGIN</Rota>
          </Link>
        </Carrinho>
      </Conjunto>
    </Container>
  );
}
