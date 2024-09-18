import { Outlet } from "react-router-dom";
import Footer from "../Shared/footer/Footer";

const Root = () => {
  return (
    <div>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
