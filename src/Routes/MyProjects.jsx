import MainLayout from "../components/MainLayout";
import ProjectCards from "../components/ProjectCards";
import uiux_portfolio from "../assets/images/uiux_portfolio.png";
import sertif_ss from "../assets/images/FE.png";
import uiux from "../assets/pdfs/UIUX_Portfolio.pdf";
import ReactTodo from "../assets/images/ReactTodoLists.webp";
import StudentPortal from "../assets/images/StudentPortal.webp";
import HTMLTodoList from "../assets/images/TodoLists.webp";
import CalculatorDesign from "../assets/images/CalculatorDesign.webp";
import Certificate from "../assets/pdfs/Certificate.pdf";

import { motion } from "framer-motion";

const Projects = [
  {
    id: 1,
    image: ReactTodo,
    name: "React Todo List",
    description:
      "This is a React Todo List with the uses of API for the task list",
    linkURL: "https://github.com/fedexid/react-todolist",
  },
  {
    id: 2,
    image: StudentPortal,
    name: "Student Portal",
    description: "This is a Student Portal App with JSON Server as the data",
    linkURL: "https://github.com/fedexid/student-portal",
  },
  {
    id: 3,
    image: HTMLTodoList,
    name: "Simple Todo List Web Application",
    description:
      "This is a Simple Todo List created using HTML, CSS, and Javascript",
    linkURL: "https://github.com/fedexid/html-css-js-todo-list",
  },
  {
    id: 4,
    image: CalculatorDesign,
    name: "Calculator Web Design",
    description: "This is a simple HTML CSS Calculator Design",
    linkURL: "https://github.com/fedexid/html-css-calculator",
  },
  {
    id: 5,
    image: uiux_portfolio,
    name: "UI/UX Portfolio",
    description: "This is my UI/UX Related Work",
    linkURL: uiux,
  },
  {
    id: 6,
    image: sertif_ss,
    name: "Certificate",
    description:
      "This is a certificate in frontend engineering that I achieved",
    linkURL: Certificate,
  },
];

const MyProjects = () => {
  return (
    <MainLayout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeOut" } }}
        className="grid gap-4 bg-main py-4 sm:grid-cols-2 lg:h-full lg:grid-cols-4 lg:overflow-auto"
      >
        {Projects.map((project) => (
          <ProjectCards
            key={project.id}
            image={project.image}
            name={project.name}
            description={project.description}
            linkURL={project.linkURL}
          />
        ))}
      </motion.div>
    </MainLayout>
  );
};

export default MyProjects;
