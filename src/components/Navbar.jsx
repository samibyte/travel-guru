import { Link, NavLink } from "react-router";
import logo from "../assets/logo-white.png";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink>News</NavLink>
      </li>
      <li>
        <NavLink>Destinations</NavLink>
      </li>
      <li>
        <NavLink>Blog</NavLink>
      </li>
      <li>
        <NavLink>Contact</NavLink>
      </li>
    </>
  );

  return (
    <div className="flex justify-between items-center gap-10">
      <div className="flex items-center">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link>
          <img className="w-30" src={logo} alt="" />
        </Link>
      </div>
      <div className="w-30 lg:w-96 text-white">
        <label className="input w-full bg-[rgba(256,256,256,0.2)] border-white ">
          <svg
            className="h-[1em] opacity-100"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            type="search"
            required
            placeholder="Search you destination..."
          />
        </label>
      </div>
      <div className=" text-white flex gap-16 items-center">
        <ul className="gap-16 font-medium px-1 hidden lg:flex">{links}</ul>
        <Link>
          <button className="btn btn-primary px-8">Login</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
