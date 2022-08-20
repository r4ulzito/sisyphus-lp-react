// styles
import style from "./MenuMobile.module.css";
// assets
import closeMenuIcon from "../../assets/close_menu_icon.png";

const MenuMobile = ({ setMenuIsVisible }) => {
  return (
    <section className={style.menu_mobile_container}>
      <div
        className={style.close_menu_button}
        onClick={() => setMenuIsVisible(false)}
      >
        <img src={closeMenuIcon} alt="close menu" />
      </div>
      <nav className={style.nav}>
        <li onClick={() => setMenuIsVisible(false)}>
          <a
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/raul-de-souza/"
            target="_blank"
          >
            About
          </a>
        </li>
        <li onClick={() => setMenuIsVisible(false)}>
          <a
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/raul-de-souza/"
            target="_blank"
          >
            Services
          </a>
        </li>
        <li onClick={() => setMenuIsVisible(false)}>
          <a
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/raul-de-souza/"
            target="_blank"
          >
            Product
          </a>
        </li>
        <li onClick={() => setMenuIsVisible(false)}>
          <a
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/raul-de-souza/"
            target="_blank"
          >
            Demo
          </a>
        </li>
      </nav>
    </section>
  );
};

export default MenuMobile;
