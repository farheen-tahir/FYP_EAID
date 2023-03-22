import "./FormStyles.css";
import { Link } from "react-router-dom";
import { FormItems } from "./FormItems";
import { useState } from "react";
import axios from "axios";
import { showErrMsg,showSuccessMsg } from "./Notification";
import {isEmpty,isEmail,isLength,isMatch} from "./Validation"
function Form() {
  
  const [user,setUser]=useState({
    name:"",
    email:"",
    password:"",
    cf_password:"",
    err:"",
    success:""
    // type:""
  });
  const {name,email,password,cf_password,err,success}=user;
  const handleChange = e => {
    const {name,value}=e.target;
    setUser({
      ...user,
      [name]:value,err:"",success:""
    });
  } 
  const register=async e=>{
    e.preventDefault();
    if(isEmpty(name)||isEmpty(password))
      return setUser({...user,err:"Please fill in all fields",success:""});
      if(!isEmail(email))
      return setUser({...user,err:"Invalid email",success:""});
      if(isLength(password))
      return setUser({...user,err:"Password must be atleast 6 characters",success:""});
      if(!isMatch(password,cf_password))
      return setUser({...user,err:"Password didn't match",success:""});
    try {
      
      const res=await axios.post("http://localhost:5001/user/register",{name,email,password})
      setUser({...user,err:"",success:res.data.msg});
      
    }catch(err) {
      err.response.data.msg && 
            setUser({...user,err:err.response.data.msg,success:""});
    }
     
  }
  
  return (
    <>
      <div className="container">
        <div className="left">
        {err&&showErrMsg(err)}
        {success&&showSuccessMsg(success)}
          <form onSubmit={register}>
            <input type="text" placeholder="Name" name="name" value={user.name} onChange={handleChange}/>
            <input type="text" placeholder="Email" name="email" value={user.email} onChange={handleChange}/>
            <input type="password" placeholder="Password" name="password" value={user.password} onChange={handleChange}/>
            <input type="password" placeholder="Confirm Password" name="cf_password" value={user.cf_password} onChange={handleChange}/>
            
              {/* <select id="sign-as"  className="field" name="type" value={user.type} onChange={handleChange}>
                <option selected="selected" >
              Registered As
                </option>
                <option value="recipient">Recepient</option>
                <option value="donor" >Donor</option>
              </select> */}
            
            <button className="btnlogin" type="submit">Create an account</button>
          </form>
          <p>Already have an account? <Link to="/Login">Login</Link></p>
        </div>
        <div className="seperator">
          <span></span>
        </div>
        <div className="sep">
          <span></span>
        </div>
        <div className="right">
          {/* <!-- <div class="card-body"> --> */}
          {FormItems.map((item, index) => {
            return (
              <a
                key={index}
                className={item.cName}
                href={item.url}
                role="button"
              >
                <i className={item.icon}></i>
                {item.title}
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default Form;

