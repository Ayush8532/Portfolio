import About from "./component/about/About";
import Contact from "./component/contact/Contact";
import Footer from "./component/footer/Footer";
import Intro from "./component/intro/Intro";
import Navbar from "./component/navbar/Navbar";
import Projectlist from "./component/projectlist/Projectlist";
import Skills from "./component/skills/Skills";
function App() {
  

  return (
 <>
 <Navbar/>
  <Intro/>
 <About/>
 <Skills/>
 <Projectlist/>
 <Contact/>
 <Footer/>
 </>
  );
}

export default App;
