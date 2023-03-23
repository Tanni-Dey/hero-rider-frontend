import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const useAdmin = (user) => {
  //   const [user] = useAuthState(auth);
  const [admin, setAdmin] = useState(false);
  const [adminLoading, setLoading] = useState(true);
  const email = user?.email;
  if (email) {
    fetch(`https://hero-rider-backend.onrender.com/admin/${email}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setAdmin(data.admin);
        console.log(data.admin);
      });
  }
  return [admin, adminLoading];
};

export default useAdmin;
