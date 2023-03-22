import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

function Contact() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={require("../assets/bradcam.png")}
        title="Contact"
        btnClass="hide"
      />
      <ContactForm />
      <Footer />
    </>
  );
}
export default Contact;
