import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Mission from "../components/Mission";
import Tragedy from "../components/Tragedy";
import Footer from "../components/Footer";
import {useJsApiLoader} from "@react-google-maps/api";
import Map from "../components/Map";
import { mapOptions } from "../components/MapConfiguration";
// import { useDispatch,useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";

function Home1() {
  const {isLoaded}=useJsApiLoader({
    id:mapOptions.googleMapApiKey,
    googleMapApiKey:mapOptions.googleMapApiKey
  });

  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg={require("../assets/banner.png")}
        title="Help The Poor For Their Better Future"
        txt="Everyday we bring hope to Pakistanis's lives as a sign of God's unconditional love."
        btnClass="show"
        url="/"
        btnText="Donate"
      />
      <Mission />
      <Tragedy />
      <Map isLoaded={isLoaded}/>
      <Footer />
    </>
  );
}
export default Home1;
