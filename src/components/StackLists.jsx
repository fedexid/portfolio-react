import HTML_logo from "../assets/HTML_logo.svg";
import CSS_logo from "../assets/CSS_logo.svg";
import JS_logo from "../assets/JS_logo.svg";
import React_logo from "../assets/react.svg";
import TailwindCSS_logo from "../assets/TailwindCSS_logo.svg";
import Git_logo from "../assets/Git_logo.svg";
import Java_logo from "../assets/Java_logo.svg";
import MySQL_logo from "../assets/MySQL_logo.svg";

const Lists = [
  {
    id: 1,
    logo: HTML_logo,
    alt: "html logo",
  },
  {
    id: 2,
    logo: CSS_logo,
    alt: "css logo",
  },
  {
    id: 3,
    logo: JS_logo,
    alt: "js logo",
  },
  {
    id: 4,
    logo: React_logo,
    alt: "react logo",
  },
  {
    id: 5,
    logo: TailwindCSS_logo,
    alt: "tailwind logo",
  },
  {
    id: 6,
    logo: Git_logo,
    alt: "git logo",
  },
  {
    id: 7,
    logo: Java_logo,
    alt: "java logo",
  },
  {
    id: 8,
    logo: MySQL_logo,
    alt: "mysql logo",
  },
];

const StackLists = () => {
  return (
    <>
      {Lists.map((list) => (
        <li
          key={list.id}
          className="h-14 w-14 transition ease-in-out hover:scale-110 lg:h-24 lg:w-24"
        >
          <img className="h-full w-full" src={list.logo} alt={list.alt} />
        </li>
      ))}
    </>
  );
};

export default StackLists;
