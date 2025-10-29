import { useState } from "react";

const Content1 = () => {
  const [focused, setFocused] = useState(false);
  const [geser, setGeser] = useState(0);

  const handleFocus = () => {
    setFocused(true);
    setGeser(10);
  };
  const handleBlur = () => {
    setFocused(false);
    setGeser(0);
  };

  const handleButton = () => {};

  return (
    <div className="flex-1 p-6 bg-stone-100">
      <div className="flex justify-between items-center mb-6 ">
        {focused && (
          <div
            className="bg-s bg-black p-2 absolute w-[28%] h-14
         bg-gradient-to-r from-pink-500 to-blue-400
         rounded-2xl filter blur-md
      "
          ></div>
        )}

        <div className="relative w-1/2 shadow-lg ">
          <input
            type="text"
            placeholder="Search"
            onFocus={handleFocus}
            // onMouseLeave={handleFocus}
            onBlur={handleBlur}
            className="search w-full p-3 rounded-2xl border border-white
           focus:border-white focus:ring-white focus:ring-2
           shadow-lg outline-none"
          />
          <i className="fas fa-search absolute top-3 right-3 text-gray-400"></i>
        </div>
        <div
          className="seacrh-icon btn-container bg-blue-950 relative right-24 py-3 px-3 rounded-full  
              mx-center flex justify-center align-center 
         "
        >
          <button className="btn-search " onClick={handleButton}>
            <img src="/public/search.svg" className="" />
          </button>
        </div>
        <div className="text-gray-500">14 Januari 202, Rebo</div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="text-xl font-playwrite mb-2">
              Welcome back, afrzlelah!
            </h2>
            <p className="text-gray-600">
              Keep strong and to be patient oky?.{" "}
              <a href="#" className="text-blue-500"></a>
            </p>
          </div>
          <img
            src="/public/book_3145765.png"
            alt="Books"
            className="w-24 h-24"
          />
        </div>
        <button className="bg-blue-950 text-white px-4 py-2 rounded-lg">
          Okee
        </button>
      </div>

      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Jadwal</h2>
          <a href="#" className="text-blue-500">
            View All
          </a>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-blue-100 p-4 rounded-lg">
            <h3 className="text-lg font-semibold">Matematika</h3>
            <p className="text-gray-600">12 Files</p>
            <p className="text-gray-600">Teacher: Mbuh</p>
          </div>
          <div className="bg-blue-200 p-4 rounded-lg">
            <h3 className="text-lg font-semibold">Informatika</h3>
            <p className="text-gray-600">12 Files</p>
            <p className="text-gray-600">Teacher: Mbuh</p>
          </div>
          <div className="bg-pink-100 p-4 rounded-lg">
            <h3 className="text-lg font-semibold">Nahwu</h3>
            <p className="text-gray-600">15 Files</p>
            <p className="text-gray-600">Teacher: Mbuh SP</p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Lessons</h2>
          <a href="#" className="text-blue-500">
            View All
          </a>
        </div>
        <table className="w-full text-left">
          <thead>
            <tr>
              <th className="pb-2">Class</th>
              <th className="pb-2">Teacher Name</th>
              <th className="pb-2">Members</th>
              <th className="pb-2">Starting</th>
              <th className="pb-2">Material</th>
              <th className="pb-2">Payment</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="py-2">A1</td>
              <td className="py-2">Pak Bass</td>
              <td className="py-2">
                <div className="flex -space-x-2">
                  <img
                    src="https://placehold.co/30x30"
                    alt="Member 1"
                    className="w-8 h-8 rounded-full border-2 border-white"
                  />
                  <img
                    src="https://placehold.co/30x30"
                    alt="Member 2"
                    className="w-8 h-8 rounded-full border-2 border-white"
                  />
                  <img
                    src="https://placehold.co/30x30"
                    alt="Member 3"
                    className="w-8 h-8 rounded-full border-2 border-white"
                  />
                </div>
              </td>
              <td className="py-2">12.07.2022</td>
              <td className="py-2 text-blue-500">Download</td>
              <td className="py-2 text-green-500">Done</td>
            </tr>
            <tr className="border-t">
              <td className="py-2">A1</td>
              <td className="py-2">Pak Agus</td>
              <td className="py-2">
                <div className="flex -space-x-2">
                  <img
                    src="https://placehold.co/30x30"
                    alt="Member 1"
                    className="w-8 h-8 rounded-full border-2 border-white"
                  />
                  <img
                    src="https://placehold.co/30x30"
                    alt="Member 2"
                    className="w-8 h-8 rounded-full border-2 border-white"
                  />
                  <img
                    src="https://placehold.co/30x30"
                    alt="Member 3"
                    className="w-8 h-8 rounded-full border-2 border-white"
                  />
                </div>
              </td>
              <td className="py-2">17.07.2022</td>
              <td className="py-2 text-blue-500">Download</td>
              <td className="py-2 text-yellow-500">Pending</td>
            </tr>
            <tr className="border-t">
              <td className="py-2">A1</td>
              <td className="py-2">Pak Syakur</td>
              <td className="py-2">
                <div className="flex -space-x-2">
                  <img
                    src="https://placehold.co/30x30"
                    alt="Member 1"
                    className="w-8 h-8 rounded-full border-2 border-white"
                  />
                  <img
                    src="https://placehold.co/30x30"
                    alt="Member 2"
                    className="w-8 h-8 rounded-full border-2 border-white"
                  />
                  <img
                    src="https://placehold.co/30x30"
                    alt="Member 3"
                    className="w-8 h-8 rounded-full border-2 border-white"
                  />
                </div>
              </td>
              <td className="py-2">22.07.2022</td>
              <td className="py-2 text-blue-500">Download</td>
              <td className="py-2 text-green-500">Done</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Content1;
