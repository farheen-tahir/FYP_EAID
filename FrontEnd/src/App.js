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
import ForgotPass from "./routes/ForgotPass"
import { useDispatch, useSelector } from "react-redux";
import Login from "./dashboard/pages/login/Login";
import List from "./dashboard/pages/list/List";
import Form from "./dashboard/pages/form/Form";
import Single from "./dashboard/pages/single/Single";
import New from "./dashboard/pages/new/New";
import { productInputs, userInputs } from "./dashboard/formSource";
import NewForm from './dashboard/components/newForm/NewForm';
import News from "./components/News";
import "./dashboard/style/dark.css";
import { DarkModeContext } from "./dashboard/context/darkModeContext";
import ResetPass from "./routes/ResetPass";



// export default function App() {
//  const dispatch=useDispatch();
//  const token=useSelector(state=>state.token);
//  const auths=useSelector(state=>state.auth);
//  useEffect(()=>{
// const firstLogin=localStorage.getItem("fistLogin")
// if(firstLogin) {
//   const getToken=async()=>{
//     const res=await axios.post("http://localhost:5001/user/refresh_token",null)
//     console.log("res is : ",res)
//   }
//   getToken()
// }
//  },[auths.isLogged])

export default function App() {
  // const dispatch=useDispatch()
  // const token=useSelector(state=>state.token)
  const auth=useSelector(state=>state.auth)
  const {users,isLogged}=auth;
  const [userData, setUserData] = useState();
  const [isLoggedin, setIsLoggedIn] = useState(false);
  const { darkMode } = useContext(DarkModeContext);
  const [user, setUser] = useState(null);
  const getUser = async () => {
    try {
      const url = `${process.env.REACT_APP_API_URL}/auth/login/success`;
      const { data } = await axios.get(url, { withCredentials: true });
      setUser(data.user._json);
    } catch (err) {
      console.log(err);

    }
  };
  useEffect(() => {
    getUser();
  }, [])
  return (
    <ModeContext.Provider value={{ userData, setUserData, isLoggedin, setIsLoggedIn }}>
      <div className={darkMode ? "App dark" : "App"}>
        <Routes>
          <Route exact path="/" element={<Home1 />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="dashboard/user/new" element={<New inputs={userInputs} title="Add New User" />} />          
          <Route exact path="/dashboard">
            <Route index element={<Home />} />
            <Route exact path="/dashboard/login" element={<Login />} />
            <Route exact path="/dashboard/form" element={<Form />} />
            <Route exact path="/dashboard/user">
              <Route index element={<List />} />
              <Route exact path=":userId" element={<Single />} />
            </Route>
            <Route exact path="admin">

              <Route index element={<List />} />
              <Route exact path=":userId" element={<Single />} />
              <Route
                exact path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              />
            </Route>
            <Route exact path="form" element={<NewForm />} />

            <Route exact path="donations">
              <Route index element={<List />} />
              <Route exact path=":productId" element={<Single />} />
              <Route
                exact path="new"
                element={<New inputs={productInputs} title="Add New Product" />}
              />
            </Route>
          </Route>
          <Route exact path="/formm" element={<NewForm />} />
          <Route exact path="/news" element={isLogged?<News />:null} />
          <Route exact path="/donation" element={<Donation />} />
          <Route exact path="/user/activate/:activation_token" element={<ActivateEmail />} />
          <Route exact path="/forgot_password" element={<ForgotPass />} />
          <Route exact path="/user/reset/:token" element={<ResetPass/>} />
          {/* <Route exact path="/user/reset" element={<ResetPass/>} /> */}
        </Routes>
      </div>
      {/* hello world*/}
    </ModeContext.Provider>
  );
}

