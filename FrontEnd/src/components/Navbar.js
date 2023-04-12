import React, { useEffect, useState, useContext } from "react";
import "./NavbarStyles.css";
import { MenuItems } from "./MenuItems";
import {Button , Modal} from "react-bootstrap";
import { BrowserRouter as Router, Link } from "react-router-dom";
import SignUp  from "../routes/SignUp";
import SignUpModal from "./SignUpModal";
import { useSelector } from "react-redux";
import { ModeContext } from "../context/userContext";
import image from '../assets/img/img-1.jpg' 
import logo from "../assets/logo.PNG";


function Navbar() {
  const {userData, setUserData,isLoggedin, setIsLoggedIn} = useContext(ModeContext)

  const handleDataReceived = (data) => {
    console.log(data); // Data from grandchild
  };
  useEffect(() => {
    console.log("user data in navbar",userData)
    console.log("is Logged in status in navbar", isLoggedin)
    
    }
  , [userData])
  

  const auth=useSelector(state=>state.auth)
  console.log("auth is : ",auth)
  const {user,isLogged}=auth;
  console.log("user is : ",user)
  const userLink=()=>{
    return <li>
      <Link><img src="user.avatar" alt=" "/></Link>
    </li>
  }
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);

  const handleClose = () => setShow(false);
  const [state, handleState] = useState(false);
  function handleClick() {
    return handleState(!state);
  }
  return (
    <>
    <div>
      <nav className="NavbarItems">
        <div className="navbar-logo-items">
          <img className="navbar-logo-img" src={logo}/>
          <h1 className="navbar-logo">EAid</h1>
        </div>
        <div className="menu-icons" onClick={handleClick}>
          <i className={state ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
        </div>
        <ul className={state ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li  key={index}>
              {!userData?item.title!="Donation"&&item.title!="News"?
              <Link to={item.url} className={item.cName}>
                  <i className={item.icon} aria-hidden="true"></i>
                  {item.title}
                </Link>:null:<Link to={item.url} className={item.cName}>
                  <i className={item.icon} aria-hidden="true"></i>
                  {item.title}
                </Link>
              }
                
              </li>
            );
          })}

           {userData? <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <img src={image} style={{ borderRadius: '50%', width: '40px', height: '40px' }} />
    <span style={{marginBottom:'-5px',  fontSize: '18px', fontWeight: 'bold' }}>{userData}</span>
  </div> : <Button variant="primary" className="button" onClick={handleShow}> Sign In </Button>}
          {/* /* </Link> */}
        </ul>
      </nav></div>
     
        {/* <div>
        <Modal show={show} onHide={handleClose} style={{ display: "flex", justifyContent: "center",alignItems:"center",marginTop:"60px"}}>
        <Modal.Header closeButton>
          <Modal.Title>
          <p>Login To Coninue</p>
         
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ marginTop:"-15px",padding:"0"}}><SignUp /></Modal.Body>
      </Modal>
        </div> */}
        <SignUpModal show={show} handleClose={handleClose} onDataReceived={handleDataReceived}/>
 
    
       
     
      {/* {pop ? <Form /> : ""} */}
    </>
  );
}
export default Navbar;
