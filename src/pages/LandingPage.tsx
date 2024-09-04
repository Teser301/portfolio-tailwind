import LandingHeader from "../components/LandingPage/LandingHeader";
import LandingPortfolio from "../components/LandingPage/LandingPortfolio";
import Timeline from "../components/Timeline";
import LandingSkills from "../components/LandingPage/LandingSkills";
import RecommendationCard from "../components/RecommendCard";
function LandingPage() {
  return (
    <>
      <LandingHeader />
      <div className="p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4  text-black dark:text-white">
            About
          </h1>
          <div className="relative pl-6">
            <p className="pl-4 text-black dark:text-white">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Architecto fugiat, consequuntur itaque aliquid sapiente aut
              laudantium neque atque, molestiae nobis dignissimos quia beatae
              eligendi ducimus fugit, similique dolores! Iusto, mollitia?
            </p>
          </div>
        </div>
      </div>
      <LandingSkills />
      <LandingPortfolio />
      <Timeline />
      <RecommendationCard
        image="https://via.placeholder.com/150"
        name="Vincenzo Aglieri Rinella"
        title="Project Manager at Calashock"
        quote="Carlo's dedication to clean code and best practices made collaborating on projects a breeze. He was always eager to learn and share knowledge, fostering a positive and productive team environment. I'm confident that Carlo will be a valuable asset to any team. I highly recommend him for any front-end development roles."
        year="2023"
      />
    </>
  );
}

export default LandingPage;
