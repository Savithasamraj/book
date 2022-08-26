import React from 'react'
import {useFormik} from "formik";
import {Link, useNavigate} from "react-router-dom"; 
import axios from "axios"
// import config from "./config.js"


function Login() {
  let navigate=useNavigate()
    const formik=useFormik({
        initialValues: {
            role:"",
          username: "",
          email: "",
          password: "",
        },
        onSubmit: async(values)=>{
          try{
const user=await axios.post("https://serverr1234.herokuapp.com",values);
console.log(user)
localStorage.setItem("react_app_token", user.data.token);
if(values.role==="Admin"){
  navigate("/admin")
}
  else if(values.role==="user"){
    navigate("/dashboard")
  }
  else{
    alert("type Admin or user")
  }
}
          catch(error){
            console.log(error)
          }
        }
    })

  return (

    <div className="container">
      <h1>hello</h1>
      <form onSubmit={formik.handleSubmit}>
        <div className="row">
        <div className="col-lg-8">
            <label>role</label>
            <input
              type={"text"}
              placeholder={"enter the role"}
              className={"form-control"}
              name={"role"}
              value={formik.values.role}
              onChange={formik.handleChange}
            />
          </div>
          <div className="col-lg-8">
            <label>Username</label>
            <input
              type={"text"}
              placeholder={"Username"}
              className={"form-control"}
              name={"username"}
              value={formik.values.username}
              onChange={formik.handleChange}
            />
          </div>
          <div className="col-lg-8">
            <label>Password</label>
            <input
              type={"text"}
              placeholder={"Password"}
              className={"form-control"}
              name={"password"}
              value={formik.values.password}
              onChange={formik.handleChange}
            />
          </div>
          <div className="col-lg-8 mt-2">
            <input type={"submit"} className={"btn btn-primary"} />
          </div>
          <p>
            Dont have account? <Link to={"/register"}>Sign-in</Link>
          </p>
        </div>
      </form>
    </div>
  );
  
}

export default Login