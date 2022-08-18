// Styles
import style from "./Header.module.css";
// assets
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <>
      <header className={style.header_container}>
        <img src={logo} alt="logo-image" />
        <nav className={style.navbar}>
          <ul>
            <li>About</li>
            <li>Services</li>
            <li>Product</li>
          </ul>
          <button className={style.demo_button}>Demo</button>
        </nav>
      </header>
    </>
  );
};

export default Header;
