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
        <ul>
          <li onClick={() => setMenuIsVisible(false)}>About</li>
          <li onClick={() => setMenuIsVisible(false)}>Services</li>
          <li onClick={() => setMenuIsVisible(false)}>Product</li>
          <li onClick={() => setMenuIsVisible(false)}>Demo</li>
        </ul>
      </nav>
    </section>
  );
};

export default MenuMobile;
