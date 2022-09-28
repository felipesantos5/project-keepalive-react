import "./login.scss";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  return (
    <section className="wrapper">
      <div className="section-1">
        <h1 className="ola">Olá,</h1>
        <h3 className="paragraph-login">Para continuar navegando de forma segura, efetue o login na rede.</h3>

        <h2 className="title-login">Login</h2>

        <div className="wraper-input">
          <input className="input" type="email" id="user" placeholder="Usuário" />

          <img className="user icon-input" src="./images/user.svg" alt="usuário" />
        </div>

        <div className="wraper-input">
          <input className="input" type="password" id="password" placeholder="Senha" />

          <img className="locker icon-input" src="./images/locker.svg" alt="cadeado" />
        </div>

        <p className="error-input">Ops, usuário ou senha inválidos. Tente novamente!</p>
        <div className="wraper-button">
          <button className="button-login" onClick={() => navigate("/home")}>
            continuar
          </button>
        </div>
      </div>

      <div className="section-2">
        <img className="logo-compass" src="./images/LogoCompasso.svg" alt="Logo Compass" />
      </div>
    </section>
  );
}

export default Login;
