
import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import ErrorPage from "../pages/errorPage/ErrorPage";
import Home from "../pages/home/Home";
import DashBoard from "../layout/DashBoard";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      }

    ]
  },
 


  // here set dashboard
  {
    path: 'dashboard',
    element: <DashBoard />,
    children: [
      {

        index: true,
        element: <div>hello dashboard</div>,


      },

    ]
  }

]);