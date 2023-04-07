import React, { useContext } from "react";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import useAdmin from "../../hooks/useAdmin";
import { AppContext } from "../../../App";

const Header = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  const [signOut, loading, error] = useSignOut(auth);
  const [adminNum, setAdminNum] = useContext(AppContext);

  return (
    <>
      <nav class="navbar navbar-expand-lg bg-warning">
        <div class="container">
          <Link to="/" class="navbar-brand">
            Hero Rider
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                {user && (
                  <Link class="nav-link active" aria-current="page" to="/">
                    Profile
                  </Link>
                )}
              </li>
              <li class="nav-item">
                {user && (
                  <Link to="/user" class="nav-link">
                    Users
                  </Link>
                )}
              </li>
              <li class="nav-item">
                {!user && (
                  <Link to="/signup" class="nav-link" href="#">
                    Signup
                  </Link>
                )}
              </li>
              <li class="nav-item">
                {user ? (
                  <Link to="/login" onClick={() => signOut()} class="nav-link">
                    Logout
                  </Link>
                ) : (
                  <Link to="/login" class="nav-link">
                    Login
                  </Link>
                )}
              </li>
              <li class="nav-item">
                <h6>Admin Number - {adminNum}</h6>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
