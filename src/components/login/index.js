import { IMaskInput } from "react-imask";
import { useState } from "react";
import capa from "./../../assets/images/illustration-features-tab-3.svg";
import {
  Campo,
  Navegacao,
  EstiloCaixa,
  Entrar,
  Container,
  Botao,
  Titulo,
} from "./styled";
function Login() {
  const [opcao, setOpcao] = useState("");
  return (
    <Container>
      <Campo>
        <img src={capa} alt="logo" />
        <Navegacao>
          <Botao onClick={() => setOpcao("criar")}>Criar Conta</Botao>
          <Botao onClick={() => setOpcao("login")}>Login</Botao>
        </Navegacao>
        <EstiloCaixa>
          {opcao === "criar" ? (
            <div className="criar-campo">
              <Titulo>Crie sua conta e aproveite</Titulo>
              <input placeholder="Como quer ser chamado(a)?"></input>
              <IMaskInput
                mask="000.000.000-00"
                placeholder="Digite o seu CPF"
              />
              <IMaskInput
                mask="(00) 00000 - 0000"
                placeholder="Digite o Telefone"
              />
              <input placeholder="Digite seu melhor e-mail"></input>
              <input placeholder="Digite sua melhor Senha"></input>
              <input placeholder="Confirmar a Senha"></input>
            </div>
          ) : (
            <div>
              <Titulo>Entre em sua conta</Titulo>
              <input placeholder="Digite seu e-mail"></input>
              <input placeholder="Senha"></input>
            </div>
          )}
        </EstiloCaixa>
        <Entrar href="/">Entrar</Entrar>
      </Campo>
    </Container>
  );
}
export default Login;
