import "./login.scss";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import Input from "../../components/input/input";
import Button from "../../components/button/button";

function Login() {
  const navigate = useNavigate();

  const validateEmail = new RegExp("[^@ \t\r\n]+@[^@ \t\r\n]+.[^@ \t\r\n]+");

  const validatePassword = new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailErr, setEmailErr] = useState(false);
  const [passwordErr, setPasswordErr] = useState(false);

  const validate = () => {
    if (!validateEmail.test(email) && !validatePassword.test(password)) {
      setEmailErr(true);
    } else {
      setEmailErr(false);
      navigate("/home");
    }
  };

  return (
    <section className="wrapper-sec1">
      <div className="section-1">

        <img className="logo-compass-sec1" src="./images/LogoCompasso.svg" alt="Logo Compass" />
        
        <h1 className="ola">Olá,</h1>

        <h3 className="paragraph-login">Para continuar navegando de forma segura, efetue o login na rede.</h3>

        <h2 className="title-login">Login</h2>

        <div className="wrapper-input">
          <input className="input" type="email" id="user" placeholder="Usuário" value={email} onChange={(e) => setEmail(e.target.value)} />

          <i className="fa fa-user-o" />
        </div>

        <div className="wrapper-input">
          <input className="input" type="password" id="password" placeholder="Senha" minLength={5} value={password} onChange={(e) => setPassword(e.target.value)} />

          <i className="fa fa-lock"></i>
        </div>

        {emailErr && <p className="error-input error-active">Ops, usuário ou senha inválidos. Tente novamente!</p>}

        <Button label="continuar" onClick={validate}/>
      </div>

      <div className="section-2">
        <img className="logo-compass-sec2" src="./images/LogoCompasso.svg" alt="Logo Compass" />
      </div>
    </section>
  );
}

export default Login;
