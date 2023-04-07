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
import RequiredAuth from "./components/shared/RequiredAuth/RequiredAuth";
import RequiredAdmin from "./components/shared/RequiredAdmin/RequiredAdmin";
import { createContext, useState } from "react";

export const AppContext = createContext();

function App() {
  const [adminNum, setAdminNum] = useState(0);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <RequiredAuth>
          <Profile />
        </RequiredAuth>
      ),
    },
    {
      path: "/user",
      element: (
        <RequiredAuth>
          <Userlist />
        </RequiredAuth>
      ),
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
    <AppContext.Provider value={[adminNum, setAdminNum]}>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </AppContext.Provider>
  );
}

export default App;
