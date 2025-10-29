import Sidebar from "../components/Sidebar";
import MainContent from "../components/MainContent";
import RightSidebar from "../components/RightSidebar";

const Dash = () => {
  return (
    <>
      <div className="flex min-h-screen font-Poppins">
        <Sidebar />
        {/* Main Content */}
        <MainContent />
        {/* Right Sidebar */}
        <RightSidebar />
      </div>
    </>
  );
};

export default Dash;
