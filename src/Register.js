import React from "react";
import { useFormik } from "formik";
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";
// import { config } from './config';

function Register() {
  let navigate=useNavigate()
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      role: "",
    },
    onSubmit: async (values) => {
      try {        
        console.log(values);
        // console.log(config.api);
      
        const register = await axios.post("https://serverr1234.herokuapp.com/register", values);
        alert(register.data.message);
        if(values.role==="Admin"){
          navigate("/admin")
        }
          else if(values.role==="user"){
            navigate("/dashboard")
          }
      } catch (error) {
        console.log(error);
      }
    },
    
  });
  return (
    <div className="container">
      <form onSubmit={formik.handleSubmit}>
        <div className="row">
          <div className="col-lg-12">
            <label>role</label>
            <input
              type="text"
              placeholder="enter the role"
              className="form-control"
              name="role"
              onChange={formik.handleChange}
              value={formik.values.role}
            />
          </div>
          <div className="col-lg-12">
            <label>Username</label>
            <input
              type="text"
              placeholder="Username"
              className="form-control"
              name="username"
              onChange={formik.handleChange}
              value={formik.values.username}
            />
          </div>
          <div className="col-lg-12">
            <label>Email</label>
            <input
              type="text"
              placeholder="Email"
              className="form-control"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
          </div>
          <div className="col-lg-12">
            <label>Password</label>
            <input
              type="text"
              placeholder="Email"
              className="form-control"
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
          </div>
          <div className="col-lg-12 mt-2">
            <input className="btn btn-primary" type="submit" value="Submit" />
          </div>
          <p>
            Already have account? <Link to="/">Login</Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Register;
