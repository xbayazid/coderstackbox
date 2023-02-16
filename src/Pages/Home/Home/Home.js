import React from "react";
import BestDeveloper from "../BestDeveloper/BestDeveloper";
import ContactUs from "../ConactUs/ContactUs";
import Hero from "../Hero/Hero";
import Services from "../Services/Services";
import { Helmet } from "react-helmet";
import Partner from "../Partner/Partner";
import UserReviewSlider from "../../../components/UserReviewSlider";


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
          <div className="gradient-03 z-[-1]" />
          <BestDeveloper />
        </div>
        {/* <div className="relative">
          <Collaboration />
          <div className="gradient-04 z-[-1]" />
          <OurTeam />
        </div> */}
        <Partner></Partner>
        <div className="relative">
          <UserReviewSlider/>
          <div className="gradient-04 z-[-1]" />
        </div>
        <ContactUs />
      </div>
      
    </div>

  );
};

export default Home;
