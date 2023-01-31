import React from "react";
import BestDeveloper from "../BestDeveloper/BestDeveloper";
import Collaboration from "../Collaboration/Collaboration";
import ContactUs from "../ConactUs/ContactUs";
import Hero from "../Hero/Hero";
import OurTeam from "../OurTeam/OurTeam";
import Services from "../Services/Services";
import { Helmet } from "react-helmet";
const Home = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>CodersStackBox - Home</title>
      </Helmet>
      <div className="overflow-hidden">
        <Hero />
        <div className="relative">
          <Services />

          <div className="gradient-03 z-0" />
          <BestDeveloper />
        </div>
        <div className="relative">
          <Collaboration />
          <div className="gradient-04 z-0" />
          <OurTeam />
        </div>
        <ContactUs />
      </div>
    </div>

  );
};

export default Home;
