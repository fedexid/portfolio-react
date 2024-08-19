import { Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import MyProjects from "./Routes/MyProjects";
import AboutMe from "./Routes/AboutMe";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<MyProjects />} />
      <Route path="/aboutme" element={<AboutMe />} />
    </Routes>
  );
};

export default App;
