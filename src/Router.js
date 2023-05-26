import { createBrowserRouter } from 'react-router-dom';
import App from "./App";
import Login from "./components/pages/Login/Login";
import Company from "./components/pages/Infomation/Company";
import HumanResources from "./components/pages/Layout/HumanResources";
import Announcement from "./components/pages/Layout/Announcement";
import Signup from "./components/pages/Login/Signup";
import Resize from "./components/pages/Layout/Resize";
import FindUserInfo from "./components/pages/Login/FindUserInfo";

const router = createBrowserRouter([
  {
    path : '/',
    element : <App />,
    children: [
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'company',
        element: <Company />
      },
      {
        path: 'humanResources',
        element: <HumanResources />
      },
      {
        path: 'announcement',
        element: <Announcement />
      },
      {
        path: 'signup',
        element: <Signup />
      },
      {
        path: 'resize',
        element: <Resize />
      },
      {
        path: 'find-pwd',
        element: <FindUserInfo />
      }
    ],
  }
]);

export default router;