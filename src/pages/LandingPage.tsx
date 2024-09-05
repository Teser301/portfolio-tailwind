import LandingHeader from "../components/LandingPage/LandingHeader";
import LandingPortfolio from "../components/LandingPage/LandingPortfolio";
import Timeline from "../components/Timeline";
import LandingSkills from "../components/LandingPage/LandingSkills";
import RecommendationCard from "../components/RecommendCard";
import AboutMe from "../components/AboutMe";

function LandingPage() {
  return (
    <>
      <LandingHeader />
      <div className="max-w-[1440px] mx-auto">
        <AboutMe />
        <RecommendationCard
          image="https://via.placeholder.com/150"
          name="Vincenzo Aglieri Rinella"
          title="Project Manager at Calashock"
          quote="Carlo's dedication to clean code and best practices made collaborating on projects a breeze. He was always eager to learn and share knowledge, fostering a positive and productive team environment. I'm confident that Carlo will be a valuable asset to any team. I highly recommend him for any front-end development roles."
          year="2023"
        />
        <LandingSkills />
        <LandingPortfolio />
      </div>
    </>
  );
}

export default LandingPage;
