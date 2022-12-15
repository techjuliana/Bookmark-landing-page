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
import { StringsComuns } from "../../i18n/localization/texts";
function Login() {
  const [opcao, setOpcao] = useState("");

  return (
    <Container>
      <Campo>
        <img src={capa} alt="logo" />
        <Navegacao>
          <Botao onClick={() => setOpcao("criar")}>
            {StringsComuns.components.login.navegacao.criar}
          </Botao>
          <Botao onClick={() => setOpcao("login")}>
            {StringsComuns.components.login.navegacao.login}
          </Botao>
        </Navegacao>
        <EstiloCaixa action="/sucessoEmail">
          {opcao === "criar" ? (
            <div className="criar-campo">
              <Titulo>{StringsComuns.components.login.tituloCriar}</Titulo>
              <input
                placeholder={StringsComuns.components.login.inputs.nome}
              ></input>
              <IMaskInput
                mask="000.000.000-00"
                placeholder={StringsComuns.components.login.inputs.cpf}
                type="text"
                required
              />
              <IMaskInput
                mask="(00) 00000 - 0000"
                placeholder={StringsComuns.components.login.inputs.telefone}
                type="text"
                required
              />
              <input
                type="text"
                required
                placeholder={StringsComuns.components.login.inputs.email}
              ></input>
              <input
                type="text"
                required
                placeholder={StringsComuns.components.login.inputs.senha}
              ></input>
              <input
                type="text"
                required
                placeholder={
                  StringsComuns.components.login.inputs.confirmarSenha
                }
              ></input>
            </div>
          ) : (
            <div>
              <Titulo>{StringsComuns.components.login.tituloLogin}</Titulo>
              <input
                type="text"
                required
                placeholder={StringsComuns.components.login.inputs.email}
              ></input>
              <input
                type="text"
                required
                placeholder={StringsComuns.components.login.inputs.senha}
              ></input>
            </div>
          )}
          <Entrar type="submit">{StringsComuns.components.login.entrar}</Entrar>
        </EstiloCaixa>
      </Campo>
    </Container>
  );
}
export default Login;
