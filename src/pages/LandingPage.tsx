import LandingHeader from "../components/LandingPage/LandingHeader";
import LandingPortfolio from "../components/LandingPage/LandingProjects";
import LandingSkills from "../components/LandingPage/LandingSkills";
import RecommendationCard from "../components/LandingPage/Recommend";
import AboutMe from "../components/LandingPage/AboutMe";

function LandingPage() {
  return (
    <>
      <LandingHeader />
      <div className="max-w-[1440px] mx-auto px-6">
        <AboutMe />
        <RecommendationCard />
        <LandingSkills />
        <LandingPortfolio />
      </div>
    </>
  );
}

export default LandingPage;
