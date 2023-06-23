import React from "react";
import NavBar from "./NavBar.js";
import Home,{username,city} from "./Home.js"
import About,{img} from "./About.js"



function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
    </div>
  );
}

export default App;
