import { Container, Logo, Rota, BotaoLogin, Conjunto, Itens,MobileNav, Conjunto2, Rede } from "./styled";
import Hamburger from "../../assets/images/icon-hamburger.svg";
import Close from "../../assets/images/icon-close.svg";
import facebook from "./../../assets/images/icon-facebook.svg";
import twitter from "./../../assets/images/icon-twitter.svg";
import logo from "./../../assets/images/logo-bookmark.svg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
export default function Header() {
  const [navToggle, setNavToggle] = useState(false);
  const handleNavToggle = () => {
    setNavToggle(!navToggle);
  };

  useEffect(() => {
    if (navToggle === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  });
  return (
    <Container>
      <Link to="/">
        <Logo src={logo} alt="logo" />
      </Link>
      <MobileNav navToggle={navToggle}>
        <button onClick={handleNavToggle}>
          {navToggle ? (
            <i><img src={Close} alt="Fechar"/></i>
          ) : (
            <i >
            <img src={Hamburger} alt="abrir"/>
            </i>
          )}
        </button>
      </MobileNav>
      <Conjunto navToggle={navToggle}>
      <Itens>
        <Link to="/features">
          <Rota>FEATURES</Rota>
        </Link>

        <Link to="/extension">
          <Rota>PRICING</Rota>
        </Link>

        <Link to="/contact">
          <Rota>CONTACT</Rota>
        </Link>

        <BotaoLogin>
          <Link to="/login">
            <Rota>LOGIN</Rota>
          </Link>
        </BotaoLogin>

        <Conjunto2>
        <Rede href="https://pt-br.facebook.com/" target="_blank">
          <Logo src={facebook} alt="logo" />
        </Rede>

        <Rede href="https://twitter.com/" target="_blank">
          <Logo src={twitter} alt="logo" />
        </Rede>
      </Conjunto2>
        </Itens>
      </Conjunto>
    </Container>
  );
}
