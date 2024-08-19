import Navbar from "./Navbar";
import Footer from "./Footer";

const MainLayout = ({ children }) => {
  return (
    <div className="flex h-screen flex-col">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;