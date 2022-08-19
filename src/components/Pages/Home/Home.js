// style
import style from "./Home.module.css";
// assets
import emailIcon from "../../../assets/email_icon.png";
import homeImage from "../../../assets/home_img.png";

const Home = () => {
  return (
    <>
      <section className={style.home_container}>
        <div className={style.home_content}>
          <h1 className={style.home_title}>
            Manage
            <br /> your personal
            <br /> and all team task.
          </h1>
          <p className={style.home_subtitle}>
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
          <p className={style.credit}>@Createdbynamdesign</p>
        </div>
        <div className={style.home_image}>
          <img src={homeImage} alt="home img" />
        </div>
      </section>
    </>
  );
};

export default Home;
