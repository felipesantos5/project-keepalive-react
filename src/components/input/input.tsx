interface Props {
  label?: string;
  Type?: string;
  icon?: string;
  Value?: string;
}

function Input({ label, Type, icon, Value }: Props) {
  return (
    <div className="wrapper-input">
      <input className="input" type={Type} id="user" placeholder={label} value={Value}/>
      <i className={icon} />
    </div>
  );
}

export default Input;
