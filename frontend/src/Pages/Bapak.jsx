import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
export default function Bapak() {
  const [showFireworks, setShowFireworks] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowFireworks(true), 500);
    return () => clearTimeout(timer);
  }, []);
  const Firework = ({ position }) => (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0,
        x: position === "left" ? -300 : 300,
        y: 100,
      }}
      animate={{
        opacity: [1, 1, 0],
        scale: [1, 3, 0],
        x: [position === "left" ? -100 : 100, 0, 0],
        y: [100, -200, -300],
      }}
      transition={{ duration: 1.8, ease: "easeOut" }}
      className={`absolute ${
        position === "left" ? "left-20" : "right-20"
      } bottom-10 w-4 h-4 bg-yellow-300 rounded-full shadow-[0_0_60px_30px_rgba(255,255,150,0.8)]`}
    />
  );
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-black to-red-900 overflow-hidden relative">
      {/* Repeated fireworks */}
      {showFireworks &&
        [...Array(3)].map((_, i) => (
          <React.Fragment key={i}>
            <Firework position="left" />
            <Firework position="right" />
          </React.Fragment>
        ))}

      {/* Card */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: [0, 1.1, 1],
          opacity: 1,
          transition: { duration: 0.9, ease: "easeOut" },
        }}
        className="backdrop-blur-xl bg-white/10 p-10 rounded-3xl shadow-2xl text-center max-w-md relative z-10"
      >
        <h1 className="text-4xl font-bold text-white mb-2">
          Selamat Ulang Tahun, Ayah 🎂
        </h1>
        <p className="text-gray-300 mb-6 italic">
          Terima kasih sudah jadi rumah paling hangat di dunia.
        </p>

        <p className="text-gray-200 mb-8 text-sm leading-relaxed">
          Aku minta maaf, Yah… karena sampai hari ini aku belum bisa banyak
          memberi. Tapi setiap langkahku, sekecil apa pun, selalu kubawa harapan
          untuk bikin Ayah bangga. Semoga panjang umur, sehat selalu, dan semoga
          suatu hari nanti aku bisa membalas segalanya.
        </p>

        <motion.button
          whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.3)" }}
          className="px-6 py-3 rounded-full bg-white/20 text-white font-semibold transition-all"
        >
          Dari anakmu, Afrizal 💙
        </motion.button>
      </motion.div>
    </div>
  );
}
