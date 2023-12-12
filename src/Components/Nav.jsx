import { NavLink, Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <header className="fixed top-0 w-full z-50 bg-pink-100 border-b-2 border-white rounded-md px-4">
        <div className="w-4/5 m-auto flex justify-between items-center gap-8 my-2">
          <Link to="/" className="text-4xl font-bold">
            MUZADDE TODAY
          </Link>

          <div className="flex justify-end items-center gap-8 font-bold">
            <nav>
              <ul className="flex flex-wrap list-none justify-center gap-8 text-2xl">
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/askExp">Ask-Expert</NavLink>
                </li>
                <li>
                  <NavLink to="/talk">Talk</NavLink>
                </li>
                <li>
                  <NavLink to="/blogs">Blogs</NavLink>
                </li>
                <li>
                  <NavLink to="/muzadde-Plus-page">Muzadde-Plus</NavLink>
                </li>
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              <Link to="/login">
                <button className="bg-gray-500 text-white px-6 rounded h-12 hover:bg-green-200 hover:text-black duration-300 shadow-xl">
                  Log In
                </button>
              </Link>

              <button className="bg-gray-500 text-white px-4 rounded h-12 hover:bg-blue-200 hover:text-white duration-300 shadow-xl">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Nav;
