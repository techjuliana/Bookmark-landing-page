import { Container, Logo, Rota, Conjunto, Conjunto2, Rede } from "./styled";
import logo from "./../../assets/images/logo-bookmark-dark.svg";
import facebook from "./../../assets/images/icon-facebook.svg";
import twitter from "./../../assets/images/icon-twitter.svg";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <Container>
      <Conjunto>
        <Link to="/">
          <Logo src={logo} alt="logo" />
        </Link>

        <Link to="/features">
          <Rota>FEATURES</Rota>
        </Link>

        <Link to="/extension">
          <Rota>PRICING</Rota>
        </Link>

        <Link to="/contact">
          <Rota>CONTACT</Rota>
        </Link>
      </Conjunto>

      <Conjunto2>
        <Rede href="https://pt-br.facebook.com/" target="_blank">
          <Logo src={facebook} alt="logo" />
        </Rede>

        <Rede href="https://twitter.com/" target="_blank">
          <Logo src={twitter} alt="logo" />
        </Rede>
      </Conjunto2>
    </Container>
  );
}
