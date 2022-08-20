// style
import style from "./Main.module.css";
// assets
import emailIcon from "../../assets/email_icon.png";
import homeImage from "../../assets/home_img.png";

const Home = () => {
  return (
    <>
      <section className={style.main_container}>
        <div className={style.main_content}>
          <h1 className={style.main_title}>
            Manage
            <br /> your personal
            <br /> and all team task.
          </h1>
          <p className={style.main_subtitle}>
            Monitoring your personal and all team task
            <br /> more easily with us.
          </p>
          <div className={style.email_input_container}>
            <label className={style.email_input}>
              <img src={emailIcon} alt="email icon" />
              <input type="email" name="email" placeholder="Email" />
            </label>
            <button className={style.send_button}>Send</button>
          </div>
          <p className={style.credit}>
            <a
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/raul-de-souza/"
              target="_blank"
            >
              @CreatedbyRauldeSouza
            </a>
          </p>
        </div>
        <div className={style.main_image}>
          <img src={homeImage} alt="home img" />
        </div>
      </section>
    </>
  );
};

export default Home;
