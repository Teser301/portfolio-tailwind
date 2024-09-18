import React from "react";
import { router } from "./Routes/Routes.tsx";
import { RouterProvider } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer.tsx";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
function App() {
  return (
    <div className="bg-background text-text">
      <NavBar />
      <div className="pt-[72px]">
        <React.StrictMode>
          <RouterProvider router={router} />
        </React.StrictMode>
      </div>
      <Analytics />
      <SpeedInsights />
      <Footer />
    </div>
  );
}

export default App;
