import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Routes/Home";
import MyProjects from "./Routes/MyProjects";
import AboutMe from "./Routes/AboutMe";

import { AnimatePresence } from "framer-motion";

const App = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<MyProjects />} />
        <Route path="/aboutme" element={<AboutMe />} />
      </Routes>
    </AnimatePresence>
  );
};

export default App;
