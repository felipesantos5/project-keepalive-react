import "./home.scss";

function Home() {
  return (
    <section className="wrapper">
      <div className="section-1">
        <h1>Olá,</h1>
        <p className="paragrafo">Para continuar navegando de forma segura, efetue o login na rede.</p>

        <h2>Login</h2>

        <form>
          <div className="wraper-input">
            <input className="input" type="email" id="user" placeholder="Usuário" required />

            <img className="user icon-input" src="./images/user.svg" alt="usuário" />
          </div>

          <div className="wraper-input">
            <input className="input" type="password" id="password" placeholder="Senha" required />

            <img className="locker icon-input" src="./images/locker.svg" alt="cadeado" />
          </div>

          <button>continuar</button>
        </form>
      </div>

      <div className="section-2">
        <img className="logo-compass" src="./images/LogoCompasso.svg" alt="Logo Compass" />
      </div>
    </section>
  );
}

export default Home;
