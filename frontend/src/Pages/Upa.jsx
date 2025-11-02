import React, { useState } from "react";

import NavUpa from "../components/NavUpa";
import FooterUpa from "../components/FooterUpa";
import Cards from "../atom/Cards";

export default function Upa() {
  const [liked, setLiked] = useState(false);
  const [btnPorto, setBtnPorto] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-stone-900 text-white min-h-screen antialiased">
      {/* NAVBAR */}
      <NavUpa
        add=""
        linkAdd=""
        navBgColor={"bg-black/5"}
        navBgDropDown={"bg-black/80"}
        translateLeft={"left-1/2 -translate-x-1/2"}
        translateLeftMobile={""}
        btnPorto={btnPorto}
        setBtnPorto={setBtnPorto}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />

      <main className="pt-20">
        {/* HERO */}
        <section
          id="beranda"
          className="relative flex items-center justify-center h-[92vh] max-w-screen"
        >
          <div className="relative w-[90%] max-w-4xl flex h-[60vh] ">
            {/* layered backgrounds */}
            <div className=" inset-0 -top-6 w-3/5 z-10 bg-sky-800/70 rounded-full blur-3xl" />
            <div className="  -top-6 w-3/5   z-10 bg-red-700/60 rounded-full blur-3xl" />
            <div className="absolute inset-0 -z-0 w-2/5  left-30 md:left-70 aspect-square bg-amber-500/60 rounded-full shadow-lg blur-xl" />

            <div className="absolute inset-0 bottom-24 m-auto w-3/5 h-[40vh] bg-white/10 rounded-4xl p-8 z-10  flex flex-col backdrop-blur-xl">
              <h1 className="text-4xl font-semibold text-wheat-50">Welcome</h1>
              <h2 className="text-xl text-slate-100 mt-2">And let's here</h2>

              <pre className="text-sm text-slate-200 mt-6 whitespace-break-spaces">{`Adalah ruang khusus Owner web ini`}</pre>

              <div className="mt-6">
                <button
                  onClick={() => setLiked((v) => !v)}
                  aria-pressed={liked}
                  className="inline-flex items-center gap-2"
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

        {/* CARDS */}
        <section className="px-6 md:px-12 lg:px-24 -mt-10 relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 500 ">
            <a href="materi">
              <article className="bg-white/5 p-6 rounded-3xl h-2xl hover:scale-105 hover:-translate-y-3 max-h-2xl backdrop-blur-md hover:shadow-2xl hover:shadow-amber-500 duration-150">
                <img
                  src="https://img.icons8.com/clouds/100/school.png"
                  alt="school"
                  width={64}
                  height={64}
                  className="mb-4"
                />
                <p
                  href="/materi-sekolah.html"
                  className="text-lg font-medium block  "
                >
                  Materi Sekolah &gt;
                </p>
                <p className="mt-3 text-sm text-slate-200">
                  Berisi materi materi mengenai pembelajaran kelas 11 di SMK
                  Askhabulkahfi
                </p>
              </article>
            </a>
            <a href="/tugas">
              <article className="bg-white/5 p-6 rounded-3xl hover:scale-105 h-full max-h-full hover:-translate-y-3 backdrop-blur-md hover:shadow-2xl hover:shadow-red-500 duration-150">
                <img
                  src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/external-homework-university-flaticons-flat-flat-icons-2.png"
                  alt="tugas"
                  width={64}
                  height={64}
                  className="mb-4"
                />
                <p href="/tugas.html" className="text-lg font-medium block ">
                  Tugas! &gt;
                </p>
                <p className="mt-3 text-sm text-slate-200">
                  Kumpulan Tugas-tugas yang telah diberikan
                </p>
              </article>
            </a>
            <a href="/karya">
              <article className="bg-white/5 p-6 rounded-3xl hover:scale-105 h-full max-h-full hover:-translate-y-3 backdrop-blur-md hover:shadow-2xl hover:shadow-purple-700 duration-150">
                <img
                  src="https://img.icons8.com/external-flat-02-chattapat-/64/external-work-office-flat-02-chattapat-.png"
                  alt="karya"
                  width={64}
                  height={64}
                  className="mb-4"
                />
                <h3 className="text-lg font-medium">Karya &gt;</h3>
                <p className="mt-3 text-sm text-slate-200">
                  Coming soon🧐 Doain Ben cepet ndue karya
                </p>
              </article>
            </a>
          </div>
        </section>

        {/* ARTICLES GRID */}
        <section className="px-6 md:px-12 lg:px-24 mt-12">
          <div className="mb-8">
            <h2 className="text-2xl text-blue-700">Moment perjalanan</h2>
            <p className="text-slate-300">Kenangan-kenangan yang berlalu</p>
          </div>

          <Cards />
        </section>

        {/* FOOTER */}
        <FooterUpa footerBg="bg-stone-800" />
      </main>
    </div>
  );
}
