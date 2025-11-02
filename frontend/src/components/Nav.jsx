import React, { useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-6xl bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm flex items-center justify-between">
      <div className="flex items-center gap-4">
        <h2 className="text-lg font-semibold">afrzl</h2>
      </div>

      <div className={`hidden md:flex gap-6 items-center text-sm`}>
        <ul>
          <li className="relative group">
            <button className="flex ">Portofolio</button>
            <div
              className="content-dropdown hidden absolute left-1/2 -translate-x-1/2 pt-3
  bg-white/90 backdrop-blur-md shadow-2xl rounded-xl py-3 px-6
  group-hover:flex flex-wrap justify-center gap-x-6 gap-y-3 w-max max-w-[80vw]
  opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 
  transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] overflow-y-auto max-h-[60vh]"
            >
              <a
                href="/upa"
                className="hover:underline whitespace-nowrap px-3 py-1 rounded-md hover:bg-gray-100 transition"
              >
                Upa
              </a>
              <a
                href="/dashboard"
                className="hover:underline whitespace-nowrap px-3 py-1 rounded-md hover:bg-gray-100 transition"
              >
                Dashboard
              </a>
              <a
                href="/chatapp"
                className="hover:underline whitespace-nowrap px-3 py-1 rounded-md hover:bg-gray-100 transition"
              >
                Chatapp
              </a>
              <a
                href="/store"
                className="hover:underline whitespace-nowrap px-3 py-1 rounded-md hover:bg-gray-100 transition"
              >
                Store
              </a>

              <a
                href="/research"
                className="hover:underline whitespace-nowrap px-3 py-1 rounded-md hover:bg-gray-100 transition"
              >
                Research
              </a>
              <a
                href="/ai-lab"
                className="hover:underline whitespace-nowrap px-3 py-1 rounded-md hover:bg-gray-100 transition"
              >
                AI <span className="font-light text-sm "> (Coming Soon)</span>
              </a>
            </div>
          </li>
        </ul>
      </div>

      <div className="flex items-center gap-4">
        <a
          className="hidden md:inline-block px-4 py-2 rounded-full bg-white text-sm shadow"
          href="/fromdaftar.html"
        >
          Daftar
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-2 rounded-md bg-white/30"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* mobile menu */}
      {open && (
        <div className="absolute left-1/2 transform -translate-x-1/2 top-16 w-11/12 bg-white rounded-xl shadow-lg p-4 md:hidden">
          <ul className="flex flex-col gap-2">
            <li className="relative group">
              <button className="flex ">Portofolio</button>
              <div
                className="content-dropdown block absolute left-1/2 -translate-x-1/2 pt-3
  bg-white/90 backdrop-blur-md shadow-2xl rounded-xl py-3 px-6
  group-hover:flex flex-wrap justify-center gap-x-6 gap-y-3 w-max max-w-[80vw]
  opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 
  transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] overflow-y-auto max-h-[60vh] "
              >
                <a
                  href="/upa"
                  className="hover:underline whitespace-nowrap px-3 py-1 rounded-md hover:bg-gray-100 transition"
                >
                  Upa
                </a>
                <a
                  href="/dashboard"
                  className="hover:underline whitespace-nowrap px-3 py-1 rounded-md hover:bg-gray-100 transition"
                >
                  Dashboard
                </a>
                <a
                  href="/chatapp"
                  className="hover:underline whitespace-nowrap px-3 py-1 rounded-md hover:bg-gray-100 transition"
                >
                  Chatapp
                </a>
                <a
                  href="/store"
                  className="hover:underline whitespace-nowrap px-3 py-1 rounded-md hover:bg-gray-100 transition"
                >
                  Store
                </a>

                <a
                  href="/research"
                  className="hover:underline whitespace-nowrap px-3 py-1 rounded-md hover:bg-gray-100 transition"
                >
                  Research
                </a>
                <a
                  href="/ai-lab"
                  className="hover:underline whitespace-nowrap px-3 py-1 rounded-md hover:bg-gray-100 transition"
                >
                  AI <span className="font-light text-sm "> (Coming Soon)</span>
                </a>
              </div>
            </li>
            <li>
              <a
                className="block p-2 rounded bg-brand text-white text-center"
                href="/fromdaftar.html"
              >
                Daftar
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
