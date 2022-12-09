import { Container, Logo, Rota, Conjunto } from "./styled";
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

      <Conjunto>
        <Link to="/">
          <Logo src={facebook} alt="logo" />
        </Link>

        <Link to="/">
          <Logo src={twitter} alt="logo" />
        </Link>
      </Conjunto>
    </Container>
  );
}
