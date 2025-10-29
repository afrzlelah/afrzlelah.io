import { useNavigate } from "react-router-dom";

const Cards2 = ({ title, p, link }) => {
  const navigate = useNavigate();
  function IconHome() {
    return (
      <svg
        className="w-12 h-12 text-brand"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3 11.5L12 4l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1v-8.5z"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  return (
    <article
      onClick={() => navigate(link)}
      className="bg-white/5 rounded-xl p-6 cursor-pointer shadow-xl hover:scale-110 hover:shadow-blue-600 transform transition"
    >
      <div className="flex flex-col items-start gap-4">
        <div className=" from-brand/20 to-brand/5 rounded-md p-3 inline-block">
          <IconHome />
        </div>
        <h2 className="poppins-bold text-xl">{title}</h2>
        <p className="text-gray-700 whitespace-pre-line">{p}</p>
      </div>
    </article>
  );
};
export default Cards2;
