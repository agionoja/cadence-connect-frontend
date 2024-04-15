import RootBox from "../components/RootBox.jsx";
import Description from "../pages/Description.jsx";
import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";
import Contact from "../pages/Contact.jsx";
import FAQ from "../pages/FAQ.jsx";
import SignIn from "../pages/SignIn.jsx";
import SignUp from "../pages/SignUp.jsx";
import account from "./account.jsx";
export default {
  path: "/",
  element: <RootBox />,
  children: [
    {
      path: "service-description/:id",
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
    account, // representing a nested account route object
  ],
};
