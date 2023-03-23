import React from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Footer from "../../shared/Footer/Footer";
import Header from "../../shared/Header/Header";

const Login = () => {
  const navigate = useNavigate();
  let location = useLocation();

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const handleLogin = (e) => {
    e.preventDefault();
    const emailInput = e.target.email.value;
    const pass = e.target.password.value;
    signInWithEmailAndPassword(emailInput, pass);
  };

  let from = location?.state?.from?.pathname || "/";

  if (user) {
    navigate(from, { replace: true });
  }

  return (
    <>
      <Header />
      <div className="container">
        <h2 className="mb-3 mt-5">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="row justify-content-center">
            <div className="col-md-4">
              <input
                className="mb-3 form-control form-control-md"
                type="email"
                name="email"
                required
                placeholder="Enter Your Email"
              />
              <input
                className="mb-3 form-control form-control-md"
                type="password"
                name="password"
                required
                placeholder="Enter Your Password"
              />
              <p className="text-danger">{error ? error.message : ""}</p>
              <input type="submit" value="Login" className="btn btn-warning" />
            </div>
          </div>
        </form>
        <p className="mt-3">
          Create An Account?{" "}
          <Link to="/signup" className="text-warning">
            Sign Up
          </Link>
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Login;
