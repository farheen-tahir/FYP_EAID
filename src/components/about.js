import React from "react";
import MissionData from "./MissionData";
import "./aboutStyles.css";
import img1 from "../assets/3.png";
import img2 from "../assets/5.png";

function About() {
  return (
    <>
      <div className="mission">
        <h1>Our Mission</h1>
        <p>
          Our organization pursues several goals that can be identified as our
          mission. Learn more about them below.
        </p>
        <MissionData
          cName="first-des"
          heading="We rise by lifting others"
          text="E-Aid is an online platform that allows individuals and organizations to make financial contributions to a variety of causes and organizations. These websites often provide detailed information about the causes they support, including their mission, goals, and how donations will be used. They also offer various options for donating, such as one-time gifts, recurring donations, and the ability to set up personal fundraising campaigns. E-Aid provide transparency by allowing donors to track the impact of their contributions and see how their donations are being used. By using a E-Aid, individuals and organizations can make a difference in the world with the convenience and security of an online platform. With a few clicks, you can make a donation that can help those in need and make a positive impact on the world."
          img1={img1}
          img2={img2}
        />
        <MissionData
          cName="first-des-reverse"
          heading="Gift to people in need"
          text="E-Aid is an online platform that allows individuals and organizations to make financial contributions to a variety of causes and organizations. These websites often provide detailed information about the causes they support, including their mission, goals, and how donations will be used. They also offer various options for donating, such as one-time gifts, recurring donations, and the ability to set up personal fundraising campaigns. E-Aid provide transparency by allowing donors to track the impact of their contributions and see how their donations are being used. By using a E-Aid, individuals and organizations can make a difference in the world with the convenience and security of an online platform. With a few clicks, you can make a donation that can help those in need and make a positive impact on the world."
          img1={img1}
          img2={img2}
        />
      </div>
    </>
  );
}
export default About;
