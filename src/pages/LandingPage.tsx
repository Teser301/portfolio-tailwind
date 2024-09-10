import LandingHeader from "../components/LandingPage/LandingHeader";
import LandingPortfolio from "../components/LandingPage/LandingPortfolio";
import LandingSkills from "../components/LandingPage/LandingSkills";
import RecommendationCard from "../components/LandingPage/Recommend";
import AboutMe from "../components/LandingPage/AboutMe";
import ContactMe from "../components/LandingPage/ContactMe";

function LandingPage() {
  return (
    <>
      <LandingHeader />
      <div className="max-w-[1440px] mx-auto px-6">
        <AboutMe />
        <RecommendationCard />
        <LandingSkills />
        <LandingPortfolio />
        <ContactMe
          email="carlo.randar.aavekukk@gmail.com"
          buttonText="Get in Touch"
        />
      </div>
    </>
  );
}

export default LandingPage;
