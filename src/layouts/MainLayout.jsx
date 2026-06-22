import { Outlet } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

const MainLayout = () => {
  return (
    <div>
      <Navbar />

      <main className="min-h-screen bg-white text-black dark:bg-black dark:text-white transition-all duration-300">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;
