import Footer from "@/Shared/footer/Footer";
import { Outlet } from "react-router-dom";





const Root = () => {
  return (
    <div className="h-screen">
      <Outlet />

      <Footer/>



    </div>
  );
};

export default Root;
