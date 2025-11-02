import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const Nav1 = ({
  add,
  linkAdd,
  navBgColor,
  bgMobileNav,
  pNavAdd,
  navBgDropDown,
  translateLeft,
  translateLeftMobile,
  btnPorto,
  setBtnPorto,
  menuOpen,
  setMenuOpen,
}) => {
  const Dropdown = ({
    navBgDropDown,
    wDropDown,
    tinggiDropDown,
    translateLeft,
    translateLeftMobile,
  }) => {
    return (
      <div className={`relative w-full `}>
        <div
          className={`absolute z-10 top-5 ${translateLeft} ${translateLeftMobile} ${navBgDropDown} ${wDropDown} ${tinggiDropDown} rounded-xl h-auto px-4 flex flex-wrap gap-6 gap-y-3 poppins-semibold shadow-2xl`}
        >
          <a
            onClick={() => navigate("/memorize")}
            className={`grid grid-cols-1 cursor-pointer`}
          >
            <span className="">Memorize</span>{" "}
            <span className={`font-light`}>Web yang berisi kenangan</span>
          </a>
          <a
            onClick={() => navigate("/dash")}
            className={`grid grid-cols-1 cursor-pointer`}
          >
            <span>Dashboard</span>{" "}
            <span className="font-light ">Simple Dashboard</span>
          </a>

          <a
            onClick={() => navigate("/edunas")}
            className={`grid grid-cols-1 cursor-pointer`}
          >
            <span>Nasionalisme Education</span>{" "}
            <span className="font-light ">Nasinoalisme Education</span>
          </a>
          <a
            onClick={() => navigate("/chatapp")}
            className=" grid grid-cols-1 cursor-pointer"
          >
            <span>ChatApp </span>
            <span className={`grid grid-cols-1 font-light`}>coming soon</span>
          </a>

          <p href="" className={`flex flex-row`}>
            {pNavAdd}
          </p>
        </div>
      </div>
    );
  };
  const navigate = useNavigate();
  return (
    <>
      {" "}
      <nav
        className={`fixed w-full top-0 z-40 ${navBgColor} backdrop-blur px-6 py-3 rounded-full mt-4 flex items-center justify-between`}
      >
        <a href="/" className="flex items-center gap-2">
          <span className="text-2xl font-semibold">afrzl</span>
        </a>

        <ul
          className={`hidden md:flex gap-6 items-center text-sm poppins-reguler  `}
        >
          <li>
            <a
              className="hover:text-blue-500 cursor-pointer"
              onClick={() => navigate("/")}
            >
              Home
            </a>
          </li>

          <li>
            <a
              className="hover:text-blue-500 cursor-pointer"
              href="#show"
              onClick={() => setBtnPorto((a) => !a)}
            >
              Portofolio{" "}
              {(btnPorto && <span className="font-light mb-2">^</span>) || (
                <span className="font-light mb-3">v</span>
              )}
            </a>
            {btnPorto && (
              <Dropdown
                navBgDropDown={navBgDropDown}
                wDropDown={`w-96`}
                tinggiDropDown={`py-3`}
                translateLeft={translateLeft}
              />
            )}
          </li>
          <li>
            <a
              className="hover:text-blue-500 cursor-pointer"
              onClick={() => navigate("/")}
            >
              Contact me
            </a>
          </li>
          <li>
            <a
              className="hover:text-blue-500 cursor-pointer"
              onClick={() => navigate(linkAdd)}
            >
              {add}
            </a>
          </li>
        </ul>

        <button
          className="md:hidden "
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="menu"
        >
          <svg
            className="w-6 h-6 cursor-pointer"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </nav>
      {/* MOBILE MENU */}
      {menuOpen && (
        <div className={`md:hidden`}>
          <nav
            className={`fixed w-full top-15 z-40 ${navBgColor} backdrop-blur-xl px-6 py-5 flex items-center justify-between`}
          >
            <ul
              className={` grid grid-cols-1 gap-6 items-center text-sm poppins-reguler  `}
            >
              <li>
                <a
                  className="hover:text-blue-500 cursor-pointer "
                  onClick={() => {
                    setMenuOpen((c) => !c);
                    navigate("/");
                  }}
                >
                  Home
                </a>
              </li>

              <li className="">
                <a
                  className="hover:text-blue-500 cursor-pointer"
                  href="#show"
                  onClick={() => setBtnPorto((a) => !a)}
                >
                  Portofolio{" "}
                  {(btnPorto && <span className="font-light mb-2">^</span>) || (
                    <span className="font-light mb-2">v</span>
                  )}
                </a>
                {btnPorto && (
                  <div className="md:hidden">
                    <Dropdown
                      navBgDropDown={navBgDropDown}
                      wDropDown={`w-96`}
                      tinggiDropDown={`py-3`}
                      translateLeft={""}
                      translateLeftMobile={"-ml-3"}
                    />
                  </div>
                )}
              </li>
              <li>
                <a
                  className="hover:text-blue-500 cursor-pointer"
                  onClick={() => navigate("/")}
                >
                  Contact me
                </a>
              </li>
              <li>
                <a
                  className="hover:text-blue-500 cursor-pointer"
                  onClick={() => navigate(linkAdd)}
                >
                  {add}
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};

export default Nav1;
