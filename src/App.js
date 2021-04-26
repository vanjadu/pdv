import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Timeline from "./components/Timeline";
import Testemonials from "./components/Testemonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <AboutUs />
      <Services />
      <Timeline />
      <Testemonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
