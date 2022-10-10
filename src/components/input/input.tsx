interface Props {
  icon: string;
}

function Input({}) {
  return (
    <div className="wrapper-input">
      <input className="input" type="email" id="user" placeholder="Usuário"/>
      <i className="fa {icon}" />
      
    </div>
  );
}

export default Input;