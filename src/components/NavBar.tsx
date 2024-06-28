import { useEffect, useState } from "react";

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
    <header className="flex justify-between items-center p-5 w-full dark:bg-background border-b-2 border-b-dPrimary">
      <div>
        <a href="https://www.linkedin.com/in/carlo-aavekukk-22b92b1b2/">Carlo</a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/carlo-aavekukk-22b92b1b2/">Content</a>
        <button onClick={toggleTheme} className="ml-4 p-2 bg-gray-200 dark:bg-gray-800 dark:text-gray-200">
          {theme === "dark" ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </header>
  );
}

export default NavBar;
