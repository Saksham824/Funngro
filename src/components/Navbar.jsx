import React, { useState } from "react";
import fungro from "../assets/funngro-logo.svg";
import android from "../assets/android.png";
import ios from "../assets/ios.png";
import rightArrow from "../assets/arrow-right.png";
import arrow from "../assets/arrow.png";
import { NavLink, Link } from "react-router-dom";
import menu from "../assets/menu.png";
import close from "../assets/close.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Top Announcement Bar */}
      <p className="bg-[#07ab67] pt-[.5rem] pb-[.5rem] text-[15px] font-semibold text-white text-center">
        As seen on Shark Tank India … loved by Teens, loved by parents, loved by
        companies and now loved by Sharks
      </p>

      {/* Main Navbar */}
      <div className="flex justify-between items-center px-4 py-3 md:px-8">
        {/* Logo */}
        <Link to="/">
          <img src={fungro} alt="Funngro Logo" className="h-[40px]" />
        </Link>

        {/* Menu/Close Icon - Mobile Only */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden focus:outline-none"
        >
          <img
            src={isOpen ? close : menu}
            alt="Menu Icon"
            className="w-6 h-6"
          />
        </button>

        {/* Full Menu - Only on Large Screens */}
        <div className="hidden lg:flex gap-[16px] items-center">
          <NavLink
            to="/teen"
            className={({ isActive }) =>
              `py-[.5rem] px-[1rem] text-[18px] ${
                isActive ? "text-[#47c480] font-semibold" : "Teen"
              }`
            }
          >
            Teen
          </NavLink>
          <NavLink
            to="/company"
            className={({ isActive }) =>
              `py-[.5rem] px-[1rem] text-[18px] ${
                isActive ? "text-[#47c480] font-semibold" : "Company"
              }`
            }
          >
            Company
          </NavLink>
          <p className="py-[.5rem] px-[1rem] text-[18px]">Shelancer</p>
          <img
            className="h-[45px] py-[.5rem] px-[1rem]"
            src={android}
            alt="Android"
          />
          <img className="h-[45px] py-[.5rem] px-[1rem]" src={ios} alt="iOS" />
          <div className="bg-white rounded-[50px] flex items-center">
            <button className="text-[#47c480] text-[17px] py-[.5rem] px-[1rem] font-[600]">
              Company Login
            </button>
            <img src={rightArrow} className="w-[30px] mr-3" alt="Right Arrow" />
          </div>
          <div className="bg-[#47c480] rounded-[50px] flex items-center">
            <button className="text-white text-[17px] py-[.5rem] px-[1rem] font-[600]">
              Earn Now
            </button>
            <img src={arrow} className="w-[25px] mr-4" alt="Arrow" />
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="lg:hidden flex flex-col items-start gap-4  px-6 py-4 rounded-lg shadow-md mx-4">
          <Link
            to="/teen"
            className="text-[18px]"
            onClick={() => setIsOpen(false)}
          >
            Teen
          </Link>
          <Link
            to="/company"
            className="text-[18px]"
            onClick={() => setIsOpen(false)}
          >
            Company
          </Link>
          <p className="text-[18px]">Shelancer</p>
          <div className="flex gap-[20px]">
            <img className="h-[40px]" src={android} alt="Android" />
            <img className="h-[40px]" src={ios} alt="iOS" />
          </div>
          <div className="bg-white w-[100%] rounded-[50px] flex items-center">
            <button className="text-[#47c480] text-[17px] py-[.5rem] px-[1rem] font-[600] m-auto flex">
              Company Login
              <img
                src={rightArrow}
                className="w-[30px] mr-3"
                alt="Right Arrow"
              />
            </button>
          </div>
          <div className="bg-[#47c480] rounded-[50px] flex items-center w-[100%]">
            <button className="text-white text-[17px] py-[.5rem] px-[1rem] font-[600] m-auto flex gap-3">
              Earn Now
              <img src={arrow} className="w-[25px] mr-4" alt="Arrow" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
