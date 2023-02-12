import React from "react";
import ContactUs from "../Home/ConactUs/ContactUs";
import FAQ from "./subsections/FAQ/FAQ";
import HelpCategories from "./subsections/HelpCategories/HelpCategories";
import { Helmet } from "react-helmet";
import CommunityHero from "./CommunityHero/CommunityHero";
import CommunityVision from "./CommunityVision/CommunityVision";
import CommunityBenefit from "./CommunityBenefit/CommunityBenefit";
const CommunitySupport = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>CodersStackBox - CommunitySupport</title>
      </Helmet>
      <CommunityHero></CommunityHero>
      <CommunityVision></CommunityVision>
      <CommunityBenefit></CommunityBenefit>
      {/* <HelpCategories></HelpCategories>
      <FAQ></FAQ>
      <ContactUs></ContactUs> */}
    </div>
  );
};

export default CommunitySupport;
