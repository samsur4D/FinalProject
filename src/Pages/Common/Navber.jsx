import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/home/bistro-boss-resturant-high-resolution-logo-white (1).png";
import { AuthContext } from "../../Providers/AuthProvider";
import { BsCartPlusFill } from "react-icons/bs";
import useCart from "../../Hooks/useCart";

const Navber = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();

  const handelLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };



  const navItems = (
    <>
      <Link
        to="/"
        href="#_"
        class="px-5 py-2.5 mr-3 font-medium bg-blue-50 hover:bg-blue-100 hover:text-blue-600 text-blue-500 rounded-lg text-sm"
      >
        Home
      </Link>
      <Link
        to="/contact"
        href="#_"
        class="px-5 py-2.5 mr-3 font-medium bg-blue-50 hover:bg-blue-100 hover:text-blue-600 text-blue-500 rounded-lg text-sm"
      >
        Contact Us
      </Link>
      <Link
        to="/menu"
        href="#_"
        class="px-5 py-2.5 mr-3 font-medium bg-blue-50 hover:bg-blue-100 hover:text-blue-600 text-blue-500 rounded-lg text-sm"
      >
        Our Menu
      </Link>
      <Link
        to="/order/salad"
        href="#_"
        class="px-5 py-2.5 mr-3 font-medium bg-blue-50 hover:bg-blue-100 hover:text-blue-600 text-blue-500 rounded-lg text-sm"
      >
        Order Food
      </Link>
      <Link
        to="/dashboard/cart"
        href="#_"
        class=""
      >
        <button className="btn">
        <BsCartPlusFill className="text-2xl"/>
          <div className="badge badge-secondary">+{cart.length}</div>
        </button>
      </Link>
    </>
  );

  return (
    <div className="navbar  fixed z-10 h-24 bg-opacity-30 text-white bg-black">
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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {/* ----------------- */}
            {navItems}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">
          <img className="w-16 rounded-full " src={logo} alt="" />
          <div>
            <h2 className="font-samu underline">Bistro Boss</h2>
            <h4 className="font-samu">Resturant</h4>
          </div>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {/* ------------------------- */}
          {navItems}
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <span>
              <img
                src={user.photoURL}
                className="w-12 h-12 rounded-full"
                alt=""
              />
            </span>
            <button onClick={handelLogOut} className="btn btn-info ml-3">
              Logout
            </button>{" "}
          </>
        ) : (
          <>
            <Link
              to="/login"
              href="#_"
              class="px-5 py-2.5 mr-3 ml-3 font-medium bg-blue-50 hover:bg-blue-100 hover:text-blue-600 text-blue-500 rounded-lg text-sm"
            >
              Login
            </Link>

            <Link
              to="/register"
              href="#_"
              class="px-5 py-2.5  font-medium bg-blue-50 hover:bg-blue-100 hover:text-blue-600 text-blue-500 rounded-lg text-sm"
            >
              Register
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navber;
