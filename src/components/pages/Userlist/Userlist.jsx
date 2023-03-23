import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../shared/Footer/Footer";
import Header from "../../shared/Header/Header";

const Userlist = () => {
  const [users, setUsers] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [selectPage, setselectPage] = useState(0);
  const [searchEmail, setSearchEmail] = useState("");
  const [searchFullname, setSearchFullname] = useState("");
  const [searchPhone, setSearchPhone] = useState("");
  const [searchMinAge, setSearchMinAge] = useState("");
  const [searchMaxAge, setSearchMaxAge] = useState("");

  //pagination fetch
  useEffect(() => {
    fetch("http://localhost:5000/pagination")
      .then((res) => res.json())
      .then((data) => {
        const usernumber = data.count;
        const pages = Math.ceil(usernumber / 10);
        setPageNumber(pages);
      });
  }, []);

  useEffect(() => {
    fetch(
      `http://localhost:5000/users?page=${selectPage}&size=${10}&email=${searchEmail}&phone=${searchPhone}&fullName=${searchFullname}`
    )
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, [selectPage, searchEmail, searchFullname, searchPhone]);

  return (
    <>
      <Header />
      <div className="container">
        <table class="table table-success table-striped mt-5 mb-5">
          <thead>
            <tr>
              <th scope="col">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSearchFullname(e.target.fullname.value);
                    setSearchEmail("");
                    setSearchPhone("");
                  }}
                >
                  <input
                    type="text"
                    name="fullname"
                    className="form-control form-control-sm"
                    placeholder="Search by Fullname"
                  />
                </form>
              </th>
              <th scope="col">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSearchEmail(e.target.email.value);
                    setSearchFullname("");
                    setSearchPhone("");
                  }}
                >
                  <input
                    type="text"
                    name="email"
                    className="form-control form-control-sm"
                    placeholder="Search by Email"
                  />
                </form>
              </th>
              <th scope="col">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSearchPhone(e.target.phone.value);
                    setSearchEmail("");
                    setSearchFullname("");
                  }}
                >
                  <input
                    type="text"
                    name="phone"
                    className="form-control form-control-sm"
                    placeholder="Search by Phone Number"
                  />
                </form>
              </th>
              <th scope="col">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSearchPhone("");
                    setSearchEmail("");
                    setSearchFullname("");
                  }}
                >
                  <input
                    type="text"
                    name="minAge"
                    className="form-control form-control-sm"
                    placeholder="Minimum Age"
                  />
                  <input
                    type="text"
                    name="maxAge"
                    className="form-control form-control-sm"
                    placeholder="Maximum Age"
                  />
                </form>
              </th>
            </tr>
          </thead>
        </table>

        <table class="table table-success table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">FullName</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Age</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th scope="row">{index + 1}</th>
                <td>{user.fullName}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {[...Array(pageNumber).keys()].map((number) => (
          <button
            className={`${
              number === selectPage ? "bg-warning" : "bg-light"
            }  m-2`}
            onClick={() => setselectPage(number)}
          >
            {number + 1}
          </button>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Userlist;
