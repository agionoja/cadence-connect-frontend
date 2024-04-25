import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthProvider from "./context/AuthProvider.jsx";
import root from "./routes/root.jsx";

const router = createBrowserRouter([root]);
export default function App() {
  // const [isOpen, setIsOpen] = useState(false);
  // return (
  //   <>
  //     <button
  //       onClick={() => setIsOpen(true)}
  //       className={"bg-black p-4 text-lg font-medium text-white"}
  //     >
  //       Open Modal{" "}
  //     </button>
  //     <AddImagePopup onClose={() => setIsOpen(false)} isOpen={isOpen} />
  //   </>
  // );
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}
