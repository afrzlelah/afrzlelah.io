import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavUpa from "./NavUpa";
import Cards2 from "../atom/Cards2";
import Map from "./Maps";
import Sponsor from "../atom/Sponsor";

export default function StoreContent() {
  const navigate = useNavigate();
  const [btnPorto, setBtnPorto] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <NavUpa
        add=""
        linkAdd=""
        navBgColor={"bg-white/20"}
        bgMobileNav={"bg-white/20"}
        navBgDropDown={"bg-stone-200"}
        translateLeft={"left-1/2 -translate-x-1/2"}
        btnPorto={btnPorto}
        setBtnPorto={setBtnPorto}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />
      <div className="flex flex-col">
        {/* HERO */}
        <section className=" flex flex-col md:flex-row items-center justify-center min-h-screen px-6 md:px-20 bg-white ">
          {/* Bagian kiri */}
          <div className=" text-center md:text-left md:w-1/2 space-y-5 ">
            <h2 className="text-xl md:text-2xl font-medium text-gray-600">
              Hey, I'm <span className="text-gray-900">Afrizal 👋</span>
            </h2>
            <h1 className="text-5xl md:text-7xl font-bold">
              <span className="text-blue-600">Fullstack</span>{" "}
              <span className="text-gray-900">Developer</span>
            </h1>
            <p className="text-gray-500 text-base md:text-lg max-w-md">
              I'm a Fullstack developer based in Indonesia. I membangun bukan
              hanya web tapi juga software dan otw IoT.
            </p>

            <div className="flex justify-center md:justify-start gap-4 pt-3">
              <button
                onClick={() => navigate("/memorize")}
                className="cursor-pointer px-5 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition"
              >
                About me
              </button>
              <button
                onClick={() => {
                  setMenuOpen((c) => !c);
                  setBtnPorto(true);
                }}
                className="cursor-pointer px-5 py-3 border border-gray-300 rounded-full font-medium hover:bg-gray-100 transition"
              >
                Browse Projects
              </button>
            </div>
          </div>

          {/* Bagian kanan (foto) */}
          <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center bg-gradient-to-r from-blue-700 to-slate-900 rounded-bl-full rounded-tr-full">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-gray-100 shadow-lg">
              <img
                src="/public/self.png"
                alt="Afrizal portrait"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </section>
        {/* CARDS */}
        <div className="  flex items-center justify-center w-screen poppins-bold text-3xl ">
          <div
            className={`bg-blue-800 w-44 rounded-b-full text-center text-white `}
          >
            MySkills
          </div>
        </div>

        <section className="max-w-6xl mx-auto mt-2  mb-20 px-6 ">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
            <Cards2
              title={"Fullstack"}
              p={`Buat website mu mulai dari 0 hingga utuh dengan sistem yang sesuai keinginanmu`}
              link={"/memorize"}
            />
            <Cards2
              title={"Automatisasi AI"}
              p={`Biarlah mesin yang mengejarkan tugas harian anda`}
              link={"/memorize"}
            />
            <Cards2
              title={"IoT for Green and Easy Life"}
              p={`Bangun peradaban yang segar dengan sistem yang minim polusi`}
              link={"/memorize"}
            />
            <Cards2
              title={"Cooking some food"}
              p={`Buah dari pengalaman bekerja di dapur`}
              link={"/memorize"}
            />
          </div>
        </section>
        {/* REPEATED SECTIONS */}
        <section className="w-full bg-blue-900 py-16 flex justify-center rounded-tl-full">
          <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-12 px-6">
            {/* Gambar di kiri */}
            <div className="md:w-1/2 w-full rounded-2xl overflow-hidden shadow-lg bg-white">
              <img
                src="/public/webMemorize.png"
                alt="hutan"
                className="w-full h-96 object-cover rounded-2xl"
              />
            </div>
            {/* Teks di kanan */}
            <div className="md:w-1/2 w-full bg-white p-10 rounded-2xl shadow-md flex flex-col justify-center">
              <h3 className="text-4xl font-bold mb-4">
                Build Your Web
                <br />
                with Afrzlelah
              </h3>
              <p className="text-lg text-gray-700 mb-8">
                Hallo Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident molestiae illo temporibus enim. Blanditiis, voluptas
                pariatur. Ullam accusamus suscipit perferendis eveniet tempore,
                et quis nemo facilis consectetur animi adipisci quam.
              </p>
              <a
                href="#"
                className="text-lg text-brand hover:underline self-start"
              >
                Learn more about The Web
              </a>
            </div>
          </div>
        </section>
        <section className="w-full bg-blue-900 py-16 flex justify-center rounded-br-full">
          <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-12 px-6">
            <div className="md:w-1/2 w-full bg-white p-10 rounded-2xl shadow-md flex flex-col justify-center">
              <h3 className="text-4xl font-bold mb-4">
                Build Your Web
                <br />
                with Afrzlelah
              </h3>
              <p className="text-lg text-gray-700 mb-8">
                Hallo Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident molestiae illo temporibus enim. Blanditiis, voluptas
                pariatur. Ullam accusamus suscipit perferendis eveniet tempore,
                et quis nemo facilis consectetur animi adipisci quam.
              </p>
              <a
                href="#"
                className="text-lg text-brand hover:underline self-start"
              >
                Learn more about The Web
              </a>
            </div>
            {/* Gambar di kiri */}
            <div className="md:w-1/2 w-full rounded-2xl overflow-hidden shadow-lg bg-white">
              <img
                src="/public/porto2.png"
                alt="hutan"
                className="w-full h-96 object-cover rounded-2xl"
              />
            </div>
            {/* Teks di kanan */}
          </div>
        </section>
        <section className="w-full bg-blue-900 py-16 flex justify-center rounded-bl-full">
          <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-12 px-6">
            {/* Gambar di kiri */}
            <div className="md:w-1/2 w-full rounded-2xl overflow-hidden shadow-lg bg-white">
              <img
                src="/public/webMemorize.png"
                alt="hutan"
                className="w-full h-96 object-cover rounded-2xl"
              />
            </div>
            {/* Teks di kanan */}
            <div className="md:w-1/2 w-full bg-white p-10 rounded-2xl shadow-md flex flex-col justify-center">
              <h3 className="text-4xl font-bold mb-4">
                Build Your Web
                <br />
                with Afrzlelah
              </h3>
              <p className="text-lg text-gray-700 mb-8">
                Hallo Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident molestiae illo temporibus enim. Blanditiis, voluptas
                pariatur. Ullam accusamus suscipit perferendis eveniet tempore,
                et quis nemo facilis consectetur animi adipisci quam.
              </p>
              <a
                href="#"
                className="text-lg text-brand hover:underline self-start"
              >
                Learn more about The Web
              </a>
            </div>
          </div>
        </section>
        {/* MAP PLACEHOLDER */}
        <section className="mx-auto py-24">
          <div className="bg-white rounded-xl shadow-lg w-screen h-98 px-10 flex items-center justify-center text-gray-700">
            <Map />
          </div>
        </section>
        {/* SPONSORS TICKER */}
        <Sponsor />
      </div>
    </>
  );
}
