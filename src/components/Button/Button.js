// styles
import style from "./Button.module.css";

const Button = (props) => {
  return (
    <>
      <button className={style.button}>{props.title}</button>
    </>
  );
};

export default Button;
