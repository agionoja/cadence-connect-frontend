import Chat from "../components/chat/Chat.jsx";
import Conversation from "../components/chat/Conversation.jsx";

export default {
  path: "chat",
  element: <Chat />,
  children: [
    {
      path: "conversation/:id",
      element: <Conversation />,
    },
  ],
};
