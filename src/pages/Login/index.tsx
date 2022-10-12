import "./login.scss";
import Input from "../../components/input/input";
import Button from "../../components/button/button";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

function Login() {
  const navigate = useNavigate();

  // const validateEmail = new RegExp("[^@ \t\r\n]+@[^@ \t\r\n]+.[^@ \t\r\n]+");

  // const validatePassword = new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailErr, setEmailErr] = useState(false);
  const [passwordErr, setPasswordErr] = useState(false);

  // const validateLogin = () => {
  //   if (!validateEmail.test(email) && !validatePassword.test(password)) {
  //     setEmailErr(true);
  //   } else {
  //     setEmailErr(false);
  //     navigate("/home");
  //   }
  // };

  function navigateRegister() {
    navigate("/register");
  }

  const enter = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/home");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <section className="wrapper-sec1">
      <div className="section-1">
        <img className="logo-compass-sec1" src="./images/LogoCompasso.svg" alt="Logo Compass" />

        <h1 className="ola">Olá,</h1>

        <h3 className="paragraph-login">Para continuar navegando de forma segura, efetue o login na rede.</h3>

        <h2 className="title-login">Login</h2>

        <div className="wrapper-input">
          <input className="input" type="email" id="user" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />

          <i className="fa fa-user-o" />
        </div>

        <div className="wrapper-input">
          <input className="input" type="password" id="password" placeholder="Senha" minLength={6} value={password} onChange={(e) => setPassword(e.target.value)} />

          <i className="fa fa-lock"></i>
        </div>

        {/* {emailErr && <p className="error-input error-active">Ops, usuário ou senha inválidos. Tente novamente!</p>} */}

        <Button label="continuar" onClick={enter} />

        <p className="anchor-redirect">
          se você não possui um cadastro{" "}
          <a className="button-anchor" onClick={navigateRegister}>
            clique aqui
          </a>
        </p>
      </div>

      <div className="section-2">
        <img className="logo-compass-sec2" src="./images/LogoCompasso.svg" alt="Logo Compass" />
      </div>
    </section>
  );
}

export default Login;
