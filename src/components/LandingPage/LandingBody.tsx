import ReactLogo from "../../assets/icons/react.svg";
import HTMLLogo from "../../assets/icons/html5.svg";
import CSSLogo from "../../assets/icons/css.svg";
import JSLogo from "../../assets/icons/javascript.svg";
import PythonLogo from "../../assets/icons/python.svg";
import Tailwind from "../../assets/icons/tailwind.svg";
import Wordpress from "../../assets/icons/wordpress.svg";

function LandingBody() {
  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4  text-customGrayText dark:text-white">About</h1>
        <div className="relative pl-6">
          <p className="pl-4 text-customGrayText dark:text-white">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto fugiat, consequuntur itaque aliquid sapiente aut laudantium neque atque, molestiae nobis dignissimos quia beatae
            eligendi ducimus fugit, similique dolores! Iusto, mollitia?
          </p>
        </div>
      </div>
      <div>
        <h1 className="text-center text-2xl font-semibold mb-6 text-customGrayText dark:text-white">Skills</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
          <div className="flex flex-col items-center p-4 rounded-lg shadow-lg bg-white dark:bg-customGrayLight w-72 hover:bg-dPrimary hover:border-gray-400 transition duration-300">
            <img src={ReactLogo} alt="React" className="w-16 h-16 mb-2" />
            <p className="text-lg font-medium text-customGrayText dark:text-white">React</p>
          </div>
          <div className="flex flex-col items-center p-4 rounded-lg shadow-lg bg-white dark:bg-customGrayLight w-72 hover:bg-dPrimary hover:border-gray-400 transition duration-300">
            <div className="flex space-x-2 mb-2">
              <img src={HTMLLogo} alt="HTML" className="w-16 h-16" />
              <img src={CSSLogo} alt="CSS" className="w-16 h-16" />
            </div>
            <p className="text-lg font-medium text-customGrayText dark:text-white">HTML & CSS</p>
          </div>
          <div className="flex flex-col items-center p-4 rounded-lg shadow-lg bg-white dark:bg-customGrayLight w-72 hover:bg-dPrimary hover:border-gray-400 transition duration-300">
            <img src={JSLogo} alt="JavaScript" className="w-16 h-16 mb-2" />
            <p className="text-lg font-medium text-customGrayText dark:text-white">JavaScript</p>
          </div>
          <div className="flex flex-col items-center p-4 rounded-lg shadow-lg bg-white dark:bg-customGrayLight w-72 hover:bg-dPrimary hover:border-gray-400 transition duration-300">
            <img src={PythonLogo} alt="Python" className="w-16 h-16 mb-2" />
            <p className="text-lg font-medium text-customGrayText dark:text-white">Python</p>
          </div>
          <div className="flex flex-col items-center p-4 rounded-lg shadow-lg bg-white dark:bg-customGrayLight w-72 hover:bg-dPrimary hover:border-gray-400 transition duration-300">
            <img src={Tailwind} alt="Tailwind" className="w-16 h-16 mb-2" />
            <p className="text-lg font-medium text-customGrayText dark:text-white">Tailwind</p>
          </div>
          <div className="flex flex-col items-center p-4 rounded-lg shadow-lg bg-white dark:bg-customGrayLight w-72 hover:bg-dPrimary hover:border-gray-400 transition duration-300">
            <img src={Wordpress} alt="WordPress" className="w-16 h-16 mb-2" />
            <p className="text-lg font-medium text-customGrayText dark:text-white">WordPress</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingBody;
