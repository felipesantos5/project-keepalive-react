import { useNavigate } from "react-router-dom";
import Button from "../../components/button/button";
import Input from "../../components/input/input";
import TextIntroduction from "../../components/text-introduction/textIntruduction";
import "./register.scss";

function Register() {
  const navigate = useNavigate();

  // const validateRegister = () {

  // }

  function navigateLogin () {
    navigate("/");
  }
  
  return (
    <section className="wrapper-sec1">
      <div className="section-1">
        <TextIntroduction textParagraph="Para continuar navegando de forma segura, efetue o registro na rede." textTitle="Registro"></TextIntroduction>

        <Input Type="email" label="Email" icon="fa fa-check"></Input>

          <Input Type="text" label="Nome" icon="fa fa-check"></Input>
          <Input Type="number" label="Sobrenome" icon="fa fa-check"></Input>

          <Input Type="password" label="Senha" icon="fa fa-check"></Input>
          <Input Type="password" label="Repita sua senha" icon="fa fa-check"></Input>

          {/* {emailErr && <p className="error-input error-active">Ops, usuário ou senha inválidos. Tente novamente!</p>} */}

        <Button label="inscreva-se"></Button>
        
        <a className="anchor-redirect" onClick={navigateLogin}>se você já possui um cadastro clique aqui</a>
      </div>

      <div className="section-2">
        <img className="logo-compass-sec2" src="./images/LogoCompasso.svg" alt="Logo Compass" />
      </div>
    </section>
  );
}

export default Register;
