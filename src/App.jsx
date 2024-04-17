import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthProvider from "./context/AuthProvider.jsx";
import root from "./routes/root.jsx";
import AddImagePopup from "./components/AddImagePopup.jsx";

const router = createBrowserRouter([root]);
export default function App() {
  return (
    // <AuthProvider>
    //   <RouterProvider router={router} />
    // </AuthProvider>
    <>
      <AddImagePopup />
    </>
  );
}
