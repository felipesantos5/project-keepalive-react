import Button from "../../components/button/button";
import Input from "../../components/input/input";
import TextIntroduction from "../../components/text-introduction/textIntruduction";
import "./register.scss";
import { validateEmailRegex, validatePasswordRegex } from "../../utils/regex";

import { SetStateAction, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { app } from "../../firebase";

function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [error, setError] = useState("");

  const [emailErr, setEmailErr] = useState(false);
  const [passwordErr, setPasswordErr] = useState(false);

  // const validate = () => {
  //   if (!validateEmailRegex.test(email) && !validatePasswordRegex.test(password)) {
  //     setEmailErr(false);
  //     console.log("no false")
  //   } else {
  //     setEmailErr(true);
  //     navigate("/");
  //     console.log("no true")
  //   }
  // };

  function navigateLogin() {
    navigate("/");
  }

  const auth = getAuth(app);

  const signup = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  return (
    <section className="wrapper-sec1">
      <div className="section-1">
        <TextIntroduction textParagraph="Para continuar navegando de forma segura, efetue o cadastro na rede." textTitle="Cadastro"></TextIntroduction>

        <div className="wrapper-input">
          <input className="input" type="email" onChange={(e: any) => setEmail(e.target.value)} placeholder="Email" />
        </div>

        <div className="wrapper-input">
          <input className="input" type="text" placeholder="Nome completo" />
        </div>

        <div className="wrapper-input">
          <input className="input" minLength={6} type="password" onChange={(e: any) => setPassword(e.target.value)} placeholder="Senha" />
        </div>

        {/* {emailErr && <p className="err-input">email invalido</p>}
        {passwordErr && <p className="err-input">senha incorreta</p>} */}
        <ul className="list-password">
          <li id="6caracteres">6 caracteres;</li>
          <li id="1especial">1 caracter especial;</li>
          <li id="1numero">1 numero;</li>
          <li id="1minuscula">1 letra maiuscula;</li>
          <li id="1maiscula">1 letra minuscula;</li>
        </ul>

        <div className="wrapper-input">
          <input className="input" type="password" placeholder="Repita a senha" />
        </div>

        <Button onClick={signup} label="inscreva-se"></Button>

        <div className="wrapper-jatemcadastro">
          <p className="anchor-redirect">
            se você já possui um cadastro{" "}
            <a className="button-anchor" onClick={navigateLogin}>
              clique aqui
            </a>
          </p>
        </div>
      </div>

      <div className="section-2">
        <img className="logo-compass-sec2" src="./images/LogoCompasso.svg" alt="Logo Compass" />
      </div>
    </section>
  );
}

export default Register;
