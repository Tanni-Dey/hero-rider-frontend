import React, { useState } from "react";
// import auth from "../../../firebase.init";
import Footer from "../../shared/Footer/Footer";
import Header from "../../shared/Header/Header";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [riderPassError, setRiderPassError] = useState("");
  const [learnerPassError, setLearnerPassError] = useState("");

  const handleRiderSignup = (e) => {
    e.preventDefault();
    const fullNameInput = e.target.fullName.value;
    const emailInput = e.target.email.value;
    const pass = e.target.password.value;
    const cPass = e.target.cPassword.value;
    const ageInput = e.target.age.value;
    const addressInput = e.target.address.value;
    const phoneInput = e.target.phone.value;
    const drivingLicenceInput = e.target.drivingLicence.value;
    const nidPicInput = e.target.nidPic.value;
    const profilePicInput = e.target.profilePic.value;
    const carNameInput = e.target.carName.value;
    const carModelInput = e.target.carModel.value;
    const carNamePalateInput = e.target.carNamePalate.value;
    const vehicleInput = e.target.vehicle.value;

    const data = {
      fullName: fullNameInput,
      email: emailInput,
      age: ageInput,
      address: addressInput,
      phone: phoneInput,
      drivingLicence: drivingLicenceInput,
      nidPic: nidPicInput,
      profilePic: profilePicInput,
      carName: carNameInput,
      carModel: carModelInput,
      carNamePalate: carNamePalateInput,
      vehicle: vehicleInput,
      role: "rider",
    };
    if (pass === cPass) {
      setRiderPassError("");
      createUserWithEmailAndPassword(emailInput, pass);
      if (!error) {
        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((addData) => console.log(addData));
        // e.target.reset();
      }
    } else {
      setRiderPassError("Password and Confirm Password is not same");
    }
    console.log(data);
  };

  const handleLearnerSignup = (e) => {
    e.preventDefault();
    const fullNameInput = e.target.learnerFullName.value;
    const emailInput = e.target.learnerEmail.value;
    const pass = e.target.learnerPassword.value;
    const cPass = e.target.learnerCPassword.value;
    const ageInput = e.target.learnerAge.value;
    const addressInput = e.target.learnerAddress.value;
    const phoneInput = e.target.learnerPhone.value;
    const nidPicInput = e.target.learnerNidPic.value;
    const profilePicInput = e.target.learnerProfilePic.value;
    const vehicleInput = e.target.learnerVehicle.value;

    const data = {
      fullName: fullNameInput,
      email: emailInput,
      age: ageInput,
      address: addressInput,
      phone: phoneInput,
      nidPic: nidPicInput,
      profilePic: profilePicInput,
      vehicle: vehicleInput,
      role: "learner",
    };

    if (pass === cPass) {
      setLearnerPassError("");
      createUserWithEmailAndPassword(emailInput, pass);

      fetch("http://localhost:5000/users", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((addData) => console.log(addData));
      // e.target.reset();
    } else {
      setLearnerPassError("Password and Confirm Password is not same");
    }
    console.log(data);
  };
  if (user) {
    navigate("/");
  }
  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h3 className="mb-4 mt-4">Join As Rider</h3>
            <form onSubmit={handleRiderSignup}>
              <div className="row">
                <div className="col-md-6">
                  <input
                    className="mb-3 form-control form-control-md"
                    type="text"
                    name="fullName"
                    required
                    placeholder="Enter Your Full Name"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    className="mb-3 form-control form-control-md"
                    type="email"
                    name="email"
                    required
                    placeholder="Enter Your Email"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    className="mb-3 form-control form-control-md"
                    type="number"
                    name="age"
                    required
                    placeholder="Enter Your Age"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    className="mb-3 form-control form-control-md"
                    type="text"
                    name="address"
                    required
                    placeholder="Enter Your Address"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    className="mb-3 form-control form-control-md"
                    type="text"
                    name="phone"
                    required
                    placeholder="Enter Your Phone Number"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    className="mb-3 form-control form-control-md"
                    type="text"
                    name="drivingLicence"
                    required
                    placeholder="Enter Your Driving licence"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    className="mb-3 form-control form-control-md"
                    type="text"
                    name="area"
                    required
                    placeholder="Enter Your Area"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    className="mb-3 form-control form-control-md"
                    type="text"
                    name="nidPic"
                    required
                    placeholder="Enter Your Nid Picture"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    className="mb-3 form-control form-control-md"
                    type="text"
                    name="profilePic"
                    required
                    placeholder="Enter Your Profile Pic"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    className="mb-3 form-control form-control-md"
                    type="text"
                    name="carName"
                    required
                    placeholder="Enter Your Car Name"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    className="mb-3 form-control form-control-md"
                    type="text"
                    name="carModel"
                    required
                    placeholder="Enter Your Car Model"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    className="mb-3 form-control form-control-md"
                    type="text"
                    name="carNamePalate"
                    required
                    placeholder="Enter Your Car Name Palate"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    className="mb-3 form-control form-control-md"
                    type="password"
                    name="password"
                    required
                    placeholder="Enter Your Password"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    className="mb-3 form-control form-control-md"
                    type="password"
                    name="cPassword"
                    required
                    placeholder="Enter Your Confirm Password"
                  />
                  <span className="text-danger">{riderPassError}</span>
                </div>
                <div className="col-md-6">
                  <select
                    name="vehicle"
                    className="mb-3 form-control form-control-md"
                  >
                    <option value="car">Car</option>
                    <option value="bike">Bike</option>
                  </select>
                </div>
                <p className="text-danger">{error ? error.message : ""}</p>
              </div>
              <input
                type="submit"
                value="Sign Up As Rider"
                className="btn btn-warning"
              />
            </form>
          </div>
          <div className="col-md-6">
            <h3 className="mb-4 mt-4">Join As Learner.</h3>
            <form onSubmit={handleLearnerSignup}>
              <div className="row">
                <div className="col-md-6">
                  <input
                    className="mb-3 form-control form-control-md"
                    type="text"
                    name="learnerFullName"
                    required
                    placeholder="Enter Your Full Name"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    className="mb-3 form-control form-control-md"
                    type="email"
                    name="learnerEmail"
                    required
                    placeholder="Enter Your Email"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    className="mb-3 form-control form-control-md"
                    type="number"
                    name="learnerAge"
                    required
                    placeholder="Enter Your Age"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    className="mb-3 form-control form-control-md"
                    type="text"
                    name="learnerAddress"
                    required
                    placeholder="Enter Your Address"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    className="mb-3 form-control form-control-md"
                    type="text"
                    name="learnerPhone"
                    required
                    placeholder="Enter Your Phone Number"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    className="mb-3 form-control form-control-md"
                    type="text"
                    name="learnerNidPic"
                    required
                    placeholder="Enter Your Nid Picture"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    className="mb-3 form-control form-control-md"
                    type="text"
                    name="learnerProfilePic"
                    required
                    placeholder="Enter Your Profile Pic"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    className="mb-3 form-control form-control-md"
                    type="password"
                    name="learnerPassword"
                    required
                    placeholder="Enter Your Password"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    className="mb-3 form-control form-control-md"
                    type="password"
                    name="learnerCPassword"
                    required
                    placeholder="Enter Your Confirm Password"
                  />
                  <span className="text-danger">{learnerPassError}</span>
                </div>
                <div className="col-md-6">
                  <select
                    name="learnerVehicle"
                    className="mb-3 form-control form-control-md"
                  >
                    <option value="car">Car</option>
                    <option value="bike">Bike</option>
                  </select>
                </div>
                <p className="text-danger">{error ? error.message : ""}</p>
              </div>
              <input
                type="submit"
                value="Sign Up as Learner"
                className="btn btn-warning"
              />
            </form>
            <p className="mt-3">
              Already Have An Account?
              <Link to="/login" className="text-warning">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Signup;
