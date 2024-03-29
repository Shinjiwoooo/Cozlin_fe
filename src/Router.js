import {createBrowserRouter} from 'react-router-dom';
import App from "./App";
import Login from "./components/pages/Login/Login";
import Company from "./components/pages/Infomation/Company";
import HumanResources from "./components/pages/Layout/HumanResources";
import Announcement from "./components/pages/Layout/Announcement";
import Signup from "./components/pages/Login/Signup";
import Resize from "./components/pages/Layout/Resize";
import FindUserInfo from "./components/pages/Login/FindUserInfo";
import Account from "./components/pages/Infomation/Account";
import History from "./components/pages/Infomation/History";
import Bookmark from "./components/pages/Infomation/Bookmark";
import Follow from "./components/pages/Infomation/Follow";
import Profile from "./components/pages/Infomation/Profile";
import ProfileUpdate from './components/pages/Infomation/ProfileUpdate';

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
        path: 'human-resources',
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
      },
      {
        path : '/applicant/account',
        element: <Account />
      },
      {
        path : '/applicant/profile',
        element: <Profile />
      },
      {
        path : '/applicant/profile/update',
        element : <ProfileUpdate/>
      },
      {
        path : '/applicant/history',
        element: <History />
      },
      {
        path : '/applicant/bookmark',
        element: <Bookmark />
      },
      {
        path : '/applicant/follow',
        element: <Follow />
      },
    ],
  }
]);

export default router;