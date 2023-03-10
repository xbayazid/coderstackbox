import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AboutUs from "../../Pages/AboutUs/AboutUs";
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
import Developers from "../../Pages/Dashboard/AdminPannel/Developers/Developers";
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
import RichTextEditor from "../../Pages/Blog/RichTextEditor/RichTextEditor";
import IDE from "../../Pages/CodeEditor/OnlineIDE";
import AdminBoard from "../../Pages/Dashboard/AdminPannel/AdminBoard/AdminBoard";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import MyCollections from "../../Pages/Dashboard/AdminPannel/MyProjects/MyProjects";
import EditCollection from "../../Pages/Collections/EditCollection";
import AllProjects from "../../components/AllProjects";
import TextEditor from "../../Pages/CodeEditor/OnlineIDE/component/text-editor";
import AdminRoute from "../AdminRoute";
import Projects from "../../Pages/Dashboard/AdminPannel/Projects/Projects";
import UserProjectView from "../../Pages/Dashboard/AdminPannel/Projects/UserProjectView";

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
      {
        path: "/richtext",
        element: <RichTextEditor />
      },
      {
        path: "/doc",
        element: <Doc></Doc>,
      },
      // {
      //   path: '/devProfile',
      //   element: <DevProfile></DevProfile>
      // },
      {
        path: "/:id",
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
        path: "/myProjects",
        element: <MyProjects></MyProjects>,
      },
      {
        path: "/login",
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
    path: "/code/:id",
    element: <EditCollection />,
  },
  {
    path: "/ide",
    element: <IDE></IDE>,
  },
  {
    path: "/text-editor",
    element: <TextEditor />,
  },
  {
    path: "/adminDashboard",
    element: (
      <PrivateRoutes>
        <Dashboard />
      </PrivateRoutes>
    ),

    children: [
      {
        path: "/adminDashboard",
        element: <AdminDashboard></AdminDashboard>,
        // element: <AdminRoute><AdminDashboard></AdminDashboard></AdminRoute>,
      },
      {
        path: "/adminDashboard/adminboard",
        element: <AdminBoard></AdminBoard>,
      },
      {
        path: "/adminDashboard/developers",
        element: <Developers></Developers>,
      },
      {
        path: "/adminDashboard/myprojects",
        element: <Projects />,
      },
      {
        path: "/adminDashboard/useranalytics",
        element: <UserAnalytics></UserAnalytics>,
      },
      {
        path: "/adminDashboard/edit-user-project/:id",
        element: <UserProjectView />,
      },
      {
        path: "/adminDashboard/profile",
        element: <Profile></Profile>,
      },
      {
        path: "/adminDashboard/all-projects",
        element: <AllProjects />,
      },
    ],
  },

  
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);

export default router;
