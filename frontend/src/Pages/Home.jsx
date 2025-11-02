import Header from "../components/Header";
import NavUpa from "../components/NavUpa";
import StoreContent from "../components/StoreContent";
import FooterUpa from "../components/FooterUpa";

const Home = () => {
  return (
    <>
      <StoreContent />
      <FooterUpa footerBg={"bg-blue-100"} footerColor="text-stone-800" />
    </>
  );
};

export default Home;
