import React from "react";

const FooterUpa = ({ footerBg, footerColor }) => {
  return (
    <>
      <footer className={`mt-16 pb-10 ${footerBg}py-10`}>
        <div
          className={`max-w-6xl mx-auto px-10 py-10 grid grid-cols-3 md:grid-cols-3 gap-8 ${footerBg}  rounded-2xl shadow-2xl`}
        >
          <div className={`${footerColor}`}>
            <h4 className={`font-medium  mb-3`}>Social Media</h4>
            <ul className={`text-sm space-y-2 ${footerColor}`}>
              <li>
                <a href="https://www.instagram.com/afrzlelah">Instagram</a>
              </li>
              <li>
                <a href="https://www.youtube.com/@AskhabulKahfi">Youtube</a>
              </li>
              <li>TikTok</li>
              <li>Twitter</li>
              <li>Facebook</li>
            </ul>
          </div>

          <div className={`${footerColor}`}>
            <h4 className={` font-medium mb-3`}>Comunity</h4>
            <ul className=" text-sm space-y-2">
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

          <div className={`${footerColor}`}>
            <h4 className=" font-medium mb-3">Tutorial</h4>
            <ul className=" text-sm space-y-2">
              <li>
                <a href="https://www.w3schools.com/html/default.asp">HTML</a>
              </li>
              <li>
                <a href="https://www.w3schools.com/css/default.asp">CSS</a>
              </li>
              <li>
                <a href="https://www.w3schools.com/js/default.asp">
                  JAVASCRIPT
                </a>
              </li>
              <li>
                <a href="https://www.w3schools.com/php/default.asp">PHP</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterUpa;
