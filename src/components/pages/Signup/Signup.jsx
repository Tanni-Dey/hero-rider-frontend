import React from "react";
// import auth from "../../../firebase.init";
import Footer from "../../shared/Footer/Footer";
import Header from "../../shared/Header/Header";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

const Signup = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const handleSignup = (e) => {
    e.preventDefault();
    const fullNameInput = e.target.fullName.value;
    const emailInput = e.target.email.value;
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
    };
    console.log(data);
  };

  return (
    <>
      <Header />
      <h2>Signup</h2>
      <form onSubmit={handleSignup}>
        <input
          type="text"
          name="fullName"
          required
          placeholder="Enter Your Full Name"
        />
        <input
          type="email"
          name="email"
          required
          placeholder="Enter Your Email"
        />
        <input
          type="number"
          name="age"
          required
          placeholder="Enter Your Eage"
        />
        <input
          type="text"
          name="address"
          required
          placeholder="Enter Your Address"
        />
        <input
          type="text"
          name="phone"
          required
          placeholder="Enter Your Phone Number"
        />
        <input
          type="text"
          name="drivingLicence"
          required
          placeholder="Enter Your Driving licence"
        />
        <input type="text" name="area" required placeholder="Enter Your Area" />
        <input
          type="text"
          name="nidPic"
          required
          placeholder="Enter Your Nid Picture"
        />
        <input
          type="text"
          name="profilePic"
          required
          placeholder="Enter Your Profile Pic"
        />
        <input
          type="text"
          name="carName"
          required
          placeholder="Enter Your Car Name"
        />
        <input
          type="text"
          name="carModel"
          required
          placeholder="Enter Your Car Model"
        />
        <input
          type="text"
          name="carNamePalate"
          required
          placeholder="Enter Your Car Name Palate"
        />
        <input
          type="password"
          name="password"
          required
          placeholder="Enter Your Password"
        />
        <input
          type="password"
          name="cPassword"
          required
          placeholder="Enter Your Confirm Password"
        />
        <select name="vehicle">
          <option value="car">Car</option>
          <option value="bike">Bike</option>
        </select>

        <input type="submit" value="Sign Up" />
      </form>
      <Footer />
    </>
  );
};

export default Signup;
