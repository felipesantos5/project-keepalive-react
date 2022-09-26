import "./home.scss";

function Home() {
  return (
    <section>
      <h1>Olá,</h1>
      <p className="paragrafo">Para continuar navegando de forma segura, efetue o login na rede.</p>

      <h2>Login</h2>

      <form>
        <div className="single-input">
          <input className="input" type="email" id="user" placeholder="Usuário" required/>
          
        </div>

        <div className="single-input">
          <input className="input" type="password" id="password" placeholder="Senha" required />
        </div>

        <button>continuar</button>

      </form>

      

    </section>
  );
}

export default Home;
