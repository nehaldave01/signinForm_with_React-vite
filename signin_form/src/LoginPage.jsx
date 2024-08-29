import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup_form = () => {
  const [data, setData] = useState({ email: "", password: "" });

  // REGEX //
  let emailRegex = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
  let passwordRegex =/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submit1 = () => {
    if (Notify()) {
      let getData = JSON.parse(localStorage.getItem("signup")) || [];

      let findData = getData.find((e) => e.email === data.email &&  e.password === data.password);

      if (!findData) {

        // localStorage.setItem("signup", JSON.stringify(getData));
        localStorage.setItem("login", JSON.stringify(data));
        toast.success("Success");
      }
      else{
        toast.error("Email already exists")
      }
      setData({ email: "", password: "" });
    }
  };
  
  const Notify = () => {
    let status = true;

    if (data.email.length === 0) {
      toast.error("Email required!");
      status = false;
    } else if (!emailRegex.test(data.email)) {
      toast.error("Invalid Email Address");
      status = false;
    }

    if (data.password.length === 0) {
      toast.error("Password required!");
      status = false;
    } else if (!passwordRegex.test(data.password)) {
      toast.error("Invalid Password Address");
      status = false;
    }

    return status;
  };
  

  return (
    <div className="container">
      <div className="shadow w-25 mx-auto m-5 p-4">
        <h1 className="text-center">Login page</h1>

        <div className="m-2">
          <label htmlFor="">Email:</label>
          <input
            type="text"
            className="form-control"
            name="email"
            value={data.email}
            onChange={handleChange}
          />
        </div>
        {/* {err.email && <p style={{color:"red"}}>{err.email}</p>} */}

        <div className="m-2">
          <label htmlFor="">Password:</label>
          <input
            type="text"
            className="form-control"
            name="password"
            value={data.password}
            onChange={handleChange}
          />
        </div>
        {/* {err.password && <p style={{color:"red"}}>{err.password}</p>} */}

        <div className="d-grid col-6 mx-auto mt-5">
          <button className="btn btn-primary" onClick={submit1}>
            Submit
          </button>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Signup_form;
