import { createBrowserRouter } from "react-router-dom";
import Error from "../../Error";
import Main from "../../Layout/Main";
import AboutUs from "../../Pages/AboutUs/AboutUs";
import AdminDashboard from "../../Pages/AdminDashboard/AdminDashboard";
import Catagories from "../../Pages/catagories/Catagories";
import SingleCategory from "../../Pages/catagories/SingleCategory";
import EditorPage from "../../Pages/CodeEditor/EditorPage";
import CommunitySupport from "../../Pages/CommunitySupport/CommunitySupport";
import Documentation from "../../Pages/Documentation/Documentation";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Doc from "../../Pages/Home/Doc/Doc";
import Home from "../../Pages/Home/Home/Home";
import Services from "../../Pages/Home/Services/Services";
import Login from "../../Pages/Login/Login";
import SingUp from "../../Pages/SignUp/SignUp";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/community",
        element: <CommunitySupport></CommunitySupport>,
      },
      {
        path: "/about",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/documentation",
        element: <Documentation></Documentation>,
      },
      {
        path: "/catagories",
        element: <Catagories></Catagories>,
      },
      {
        path: "/category/:id",
        element: <SingleCategory></SingleCategory>,
        loader: ({ params }) =>
          fetch(
            `https://coderstackbox-server.vercel.app/projects/${params.id}`
          ),
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <SingUp></SingUp>,
      },
    ],
  },
  {
    path: "/code-editor",
    element: <EditorPage />,
  },
  {
    path: "/adminDashboard",
    element: <AdminDashboard></AdminDashboard>
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>
  },
]);

export default router;
