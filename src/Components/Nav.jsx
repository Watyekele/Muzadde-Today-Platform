import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Nav() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 m-auto w-full bg-white border-b-2 border-gray-300 shadow-md">
      <div className="container mx-16 justify-between flex items-center h-16">
        <Link to="/" className="text-3xl font-bold ml-2 pl-2 text-gray-800">
          Muzadde Today
        </Link>

        {/* Hamburger Menu Button */}
        <div className="lg:hidden">
          {isMenuOpen ? (
            <FaTimes onClick={toggleMenu} className="text-2xl" />
          ) : (
            <FaBars onClick={toggleMenu} className="text-2xl" />
          )}
        </div>

        {/* Navigation Links */}
        <nav
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } lg:flex items-center gap-8 font-bold pl-20`}
        >
          <ul className="flex list-none gap-8 text-lg items-center">
            <li>
              <NavLink
                exact
                to="/"
                className="text-gray-700 hover:text-blue-500"
                activeClassName="border-b-2 border-blue-500"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/askExp"
                className="text-gray-700 hover:text-blue-500"
                activeClassName="border-b-2 border-blue-500"
              >
                Ask-Expert
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/talk"
                className="text-gray-700 hover:text-blue-500"
                activeClassName="border-b-2 border-blue-500"
              >
                Talk
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blogs"
                className="text-gray-700 hover:text-blue-500"
                activeClassName="border-b-2 border-blue-500"
              >
                Blogs
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/muzadde-Plus-page"
                className="text-gray-700 hover:text-blue-500"
                activeClassName="border-b-2 border-blue-500"
              >
                Muzadde-Plus
              </NavLink>
            </li>
          </ul>

          <div className="flex items-center gap-4">
            <Link to="/login">
              <button className="text-white bg-gray-500 px-6 py-2 rounded hover:bg-green-200 hover:text-black transition duration-300 shadow-md">
                Log In
              </button>
            </Link>

            <Link to="/signup">
              <button className="text-white bg-gray-500 px-4 py-2 rounded hover:bg-blue-200 hover:text-white transition duration-300 shadow-md">
                Sign Up
              </button>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Nav;
