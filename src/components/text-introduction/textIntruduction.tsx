interface Props {
  textParagraph?: string;
  textTitle?: string;

}

export default function TextIntroduction({ textParagraph, textTitle } : Props) {
  return (
    <div>
      <img className="logo-compass-sec1" src="./images/LogoCompasso.svg" alt="Logo Compass" />

      <h1 className="ola">Olá,</h1>

      <h3 className="paragraph-login">{textParagraph}</h3>

      <h2 className="title-login">{textTitle}</h2>
    </div>
  );
}

// Para continuar navegando de forma segura, efetue o login na rede.
