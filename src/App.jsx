import "./app.scss"
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import ToggleButton from "./components/sidebar/toggleButton/ToggleButton";
import Links from "./components/sidebar/links/Links";
import Test from "./Test";
import Hero from "./components/Hero/Hero";

const App = () => {
  return <div>
    <section id="Homepage">
      <Navbar/>
      <Hero/>
    </section>
    <section id="AboutUs">About Us</section>
    <section id="WeTrade">We Trade</section>   
    <section id="OurBrand">Our Brand</section>
    <section id="OurClients">Our Clients</section>
    <section><Sidebar/></section>
  </div>;
};

export default App;
