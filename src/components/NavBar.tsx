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
    <header className="fixed flex justify-between items-center p-5 w-full bg-background shadow-md z-50">
      <div className="flex items-center">
        <a href="/" className="flex items-center">
          <FaHome className="mr-2" />
          Home
        </a>
      </div>
      <div className="flex items-center">
        <a href="/projects" className="mr-4">
          Projects
        </a>
        <a href="/about" className="mr-4">
          About
        </a>
        <button onClick={toggleTheme} className="p-2">
          {theme === "dark" ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </header>
  );
}

export default NavBar;
