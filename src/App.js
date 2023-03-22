import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/shared/Header/Header";
import Footer from "./components/shared/Footer/Footer";
import Signup from "./components/pages/Signup/Signup";
import Profile from "./components/pages/Profile/Profile";
import Userlist from "./components/pages/Userlist/Userlist";
import Login from "./components/pages/Login/Login";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Profile />,
    },
    {
      path: "/user",
      element: <Userlist />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
