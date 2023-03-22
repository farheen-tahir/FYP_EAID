import "./styles.css";
import Home1 from "./routes/Home1";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Donation from "./routes/Donation";
import { Route, Routes } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import ActivateEmail from "./routes/ActivateEmail";
import Home from "./dashboard/pages/home/Home";
import {ModeContext} from './context/userContext'
import { useDispatch,useSelector } from "react-redux";
import { dispatchLogin } from "./components/redux/actions/authAction";

// import "../src/dashboard/style/dark.css";
// import { useContext } from "react";
// import { DarkModeContext } from "./dashboard/context/darkModeContext";



export default function App() {
  // const dispatch=useDispatch()
  // const token=useSelector(state=>state.token)
  // const auth=useSelector(state=>state.auth)
  // useEffect(()=>{
  //   const firstLogin=localStorage.getItem("firstLogin")
  //   if(firstLogin) {
  //     console.log("first log created")
  //     const getToken=async()=>{
  //       const res=await axios.post("http://localhost:5001/user/refresh_token",null)
  //       console.log("res is this",res)
  //       dispatch({type:"GET_TOKEN",payload:res.data.access_token})
  //     }
  //     getToken()
  //   }
  // },[auth.isLogged,dispatch])
  // useEffect(()=>{
  //   if(token){
  //     const getUser=()=>{
  //       dispatch(dispatchLogin())
  //       return fetchUser(token).then(res=>{
  //         dispatch(dispatchGetUser(res))

  //       }) 
  //     }
  //     getUser()
  //   }
  // },[token],dispatch)
  const [userData, setUserData] = useState();
  const [isLoggedin, setIsLoggedIn] = useState(false);

  // const { darkMode } = useContext(DarkModeContext);
  const[user,setUser]=useState(null);
  const getUser=async()=>{
    try{
const url=`${process.env.REACT_APP_API_URL}/auth/login/success`;
const {data}=await axios.get(url,{withCredentials:true});
setUser(data.user._json);
    }catch(err) {
console.log(err);

    }
  };
  useEffect(()=>{
    getUser();
  },[])
  //farheen code
 
  return (
    // <div className={darkMode ? "app dark" : "app"}>
    <ModeContext.Provider value={{userData, setUserData, isLoggedin, setIsLoggedIn}}>
    <div className="App">
      <Routes>
        <Route path="/" element={<Home1 />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dashboard" element={<Home />} />
        {/* <Route path="/signin" element={<SignUp />} /> */}
        <Route path="/donation" element={<Donation />} />
        <Route path="/user/activate/:activation_token" element={<ActivateEmail />}  exact/>
      </Routes>
    </div>
    </ModeContext.Provider>
  );
}

