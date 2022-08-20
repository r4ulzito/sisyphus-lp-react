// Styles
import style from "./Header.module.css";
// assets
import logo from "../../assets/logo.png";
import menuIcon from "../../assets/menu_icon.png";

const Header = ({ setMenuIsVisible }) => {
  return (
    <>
      <header className={style.header_container}>
        <img src={logo} alt="logo" />
        <nav className={style.navbar}>
          <ul>
            <li>
              <a
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/raul-de-souza/"
                target="_blank"
              >
                About
              </a>
            </li>
            <li>
              <a
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/raul-de-souza/"
                target="_blank"
              >
                Services
              </a>
            </li>
            <li>
              <a
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/raul-de-souza/"
                target="_blank"
              >
                Product
              </a>
            </li>
          </ul>
          <button className={style.demo_button}>Demo</button>
        </nav>
        <div
          className={style.menu_button}
          onClick={() => setMenuIsVisible(true)}
        >
          <img src={menuIcon} alt="menu" />
        </div>
      </header>
    </>
  );
};

export default Header;
