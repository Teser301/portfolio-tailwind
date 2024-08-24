import React from "react";
import { router } from "./Routes/Routes.tsx";
import { RouterProvider } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer.tsx";

function App() {
  return (
    <div className="bg-gray-100 dark:bg-gray-900">
      <NavBar />
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
      <Footer />
    </div>
  );
}

export default App;
