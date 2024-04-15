import RootBox from "../components/RootBox.jsx";
import Description from "../pages/Description.jsx";
import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";
import Contact from "../pages/Contact.jsx";
import FAQ from "../pages/FAQ.jsx";
import SignIn from "../pages/SignIn.jsx";
import SignUp from "../pages/SignUp.jsx";
import ProtectedBox from "../components/ProtectedBox.jsx";
import Notifications from "../pages/UserViews/Notifications.jsx";
import Support from "../pages/UserViews/Support.jsx";
import Chat from "../components/chat/Chat.jsx";
import Conversation from "../components/chat/Conversation.jsx";
import Settings from "../pages/UserViews/Settings.jsx";
import Profile from "../components/settings/Profile.jsx";
import Favorite from "../components/settings/Favorite.jsx";
import PhotoGallery from "../components/settings/PhotoGallery.jsx";
import Details from "../components/settings/Details.jsx";
import ChangePassword from "../components/settings/security/ChangePassword.jsx";
import DeleteAccount from "../components/settings/security/DeleteAccount.jsx";

export default {
  path: "/",
  element: <RootBox />,
  children: [
    {
      path: "service/:id",
      element: <Description />,
    },
    {
      index: true,
      element: <Home />,
    },
    {
      path: "about",
      element: <About />,
    },
    {
      path: "contact",
      element: <Contact />,
    },
    {
      path: "faq",
      element: <FAQ />,
    },
    {
      path: "login",
      element: <SignIn />,
    },
    {
      path: "signup",
      element: <SignUp />,
    },
    {
      path: "account",
      element: <ProtectedBox />,
      children: [
        {
          path: "notifications",
          element: <Notifications />,
        },
        {
          path: "support",
          element: <Support />,
        },
        {
          path: "chat",
          element: <Chat />,
          children: [
            {
              path: "conversation/:id",
              element: <Conversation />,
            },
          ],
        },
        {
          path: "settings",
          element: <Settings />,
          children: [
            {
              index: true,
              path: "profile",
              element: <Profile />,
            },
            {
              path: "favorite",
              element: <Favorite />,
            },
            {
              path: "photo-gallery",
              element: <PhotoGallery />,
            },
            {
              path: "details",
              element: <Details />,
            },
            {
              path: "security/change-password",
              element: <ChangePassword />,
            },
            {
              path: "security/delete-account",
              element: <DeleteAccount />,
            },
          ],
        },
      ],
    },
  ],
};
