import Topbar from "./components/topbar/Topbar.tsx";
import Intro from "./components/intro/Intro.tsx";
import Portfolio from "./components/portfolio/Portfolio.tsx";
import Works from "./components/works/Works.tsx";
import Testimonials from "./components/testimonials/Testimonials.tsx";
import Contact from "./components/contact/Contact.tsx";
import "./app.scss"


function App() {
  return (
    <div className="app">
    <Topbar></Topbar>
    <div className="sections">
      <Intro></Intro>
      <Portfolio></Portfolio>
      <Works></Works>
      <Testimonials></Testimonials>
      <Contact></Contact>
    </div>
    </div>
  );
}

export default App;
