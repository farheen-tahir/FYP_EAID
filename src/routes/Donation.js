import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import DonationCard from "../components/DonationCard";
import donationItems from "../components/DonationItems";
import Footer from "../components/Footer";
import GridList from "@material-ui/core/GridList";

function Donation() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={require("../assets/bradcam.png")}
        title="Donation"
        btnClass="hide"
      />

      <GridList
        cols={3}
        style={{ display: "flex", justifyContent: "space-between", width:"100%"}}
      >
        {/* <div style={{ display: "flex", justifyContent: "space-between" }}> */}
        {donationItems.map((item) => (
          <DonationCard
            key={item.key}
            img={item.img}
            heading={item.heading}
            text={item.text}
          />
        ))}
        {/* </div> */}
      </GridList>

      <Footer />
    </>
  );
}
export default Donation;
