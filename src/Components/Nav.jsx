import { NavLink, Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <header className=" w-4/5 m-auto flex justify-center text-center items-center gap-8 bg-pink-100 my-2 border-2 border-white  rounded-md px-4">
        <div>
          <nav>
            <ul className="flex flex-wrap list-none justify-center gap-8 text-2xl ">
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

        <div className="flex justify-end items-center m-4 ml-10 w-3/10">
          <button className="bg-gray-500 text-white px-4  rounded">
            Log In
          </button>
          <button className="ml-2 bg-gray-500 text-white px-4  rounded">
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
