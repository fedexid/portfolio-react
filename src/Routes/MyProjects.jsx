import MainLayout from "../components/MainLayout";
import ProjectCards from "../components/ProjectCards";
import uiux_portfolio from "../assets/uiux_portfolio.png";
import sertif_ss from "../assets/FE.png";
import uiux from "../assets/UIUX_Portfolio.pdf";
import Certificate from "../assets/Certificate.pdf";

const Projects = [
  {
    id: 1,
    image:
      "https://github.com/niesdi/html-css-js-todo-list/raw/main/assets/image.png",
    name: "Simple Todo List Web Application",
    description:
      "This is a Simple Todo List created using HTML, CSS, and Javascript",
    linkURL: "https://github.com/niesdi/html-css-js-todo-list",
  },
  {
    id: 2,
    image:
      "https://github.com/niesdi/html-css-calculator/raw/main/images/calculator-screenshot.png",
    name: "Calculator Web Design",
    description: "This is a simple HTML CSS Calculator Design",
    linkURL: "https://github.com/niesdi/html-css-calculator",
  },
  {
    id: 3,
    image: uiux_portfolio,
    name: "UI/UX Portfolio",
    description: "This is my UI/UX Related Work",
    linkURL: uiux,
  },
  {
    id: 4,
    image: sertif_ss,
    name: "Certificates",
    description:
      "These are all the Certifications from all the courses/training/programs/tests that I completed",
    linkURL: Certificate,
  },
];

const MyProjects = () => {
  return (
    <MainLayout>
      <div className="grid gap-4 bg-main py-4 sm:grid-cols-2 lg:h-full lg:grid-cols-4 lg:overflow-auto">
        {Projects.map((project) => (
          <ProjectCards
            key={project.id}
            image={project.image}
            name={project.name}
            description={project.description}
            linkURL={project.linkURL}
          />
        ))}
      </div>
    </MainLayout>
  );
};

export default MyProjects;
