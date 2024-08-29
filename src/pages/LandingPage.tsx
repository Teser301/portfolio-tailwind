import LandingHeader from "../components/LandingPage/LandingHeader";
import LandingBody from "../components/LandingPage/LandingBody";
import LandingPortfolio from "../components/LandingPage/LandingPortfolio";
import LandingExperience from "../components/LandingPage/LandingExperience";
import LandingSkills from "../components/LandingPage/LandingSkills";
function LandingPage() {
  return (
    <>
      <LandingHeader />
      <LandingBody />
      <LandingSkills />
      <LandingPortfolio />
      <LandingExperience />
    </>
  );
}

export default LandingPage;
