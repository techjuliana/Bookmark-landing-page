import { Container, Logo, Rota, Carrinho, Conjunto, MobileNav } from "./styled";
import Hamburger from "../../assets/images/icon-hamburger.svg";
import Close from "../../assets/images/icon-close.svg";

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
        <Link to="/features">
          <Rota>FEATURES</Rota>
        </Link>

        <Link to="/extension">
          <Rota>PRICING</Rota>
        </Link>

        <Link to="/contact">
          <Rota>CONTACT</Rota>
        </Link>

        <Carrinho>
          <Link to="/login">
            <Rota>LOGIN</Rota>
          </Link>
        </Carrinho>
      </Conjunto>
    </Container>
  );
}
