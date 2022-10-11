import { redirect, useNavigate } from "react-router-dom";
interface Props {
  label: string;
  onClick?: any;
  Redirect?: any;
}

function Button({ label ,onClick, Redirect}: Props) {
  const navigate = useNavigate();

  return (
    <div className="wraper-button">
      <button className="button-login" onClick={onClick}>{label}</button>
    </div>
  );
}

export default Button;

// type="submit" onClick={validate}
