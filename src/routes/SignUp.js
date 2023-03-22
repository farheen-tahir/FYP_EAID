import Form from "../components/Form";
import Login from "../components/Login";
import { Link } from "react-router-dom";
import { FormItems } from "../components/FormItems";
import axios from "axios";
import {useState} from "react";
import { validator } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';



function SignUp() {
  
  function isValidEmail(email) {

    return /\S+@\S+\.\S+/.test(email);
  }
  // function isValidName(name) {
  //   var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
  //   if(!regName.test(name)){
  //       alert('Invalid name given.');
  //       return false;
  //   }else{
  //       alert('Valid name given.');
  //       return true;
  //   }
  // }
function isValidPass(password) {
  const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*])(?=.{8,})");

const mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");
if(strongRegex.test(password)) {
  return true;
}else if (mediumRegex.test(password)){
return true;
}else {
  return false;
}
}
  const [status, setstatus] = useState(false)
  const [user,setUser]=useState({
    name:"",
    email:"",
    password:"",
    type:""
  });
  // const {name,email,password,type}=user;
  const handleChange = e => {
    const {name,value}=e.target;
    setUser({
      ...user,
      [name]:value
    });
  } 
  const register=()=>{
    const {name,email,password,type}=user;
    if(name&&email&&password&&type) {
      if(isValidPass(password)&&isValidEmail(email)) {
        alert("successfully registered");
        axios.post("http://localhost:5000/signup",user).then(res => console.log(res));
      }
      else {
        alert("invalid");
      }
      
    }else {
      alert("cant empty field");
    }
    
  }
  return (
    <>
     <div class="main">
        <div class="containorupper">
          <div class="inner">
            <p>Login To Coninue</p>
            <Link to="/">
              <i class="fa-solid fa-xmark" ></i>
            </Link>
          </div>
          <div class="mainheading">
            <a onClick={() => setstatus(false)}>Sign In</a>
            <a  onClick={() => setstatus(true)}>Sign Up</a>
          </div>
        </div>
        {!status ? (
          <Login/>
        ):(
          <div className="container">
        <div className="left">
          {/* <form onSubmit={(e)=>signup(e)}> */}
            <input type="text" placeholder="Name" name="name" value={user.name} onChange={handleChange}/>
            <input type="text" placeholder="Email" name="email" value={user.email} onChange={handleChange}/>
            <input type="password" placeholder="Password" name="password" value={user.password} onChange={handleChange}/>
            {/* <input type="text" placeholder="Re-Enter Password" /> */}
            {/* <input type="text" placeholder="State" /> */}
            {/* <div className="left-inner"> */}
              <select id="sign-as"  className="field" name="type" value={user.type} onChange={handleChange}>
                <option disabled="disabled" selected="selected">
                  Register As.
                </option>
                <option value="recipient">Recepient</option>
                <option value="donor" >Donor</option>
              </select>
              {/* <input type="text" className="field" placeholder="Phone" /> */}
            {/* </div> */}
            {/* <p>
              By signing up you are agree to our terms and use and privacy
              policy.
            </p> */}
            <button className="btnlogin" onClick={register}>Create an account</button>
          {/* </form> */}
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
        )}
       
      </div>
      {/* <Form /> */}
      
       {/* <Login /> */}
    </>
  );
}
export default SignUp;
