import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Scripts() {
  useEffect(() => {
    AOS.init({ once: false });
  }, []);

  return null;
}
