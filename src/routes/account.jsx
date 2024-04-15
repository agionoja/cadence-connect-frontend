import ProtectedBox from "../components/ProtectedBox.jsx";
import Notifications from "../pages/UserViews/Notifications.jsx";
import Support from "../pages/UserViews/Support.jsx";
import chat from "./chat.jsx";
import settings from "./settings.jsx";

export default {
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
    // objects representing nested routes
    chat,
    settings,
  ],
};
