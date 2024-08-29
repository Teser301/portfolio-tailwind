import { useEffect, useState } from "react";
import { FaMoon, FaSun, FaHome } from "react-icons/fa"; // Import FaHome for the Home icon

function NavBar() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header className="flex justify-between items-center p-5 w-full border-b-2 border-black dark:border-white border-b-dPrimary">
      <div className="flex items-center">
        <a href="/" className="text-black dark:text-white flex items-center">
          <FaHome className="mr-2" /> {/* Home icon */}
          Home
        </a>
      </div>
      <div className="flex items-center">
        <a href="/projects" className="text-black dark:text-white mr-4">
          Portfolio {/* or 'Projects' if you prefer */}
        </a>
        <button
          onClick={toggleTheme}
          className="p-2 text-black dark:text-white"
        >
          {theme === "dark" ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </header>
  );
}

export default NavBar;
