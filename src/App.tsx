import React from "react";
import { router } from "./Routes/Routes.tsx";
import { RouterProvider } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer.tsx";

function App() {
  return (
    <div className="bg-background text-text">
      <NavBar />
      <div className="pt-[72px]">
        <React.StrictMode>
          <RouterProvider router={router} />
        </React.StrictMode>
      </div>
      <Footer />
    </div>
  );
}

export default App;
