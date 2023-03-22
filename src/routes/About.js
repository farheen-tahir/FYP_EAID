import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Mission from "../components/Mission";
import Abouts from "../components/about";

function About() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={require("../assets/bradcam.png")}
        title="About"
        btnClass="hide"
      />
      {/* <Mission /> */}
      <Abouts />
      <Footer />
    </>
  );
}
export default About;
