// components
import Header from "./components/Header/Header";
import Home from "./components/Pages/Home/Home";
import { useState } from "react";
import MenuMobile from "./components/MenuMobile/MenuMobile";

// styles
import "./App.css";

function App() {
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  return (
    <div className="App">
      {menuIsVisible ? (
        <MenuMobile
          menuIsVivible={menuIsVisible}
          setMenuIsVisible={setMenuIsVisible}
        />
      ) : null}
      <div className="app_container">
        <Header setMenuIsVisible={setMenuIsVisible} />
        <Home />
      </div>
    </div>
  );
}

export default App;
