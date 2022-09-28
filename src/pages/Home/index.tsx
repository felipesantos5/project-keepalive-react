import "./home.scss";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [counter, setCounter] = useState(60);

  useEffect(() => {
    counter >= 1 ? setTimeout(() => setCounter(counter - 1), 1000) : navigate("/");
  }, [counter]);

  function Refresh() {
    return <p>{counter}</p>;
  }

  const navigate = useNavigate();

  enum Days {
    "domingo" = 0,
    "segunda-feira",
    "terça-feira",
    "quarta-feira",
    "quinta-feira",
    "sexta-feira",
    "sábado",
  }

  enum Month {
    "janeiro" = 0,
    "fevereiro",
    "março",
    "abril",
    "maio",
    "junho",
    "julho",
    "agosto",
    "setembro",
    "outubro",
    "novembro",
    "dezembro",
  }

  function DataHora() {
    const [dateState, setDateState] = useState(new Date());

    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const dayWeek = date.getDay();
    const day = String(date.getDate()).padStart(2, "0");
    const month = date.getMonth();
    const year = date.getFullYear();
    const DateCurrent = `${Days[dayWeek]}, ${day} de ${Month[month]} de ${year}`;
    const HourCurrent = `${hours}:${minutes}`;
    return { Data: DateCurrent, Hora: HourCurrent };
  }

  return (
    <div>
      <header>
        <img className="logo-compass-pequeno" src="./images/logo-menor.png" alt="logo uol" />

        <div className="clock">
          <p className="hour">{DataHora().Hora}</p>
          <p className="day">{DataHora().Data}</p>
        </div>

        <div className="wraper-weather">
          <p className="place">Passo Fundo - RS</p>

          <div className="wraper-weather-temperature">
            <img className="cloud" src="./images/cloud.svg" alt="" />
            <p className="temperature">22º</p>
          </div>
        </div>
      </header>

      <main>
        <img className="ball-uol" src="./images/bola-uol.png" alt="logo uol" />

        <section className="section-frases">
          <div>
            <h2 className="title-eng">Our mission is</h2>
            <h3 className="title-pt">Nossa missão é</h3>
          </div>

          <div>
            <h2 className="title-eng">to transform the world</h2>
            <h3 className="title-pt">transformar o mundo</h3>
          </div>

          <div>
            <h2 className="title-eng">building digital experiences</h2>
            <h3 className="title-pt">construindo experiências digitais</h3>
          </div>

          <div>
            <h2 className="title-eng">that enable our client’s growth</h2>
            <h3 className="title-pt">que permitam o crescimento dos nossos clientes</h3>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div>
          <p className="paragraph-footer">
            Essa janela do navegador é usada para manter sua sessão de autenticação ativa. Deixe-a aberta em segundo plano e abra uma nova janela para continuar a navegar.
          </p>

          <img className="white-line" src="./images/line-white.svg" alt="line" />
        </div>

        <div>
          <p className="text-refresh">
            Application <br></br>refresh in
          </p>
          <div>
            <p className="timer">
              <Refresh />
            </p>
            <p className="seconds">Seconds</p>
          </div>
        </div>

        <div>
          <button className="btn-footer btn-white" onClick={() => window.open("https://compass.uol/pt/home", "_self")}>
            Continuar Navegando
          </button>

          <button className="btn-footer btn-black" onClick={() => navigate("/")}>
            Logout
          </button>
        </div>
      </footer>
    </div>
  );
}

export default Home;
