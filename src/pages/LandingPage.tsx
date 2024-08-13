import React from "react";
import LandingHeader from "../components/LandingPage/LandingHeader";
import LandingBody from "../components/LandingPage/LandingBody";
import LandingPortfolio from "../components/LandingPage/LandingPortfolio";
import LandingExperience from "../components/LandingPage/LandingExperience";
function LandingPage() {
  return (
    <>
      <LandingHeader />
      <LandingBody />
      <LandingPortfolio />
      <LandingExperience />
    </>
  );
}

export default LandingPage;
