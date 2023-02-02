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
import MyProjects from "../../Pages/UserDashboard/MyProjects/MyProjects";
import UserDashboard from "../../Pages/UserDashboard/UserDashboard/UserDashboard";
import UserProfile from "../../Pages/UserDashboard/UserProfile/UserProfile";
import Developers from "../../Pages/Dashboard/AdminPannel/Developers/Developers";
import Projects from "../../Pages/Dashboard/AdminPannel/Projects/Projects";
import Inbox from "../../Pages/Dashboard/AdminPannel/Inbox/Inbox";
import Report from "../../Pages/Dashboard/AdminPannel/Report/Report";
import Profile from "../../Pages/Dashboard/AdminPannel/Profile/Profile";
import PrivateRoutes from "../Routes/PrivateRoutes/PrivateRoutes";
import AdminDashboard from "../../Pages/Dashboard/AdminPannel/AdminDashboard/AdminDashboard";
import CodeEditor from "../../Pages/CodeEditor/CodeEditor/CodeEditor";



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
        path: "/doc",
        element: <Doc></Doc>,
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
      {
        path: '/userProfile',
        element: <UserProfile></UserProfile>
      },
      {
        path: '/myProjects',
        element: <MyProjects></MyProjects>
      }
    ],
  },
  {
    path: "/code-editor",
    element: <CodeEditor />
  },
  {
    path: "/adminDashboard",
    element: <PrivateRoutes><AdminDashboardLayout></AdminDashboardLayout></PrivateRoutes>,
    children: [
      {
        path: "/adminDashboard",
        element: <AdminDashboard></AdminDashboard> 
      },   
      {
        path: "/adminDashboard/developers",
        element: <Developers></Developers> 
      },
      {
        path: "/adminDashboard/projects",
        element: <Projects></Projects> 
      },
      {
        path: "/adminDashboard/inbox",
        element: <Inbox></Inbox>
      },
      {
        path: "/adminDashboard/report",
        element: <Report></Report>
      },
      {
        path: "/adminDashboard/profile",
        element: <Profile></Profile>
      }
    ]
  },
  {
    path: "/userDashboard",
    element: <PrivateRoutes><UserDashboard></UserDashboard></PrivateRoutes>,
    children:[
      {
        path: '/userDashboard',
        element: <PrivateRoutes><UserDashboard></UserDashboard></PrivateRoutes>
      },
      {
        path: '/userDashboard/myProjects',
        element: <MyProjects></MyProjects>
      }
    ]
  },   
  {
    path: "*",
    element: <ErrorPage></ErrorPage>
  },
]);

export default router;
