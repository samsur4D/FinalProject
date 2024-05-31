import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FaCartPlus, FaListOl, FaPeopleGroup } from "react-icons/fa6";
import { ImHome3 } from "react-icons/im";
import { PiCalendarBold, PiListHeartFill } from "react-icons/pi";
import { FcRating } from "react-icons/fc";
import logo from "../assets/home/bistro-boss-resturant-high-resolution-logo-black-transparent.png";
import { BiListUl, BiSolidDish } from "react-icons/bi";
import useCart from "../Hooks/useCart";
import { MdContactSupport } from "react-icons/md";
import { GiConfirmed } from "react-icons/gi";
import useAdmin from "../Hooks/useAdmin";

const DashBoard = () => {
  const [cart] = useCart();
  const [isAdmin] = useAdmin();

  return (
    <div className="flex">
      <div className="w-76 min-h-screen bg-orange-500">
        <div className="flex flex-col items-center py-10 ">
          <img className="w-32 mb-5 " src={logo} alt="" />
          <h2 className="text-xl font-bold font-samu">Bistro Boss</h2>
          <h2 className="text-xl font-bold font-samu">Dash-Board</h2>
        </div>
        <div className="underline">______________________________________</div>
        <ul className="menu p-4 flex-col gap-5">
          {isAdmin ? (
            <>     <li className="flex items-center ">
            <NavLink
              to="/dashboard/adminHome"
              className="font-samu text-2xl font-bold"
            >
              {" "}
              <ImHome3 />
              Admin Home
            </NavLink>
          </li>
          <li className="flex items-center ">
            <NavLink
              to="/dashboard/additems"
              className="font-samu text-2xl font-bold"
            >
              {" "}
              <BiSolidDish />
              Add Items
            </NavLink>
          </li>
          <li className="flex items-center ">
            <NavLink
              to="/dashboard/manageitems"
              className="font-samu text-2xl font-bold"
            >
              {" "}
              <FaListOl />
              Manage Items
            </NavLink>
          </li>
          <li className="flex items-center ">
            <NavLink
              to="/dashboard/managebookings"
              className="font-samu text-2xl font-bold"
            >
              {" "}
              <GiConfirmed />
            Manage Bookings
            </NavLink>
          </li>
          <li className="flex items-center ">
            <NavLink
              to="/dashboard/usersAll"
              className="font-samu text-2xl font-bold"
            >
              {" "}
              <FaPeopleGroup />
             All Users
            </NavLink>
          </li> </> 
            // --+====__=-=-84374yuhg5
          ) : (
            <>
              {" "}
              <li className="flex items-center ">
                <NavLink
                  to="/dashboard/userHome"
                  className="font-samu text-2xl font-bold"
                >
                  {" "}
                  <ImHome3 />
                  User Home
                </NavLink>
              </li>
              <li className="flex items-center ">
                <NavLink
                  to="/dashboard/reservation"
                  className="font-samu text-2xl font-bold"
                >
                  {" "}
                  <PiCalendarBold />
                  Reservation
                </NavLink>
              </li>
              <li className="flex items-center ">
                <NavLink
                  to="/dashboard/cart"
                  className="font-samu text-2xl font-bold"
                >
                  {" "}
                  <FaCartPlus className="text-xl mr-2" />
                  My Cart ({cart.length})
                </NavLink>
              </li>
              <li className="flex items-center ">
                <NavLink
                  to="/dashboard/review"
                  className="font-samu text-2xl font-bold"
                >
                  {" "}
                  <FcRating />
                  Review
                </NavLink>
              </li>
              <li className="flex items-center ">
                <NavLink
                  to="/dashboard/bookings"
                  className="font-samu text-2xl font-bold"
                >
                  {" "}
                  <PiListHeartFill />
                  My Booking
                </NavLink>
              </li>{" "}
            </>
          )}
        </ul>
        {/* ----------------------------------------------------------------------------- */}
        <div className="underline mt-20">
          ______________________________________
        </div>

        <ul className=" menu ">
          <li className="flex items-center ">
            <NavLink
              to="/"
              className="font-samu flex items-center gap-2 text-2xl font-bold"
            >
              {" "}
              <ImHome3 />
              Home
            </NavLink>
          </li>

          <li className="flex items-center ">
            <NavLink
              to="/menu"
              className="font-samu flex items-center gap-2 text-2xl font-bold"
            >
              {" "}
              <BiListUl />
              Menu
            </NavLink>
          </li>

          <li className="flex items-center ">
            <NavLink
              to="/menu"
              className="font-samu flex items-center gap-2 text-2xl font-bold"
            >
              {" "}
              <MdContactSupport />
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1 p-10">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashBoard;
