import ReactLogo from "../assets/react.svg";
import HTMLLogo from "../assets/html5.svg";
import CSSLogo from "../assets/css.svg";
import JSLogo from "../assets/javascript.svg";
import PythonLogo from "../assets/python.svg";
import Tailwind from "../assets/tailwind.svg";
import Wordpress from "../assets/wordpress.svg";

function LandingBody() {
  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">About</h1>
        <div className="relative pl-6">
          <span className="absolute left-0 top-1/2 w-10 h-1 bg-dPrimary transform -translate-y-1/2"></span>
          <p className="text-gray-600 pl-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto fugiat, consequuntur itaque aliquid sapiente aut laudantium neque atque, molestiae nobis dignissimos quia beatae
            eligendi ducimus fugit, similique dolores! Iusto, mollitia?
          </p>
        </div>
      </div>
      <div>
        <h1 className="text-center text-2xl font-semibold mb-6">Skills</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
          <div className="flex flex-col items-center border border-gray-200 p-4 rounded-lg shadow-lg bg-white w-72 hover:bg-dPrimary hover:border-gray-400 transition duration-300">
            <img src={ReactLogo} alt="React" className="w-16 h-16 mb-2" />
            <div className="text-lg font-medium">React</div>
          </div>
          <div className="flex flex-col items-center border border-gray-200 p-4 rounded-lg shadow-lg bg-white w-72 hover:bg-dPrimary hover:border-gray-400 transition duration-300">
            <div className="flex space-x-2 mb-2">
              <img src={HTMLLogo} alt="HTML" className="w-16 h-16" />
              <img src={CSSLogo} alt="CSS" className="w-16 h-16" />
            </div>
            <div className="text-lg font-medium">HTML & CSS</div>
          </div>
          <div className="flex flex-col items-center border border-gray-200 p-4 rounded-lg shadow-lg bg-white w-72 hover:bg-dPrimary hover:border-gray-400 transition duration-300">
            <img src={JSLogo} alt="JavaScript" className="w-16 h-16 mb-2" />
            <div className="text-lg font-medium">JavaScript</div>
          </div>
          <div className="flex flex-col items-center border border-gray-200 p-4 rounded-lg shadow-lg bg-white w-72 hover:bg-dPrimary hover:border-gray-400 transition duration-300">
            <img src={PythonLogo} alt="Python" className="w-16 h-16 mb-2" />
            <div className="text-lg font-medium">Python</div>
          </div>
          <div className="flex flex-col items-center border border-gray-200 p-4 rounded-lg shadow-lg bg-white w-72 hover:bg-dPrimary hover:border-gray-400 transition duration-300">
            <img src={Tailwind} alt="Tailwind" className="w-16 h-16 mb-2" />
            <div className="text-lg font-medium">Tailwind</div>
          </div>
          <div className="flex flex-col items-center border border-gray-200 p-4 rounded-lg shadow-lg bg-white w-72 hover:bg-dPrimary hover:border-gray-400 transition duration-300">
            <img src={Wordpress} alt="WordPress" className="w-16 h-16 mb-2" />
            <div className="text-lg font-medium">WordPress</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingBody;
