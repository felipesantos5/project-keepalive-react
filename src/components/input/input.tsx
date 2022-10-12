interface Props {
  label?: string;
  Type?: string;
  icon?: string;
  Value?: string;
  onChange?: any;
  lengthteste?: number;
}

function Input({ label, Type, icon, Value, lengthteste }: Props) {
  return (
    <div className="wrapper-input">
      <input minLength={lengthteste} className="input" type={Type} placeholder={label} value={Value}/>
      <i className={icon} />
    </div>
  );
}

export default Input;
