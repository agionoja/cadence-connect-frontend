import Settings from "../pages/UserViews/Settings.jsx";
import Profile from "../components/settings/Profile.jsx";
import Favorite from "../components/settings/Favorite.jsx";
import PhotoGallery from "../components/settings/PhotoGallery.jsx";
import Details from "../components/settings/Details.jsx";
import ChangePassword from "../components/settings/security/ChangePassword.jsx";
import DeleteAccount from "../components/settings/security/DeleteAccount.jsx";

export default {
  path: "settings",
  element: <Settings />,
  children: [
    {
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
};
