import { useEffect, useState } from "react";
import { FaMoon, FaSun, FaHome } from "react-icons/fa";

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
    <header className="fixed flex justify-between items-center p-5 w-full bg-backgroundPrimary shadow-md z-50">
      <div className="flex items-center">
        <a
          href="/"
          className="flex items-center transition-transform duration-300 hover:scale-110 hover:text-primary p-2  rounded"
        >
          <FaHome className="mr-2 w-8 h-8" />
        </a>
      </div>
      <div className="flex items-center">
        <a
          href="/projects"
          className="mr-4 transition-colors duration-300 hover:text-primary"
        >
          Projects
        </a>
        <a
          href="/about"
          className="mr-4 transition-colors duration-300 hover:text-primary"
        >
          About
        </a>
        <button
          onClick={toggleTheme}
          aria-label="Toggle between Dark and Light mode"
          className="p-2 transition-transform duration-300 hover:scale-110 hover:text-primary"
        >
          {theme === "dark" ? (
            <FaSun className="w-8 h-8" />
          ) : (
            <FaMoon className="w-8 h-8" />
          )}
        </button>
      </div>
    </header>
  );
}

export default NavBar;
