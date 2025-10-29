const Sidebar = () => {
  return (
    <>
      <div className="w-1/5 bg-white p-6 fixed">
        <div className="flex items-center mb-8">
          <img src="/00.jpg" alt="Logo" className="mr-1 rounded-full h-20" />
          <span className="text-xl font-semibold font-Poppins">afrzlelah</span>
        </div>
        <nav>
          <ul className="">
            <li className="mb-4 ">
              <a
                href="#"
                className="flex items-center text-gray-700  hover:text-sky-400"
              >
                <i className="fas fa-tachometer-alt mr-3"></i> Dashboard
              </a>
            </li>
            <li className="mb-4">
              <a
                href="/chatkelas"
                className="flex items-center text-gray-700  hover:text-sky-400"
              >
                <i className="fas fa-chalkboard-teacher mr-3"></i> ChatApp
              </a>
            </li>
            <li className="mb-4">
              <a
                href="#"
                className="flex items-center text-gray-700  hover:text-sky-400"
              >
                <i className="fas fa-video mr-3"></i> Web
              </a>
            </li>
            <li className="mb-4">
              <a
                href="#"
                className="flex items-center text-gray-700  hover:text-sky-400"
              >
                <i className="fas fa-play-circle mr-3"></i> Recorded Lessons
              </a>
            </li>
            <li className="mb-4">
              <a
                href="#"
                className="flex items-center text-gray-700  hover:text-sky-400"
              >
                <i className="fas fa-book mr-3"></i> Video Library
              </a>
            </li>
          </ul>
        </nav>
        <div className=" p-4 bg-gray-100 rounded-lg relative top-44">
          <div className="flex items-center mb-4  ">
            <img src="00.jpg" alt="Help" className="mr-3 h-10 rounded-full" />
            <span className="text-sm font-medium">Need help?</span>
          </div>
          <p className="text-xs text-gray-600">
            Do you have any problem while using the afrzlelah' apk?
          </p>
        </div>
      </div>
      <div className="w-1/5 bg-white p-6 "></div>
    </>
  );
};

export default Sidebar;
