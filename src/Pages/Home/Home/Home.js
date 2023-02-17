import React from "react";
import BestDeveloper from "../BestDeveloper/BestDeveloper";
import ContactUs from "../ConactUs/ContactUs";
import Hero from "../Hero/Hero";
import Services from "../Services/Services";
import { Helmet } from "react-helmet";
import Partner from "../Partner/Partner";
import UserReviewSlider from "../../../components/UserReviewSlider";
<<<<<<< HEAD

=======
>>>>>>> 3b5f7b14510dd27fc02d04eaccdfbc660349cf75

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
          <BestDeveloper />
          <div className="gradient-03 z-[-1]" />
        </div>
        {/* <div className="relative">
          <Collaboration />
          <div className="gradient-04 z-[-1]" />
          <OurTeam />
        </div> */}
        <div className="relative">
        <Partner />

        <UserReviewSlider />
          <div className="gradient-04 z-[-1]" />
        </div>
        <div className="relative">
      <ContactUs />
      <div className="gradient-05 z-[-1]" />
        </div>
       
      </div>
    </div>
  );
};

export default Home;
