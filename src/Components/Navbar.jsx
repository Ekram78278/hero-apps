import { Link } from "react-router";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
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
            <li>
              <Link>Home</Link>
            </li>
            <li>
              <Link to="/allApps">Apps</Link>
            </li>
            <li>
              <Link to='/installList'>Installation</Link>
            </li>
          </ul>
        </div>
        <img src="/logo.png" alt="" className="w-10 h-10 ml-10" />
        <Link
          to="/"
          className="text-xl font-bold bg-[linear-gradient(125.07deg,#632EE3,#9F62F2)] bg-clip-text text-transparent"
        >
          HERO.IO
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <summary>
              {" "}
              <Link to="/allApps">Apps</Link>
            </summary>
          </li>
          <li>
            <Link to="/installList">Installation</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link
          to="https://github.com/Ekram78278/hero-apps.git"
          className="btn bg-[linear-gradient(125.07deg,#632EE3,#9F62F2)] ml-40 lg:ml-[720px] mt-3 hover:scale-105 transition ease-in-out text-white"
        >
          {" "}
          <img
            src="/public/github.png"
            className="bg-white rounded-full"
            alt=""
          />{" "}
          Contribute
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
