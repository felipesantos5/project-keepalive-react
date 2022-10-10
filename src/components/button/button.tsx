interface Props {
  label: string;
  onClick: any;
}

function Button({ label ,onClick}: Props) {
  return (
    <div className="wraper-button">
      <button className="button-login" onClick={onClick}>{label}</button>
    </div>
  );
}

export default Button;

// type="submit" onClick={validate}
