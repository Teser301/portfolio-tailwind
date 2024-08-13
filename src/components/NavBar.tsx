import { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";

function NavBar() {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");

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
      <div>
        <a href="https://www.linkedin.com/in/carlo-aavekukk-22b92b1b2/" className="text-black dark:text-white">
          Carlo
        </a>
      </div>
      <div>
        <a href="/home" className="text-black dark:text-white">
          Content
        </a>
        <button onClick={toggleTheme} className="ml-4 p-2 text-black dark:text-white">
          {theme === "dark" ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </header>
  );
}

export default NavBar;
