import { useState } from "react";
import { Link } from "react-router-dom";
import mh_logo from "../assets/images/mh_logo.svg";
const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(true);

  const toogleDropdown = () => {
    setDropdownOpen((dropOpened) => !dropOpened);
  };

  return (
    <div className="navbar relative bg-main py-4">
      <div className="navbar-start lg:w-fit">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            aria-label="Dropdown Button"
            className={`btn border-none lg:hidden ${dropdownOpen ? "bg-[#205467]" : "bg-[#143440]"}`}
            onClick={toogleDropdown}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          {!dropdownOpen && (
            <ul
              tabIndex={0}
              className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-[#143440] p-2 font-bold shadow"
            >
              <li>
                <Link className="p-4" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="p-4" to="/projects">
                  My Projects
                </Link>
              </li>
              <li>
                <Link className="p-4" to="/aboutme">
                  About Me
                </Link>
              </li>
            </ul>
          )}
        </div>

        <Link
          aria-label="MH Logo (Website Logo)"
          to="/"
          className="z-10 mx-2 inline-block"
        >
          <img
            src={mh_logo}
            alt="MH Logo"
            className="hidden h-12 min-h-10 w-12 min-w-14 object-contain transition ease-in-out hover:scale-110 lg:block"
          />
        </Link>
      </div>

      <div className="navbar-center absolute left-0 hidden w-full lg:flex lg:grow lg:justify-center">
        <ul className="menu menu-horizontal gap-4 px-1 font-bold">
          <li>
            <Link
              to="/"
              className="text-md p-2 transition ease-in-out hover:-translate-y-2 hover:scale-110 hover:text-blue-300 lg:text-lg"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className="text-md p-2 transition ease-in-out hover:-translate-y-2 hover:scale-110 hover:text-blue-300 lg:text-lg"
            >
              My Projects
            </Link>
          </li>
          <li>
            <Link
              to="/aboutme"
              className="text-md p-2 transition ease-in-out hover:-translate-y-2 hover:scale-110 hover:text-blue-300 lg:text-lg"
            >
              About Me
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
