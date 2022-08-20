// components
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
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
        <Main />
      </div>
    </div>
  );
}

export default App;
