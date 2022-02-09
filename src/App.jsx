import Topbar from "./components/topbar/Topbar.tsx";
import Intro from "./components/intro/Intro.tsx";
import Portfolio from "./components/portfolio/Portfolio.tsx";
import Works from "./components/works/Works.tsx";
import Testimonials from "./components/testimonials/Testimonials.tsx";
import Contact from "./components/contact/Contact.tsx";
import "./app.scss"
import { useState } from "react";
import Menu from "./components/Menu/Menu.tsx";


function App() {
  const [menuOpen, setMenuOpen] = useState(true);
  return (
    <div className="app">
    <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    <div className="sections">
      <Intro/>
      <Portfolio/>
      <Works/>
      <Testimonials/>
      <Contact/>
    </div>
    </div>
  );
}

export default App;
