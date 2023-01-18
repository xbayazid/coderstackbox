import { createBrowserRouter } from "react-router-dom";
import Error from "../../Error";
import Main from "../../Layout/Main";
import AboutUs from "../../Pages/AboutUs/AboutUs";
import EditorPage from "../../Pages/CodeEditor/EditorPage";
import CommunitySupport from "../../Pages/CommunitySupport/CommunitySupport";
import Documentation from "../../Pages/Documentation/Documentation";
import Doc from "../../Pages/Home/Doc/Doc";
import Home from "../../Pages/Home/Home/Home";
import Services from "../../Pages/Home/Services/Services";
import Login from "../../Pages/Login/Login";
import SingUp from "../../Pages/SignUp/SignUp";


// CodersStackBox
// Home
// About Us
// Documentation
// Community Support
// Login
// Sign Up


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
        path: "login", 
        element: <Login></Login>
      },
      {
        path: "/doc", 
        element: <Doc></Doc>
      },
      {
        path: '/register',
        element: <SingUp></SingUp>
      }
    ],
  },
  {
    path: '/code-editor',
    element: <EditorPage />
  },
  {
    path: "*",
    element: <Error></Error>
  },
]);

export default router