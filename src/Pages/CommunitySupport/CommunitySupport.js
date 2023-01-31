import React from "react";
import ContactUs from "../Home/ConactUs/ContactUs";
import FAQ from "./subsections/FAQ/FAQ";
import HelpCategories from "./subsections/HelpCategories/HelpCategories";
import { Helmet } from "react-helmet";
const CommunitySupport = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>CodersStackBox - CommunitySupport</title>
      </Helmet>
      <HelpCategories></HelpCategories>
      <FAQ></FAQ>
      <ContactUs></ContactUs>
    </div>
  );
};

export default CommunitySupport;
