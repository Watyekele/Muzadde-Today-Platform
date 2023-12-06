import { NavLink, Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <header className=" w-4/5 m-auto flex justify-between text-center items-center gap-8 bg-pink-100 my-2 border-2 border-white  rounded-md px-4">
        <Link to="/">
          <div className="logo font-bold text-2xl">
            Muzadde <span className="text-green-900">Today</span>
          </div>
        </Link>

        <div>
          <nav>
            <ul className="flex flex-wrap list-none justify-center gap-8 text-3xl ">
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
        </div>

        <div className="flex justify-end items-center m-4 ml-10 w-3/10 gap-4 font-bold ">
          <Link to="/login">
            {" "}
            <button className="bg-gray-500 text-white px-6  rounded h-12 hover:bg-green-200 hover:text-black duration-300 shadow-xl">
              Log In
            </button>
          </Link>

          <button className="ml-2 bg-gray-500 text-white px-4  rounded h-12 hover:bg-blue-200 hover:text-white duration-300 shadow-xl">
            Sign Up
          </button>
        </div>
      </header>

      {/* <Routes>
          <Route path="/Blogs" element={<Blogs />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/FAQ" element={<FAQ />} />
        </Routes> */}
    </div>
  );
}
export default Nav;
