// React Hooks
import { useState, lazy, useEffect, Suspense } from "react";

// React Router Dom
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Outlet,
} from "react-router";
import { useLocation } from "react-router";

import { FadeLoader } from "react-spinners";
const Home = lazy(() => import("./Pages/Home"));
const Projects = lazy(() => import("./Pages/Projects"));
const Navbar = lazy(() => import("./Components/Navbar"));
const Footer = lazy(() => import("./Components/Footer"));

// Styles
import "./App.css";

// LightRays With React Bits
import LightRays from "./Components/LightRays";

const Layout = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <>
      {["top-right", "top-left"].map((origin, idx) => (
        <LightRays
          key={idx}
          raysOrigin={origin}
          raysColor="#00ffff"
          raysSpeed={1.5}
          lightSpread={1.5}
          rayLength={3.0}
          followMouse
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="fixed h-screen w-screen -z-10 pointer-events-none"
        />
      ))}

      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setLoading(false);
    }, 3500);
    return () => clearTimeout(timeOut);
  }, []);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="projects" element={<Projects />} />
      </Route>
    )
  );
  return (
    <div>
      {loading ? (
        <div className="flex items-center justify-center h-[100vh] bg-gradient-to-l from-[#0D1B2A] to-[#0A0F1F]">
          <h1 className="name text-[40px] font-serif md:text-7xl ">
            {"OMAR KAMAL".split("").map((ch, i) => (
              <span key={i} className={ch === " " ? "mx-2" : ""}>
                {ch}
              </span>
            ))}
          </h1>
        </div>
      ) : (
        <Suspense
          fallback={
            <div className="bg-[#0A0F1F] h-[100vh] flex items-center justify-center">
              <FadeLoader color="#FF6F91" />
            </div>
          }
        >
          <RouterProvider router={router} />
        </Suspense>
      )}
    </div>
  );
};

export default App;
