import { createBrowserRouter } from "react-router-dom";
// import Error from "../../Error";
import Main from "../../Layout/Main";
import AboutUs from "../../Pages/AboutUs/AboutUs";
import AdminDashboardLayout from "../../Layout/AdminDashboardLayout/AdminDashboardLayout";
import Catagories from "../../Pages/catagories/Catagories";
import SingleCategory from "../../Pages/catagories/SingleCategory";
import EditorPage from "../../Pages/CodeEditor/EditorPage";
import CommunitySupport from "../../Pages/CommunitySupport/CommunitySupport";
import Documentation from "../../Pages/Documentation/Documentation";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Doc from "../../Pages/Home/Doc/Doc";
import Home from "../../Pages/Home/Home/Home";
// import Services from "../../Pages/Home/Services/Services";
import Login from "../../Pages/Login/Login";
import SingUp from "../../Pages/SignUp/SignUp";
// import MyProjects from "../../Pages/UserDashboard/MyProjects/MyProjects";
import UserDashboard from "../../Pages/UserDashboard/UserDashboard/UserDashboard";
import UserProfile from "../../Pages/UserDashboard/UserProfile/UserProfile";
import Developers from "../../Pages/Dashboard/AdminPannel/Developers/Developers";
import Inbox from "../../Pages/Dashboard/AdminPannel/Inbox/Inbox";
import MyProjects from "../../Pages/UserDashboard/MyProjects/MyProjects";
import Profile from "../../Pages/Dashboard/AdminPannel/Profile/Profile";
import UserAnalytics from "../../Pages/Dashboard/AdminPannel/UserAnalytics/UserAnalytics";
import PrivateRoutes from "../Routes/PrivateRoutes/PrivateRoutes";
import AdminDashboard from "../../Pages/Dashboard/AdminPannel/AdminDashboard/AdminDashboard";
import Blog from "../../Pages/Blog/Blog";
import Collections from "../../Pages/Collections/Collections";
import BlogPage from "../../Pages/Blog/BlogPage/BlogPage";
// import DevProfile from "../../Pages/DevProfile/DevProfile";
import DevProfile from "../../Pages/DevProfile/DevProfile";
import IDE from "../../Pages/CodeEditor/OnlineIDE";

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
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/blog/:id",
        element: <BlogPage />,
      },
      // {
      //   path: "/blog/:id",
      //   component: {Blog}
      // },
      {
        path: "/doc",
        element: <Doc></Doc>,
      },
      // {
      //   path: '/devProfile',
      //   element: <DevProfile></DevProfile>
      // },
      {
        path: "/devProfile",
        element: <DevProfile></DevProfile>,
      },
      {
        path: "/catagories",
        element: <Catagories></Catagories>,
      },
      {
        path: "/collections",
        element: <Collections />,
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
        path: "/userProfile",
        element: <UserProfile></UserProfile>,
      },
      {
        path: "/myProjects",
        element: <MyProjects></MyProjects>,
      },
    ],
  },
  {
    path: "/code-editor",
    element: <EditorPage />,
  },
  {
    path: "/ide",
    element: <IDE></IDE>,
  },
  {
    path: "/adminDashboard",
    element: (
      <PrivateRoutes>
        <AdminDashboardLayout></AdminDashboardLayout>
      </PrivateRoutes>
    ),

    children: [
      {
        path: "/adminDashboard",
        element: <AdminDashboard></AdminDashboard>,
      },
      {
        path: "/adminDashboard/developers",
        element: <Developers></Developers>,
      },
      {
        path: "/adminDashboard/myprojects",
        element: <MyProjects></MyProjects>,
      },
      {
        path: "/adminDashboard/inbox",
        element: <Inbox></Inbox>,
      },
      {
        path: "/adminDashboard/useranalytics",
        element: <UserAnalytics></UserAnalytics>,
      },
      {
        path: "/adminDashboard/profile",
        element: <Profile></Profile>,
      },
    ],
  },
  {
    path: "/userDashboard",
    element: (
      <PrivateRoutes>
        <UserDashboard></UserDashboard>
      </PrivateRoutes>
    ),
    children: [
      {
        path: "/userDashboard",
        element: (
          <PrivateRoutes>
            <UserDashboard></UserDashboard>
          </PrivateRoutes>
        ),
      },
      {
        path: "/userDashboard/myProjects",
        element: <MyProjects></MyProjects>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <SingUp></SingUp>,
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);

export default router;
