import AccountBox from "../pages/UserViews/AccountBox.jsx";
import Notifications from "../pages/UserViews/Notifications.jsx";
import Support from "../pages/UserViews/Support.jsx";
import chat from "./chat.jsx";
import settings from "./settings.jsx";

export default {
  path: "account",
  element: <AccountBox />,
  children: [
    chat,
    settings,
    {
      path: "notifications",
      element: <Notifications />,
    },
    {
      path: "support",
      element: <Support />,
    },
  ],
};
