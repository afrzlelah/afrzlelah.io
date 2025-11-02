/*
  Upa.jsx - Versi 100% responsif dengan Tailwind CSS
  Dibuat agar tampil rapi di mobile, tablet, dan desktop.
*/

import React, { useState } from "react";

export default function Upa() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [liked, setLiked] = useState(false);

  return (
    <div className="bg-stone-900 text-white min-h-screen antialiased">
      {/* ===== NAVBAR ===== */}
      <nav className="fixed w-full top-0 z-40 bg-white/10 backdrop-blur-md px-4 md:px-8 py-3 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <span className="text-2xl font-semibold tracking-wide">Upa</span>
        </a>

        {/* Menu Desktop */}
        <ul className="hidden md:flex gap-6 items-center text-sm font-light">
          <li>
            <a className="hover:text-amber-400" href="#beranda">
              Home
            </a>
          </li>
          <li>
            <a className="hover:text-amber-400" href="/portofolio.html">
              About
            </a>
          </li>
          <li>
            <a className="hover:text-amber-400" href="#">
              Contact
            </a>
          </li>
          <li>
            <a className="hover:text-amber-400" href="/">
              Kembali ke Home
            </a>
          </li>
        </ul>

        {/* Menu Mobile Button */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="menu"
        >
          <svg
            className="w-6 h-6"
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

      {/* ===== MOBILE MENU ===== */}
      {menuOpen && (
        <div className="md:hidden fixed top-14 right-4 left-4 z-50 bg-gray-900/90 backdrop-blur-md rounded-xl p-4 border border-gray-700">
          <ul className="flex flex-col gap-4 text-sm">
            <li>
              <a href="#beranda">Home</a>
            </li>
            <li>
              <a href="https://youtu.be/p6qX2ZfvOA4?si=dgb50cRCTMrrx8FB">
                Lagu
              </a>
            </li>
            <li>
              <a href="/portofolio.html">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="/">Kembali ke Home</a>
            </li>
          </ul>
        </div>
      )}

      <main className="pt-20">
        {/* ===== HERO ===== */}
        <section
          id="beranda"
          className="relative flex items-center justify-center min-h-[90vh] px-4"
        >
          <div className="relative w-full max-w-5xl flex flex-col items-center justify-center text-center">
            {/* background lingkaran berlapis */}
            <div className="absolute -top-32 left-1/4 w-64 sm:w-80 md:w-96 aspect-square bg-amber-400/50 rounded-full blur-3xl" />
            <div className="absolute top-0 right-1/4 w-72 sm:w-96 md:w-[28rem] aspect-square bg-teal-700/50 rounded-full blur-3xl" />

            {/* konten hero */}
            <div className="relative z-10 bg-slate-800/50 backdrop-blur-md rounded-3xl p-6 sm:p-10 max-w-xl mx-auto">
              <h1 className="text-3xl sm:text-5xl font-bold text-amber-300">
                Welcome
              </h1>
              <h2 className="text-lg sm:text-xl mt-2 text-slate-200">
                And let's here
              </h2>

              <p className="mt-6 text-sm sm:text-base text-slate-300 whitespace-pre-line">
                {`Let's Have Fun With Me Friends\nGet Started`}
              </p>

              <div className="mt-6">
                <button
                  onClick={() => setLiked((v) => !v)}
                  aria-pressed={liked}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/20 hover:bg-amber-500/40 transition-all"
                >
                  {liked ? (
                    <svg
                      className="w-6 h-6 text-rose-400"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 21s-7-4.35-9.5-7.5C-1 8.5 4 3 8 5.5 9.9 6.9 12 9 12 9s2.1-2.1 4-3.5C20 3 25 8.5 21.5 13.5 19 16.65 12 21 12 21z" />
                    </svg>
                  ) : (
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5.121 20.364L12 13.485l6.879 6.879"
                      />
                    </svg>
                  )}
                  <span className="text-sm">
                    {liked ? "Liked" : "Click me"}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ===== CARD SECTION ===== */}
        <section className="px-6 md:px-12 lg:px-24 -mt-10 relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <a href="/materi">
              <article className="bg-white/5 p-6 rounded-xl backdrop-blur-md hover:shadow-2xl hover:shadow-amber-500 transition">
                <img
                  src="https://img.icons8.com/clouds/100/school.png"
                  alt="school"
                  className="mb-4 mx-auto"
                />
                <p className="text-lg font-medium text-center">
                  Materi Sekolah &gt;
                </p>
                <p className="mt-3 text-sm text-slate-200 text-center">
                  Berisi materi pembelajaran kelas 11 di SMK Askhabulkahfi
                </p>
              </article>
            </a>

            {/* Card 2 */}
            <a href="/tugas">
              <article className="bg-white/5 p-6 rounded-xl backdrop-blur-md hover:shadow-2xl hover:shadow-red-500 transition">
                <img
                  src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/external-homework-university-flaticons-flat-flat-icons-2.png"
                  alt="tugas"
                  className="mb-4 mx-auto"
                />
                <p className="text-lg font-medium text-center">Tugas! &gt;</p>
                <p className="mt-3 text-sm text-slate-200 text-center">
                  Kumpulan Tugas-tugas yang telah diberikan
                </p>
              </article>
            </a>

            {/* Card 3 */}
            <a href="/karya">
              <article className="bg-white/5 p-6 rounded-xl backdrop-blur-md hover:shadow-2xl hover:shadow-purple-700 transition">
                <img
                  src="https://img.icons8.com/external-flat-02-chattapat-/64/external-work-office-flat-02-chattapat-.png"
                  alt="karya"
                  className="mb-4 mx-auto"
                />
                <h3 className="text-lg font-medium text-center">Karya &gt;</h3>
                <p className="mt-3 text-sm text-slate-200 text-center">
                  Coming soon 🧐 Doain biar cepet ndue karya
                </p>
              </article>
            </a>
          </div>
        </section>

        {/* ===== ARTICLES ===== */}
        <section className="px-6 md:px-12 lg:px-24 mt-12">
          <div className="mb-8 text-center md:text-left">
            <h2 className="text-2xl text-teal-300">Artikel-artikel</h2>
            <p className="text-slate-300">Kabar terbaru dan masih hangat</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <article
                key={i}
                className="bg-white/5 rounded-xl overflow-hidden"
              >
                <img
                  src="/assets/img/logog.jpg"
                  alt="artikel"
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold">Coming Soon</h3>
                  <p className="mt-2 text-sm text-slate-300">
                    consectetur adipisicing elit. corporis fugiat dolores nam,
                    vel iure quia, officiis quae maiores dignissimos dolore eos
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ===== FOOTER ===== */}
        <footer className="mt-16 bg-[#17181e] py-10 px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-white font-medium mb-3">Social Media</h4>
              <ul className="text-slate-400 text-sm space-y-2">
                <li>
                  <a href="https://www.instagram.com/afrzlelah">Instagram</a>
                </li>
                <li>
                  <a href="https://www.youtube.com/@AskhabulKahfi">YouTube</a>
                </li>
                <li>TikTok</li>
                <li>Twitter</li>
                <li>Facebook</li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-medium mb-3">Community</h4>
              <ul className="text-slate-400 text-sm space-y-2">
                <li>SD</li>
                <li>
                  <a href="https://ppaska.id/">SMP</a>
                </li>
                <li>
                  <a href="https://ppaska.id/">SMK</a>
                </li>
                <li>S1 Informatika</li>
                <li>S2 Informatika</li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-medium mb-3">Tutorial</h4>
              <ul className="text-slate-400 text-sm space-y-2">
                <li>
                  <a href="https://www.w3schools.com/html/default.asp">HTML</a>
                </li>
                <li>
                  <a href="https://www.w3schools.com/css/default.asp">CSS</a>
                </li>
                <li>
                  <a href="https://www.w3schools.com/js/default.asp">
                    JavaScript
                  </a>
                </li>
                <li>
                  <a href="https://www.w3schools.com/php/default.asp">PHP</a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
