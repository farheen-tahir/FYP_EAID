import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Mission from "../components/Mission";
import Tragedy from "../components/Tragedy";
import Footer from "../components/Footer";
import {useJsApiLoader} from "@react-google-maps/api";
import Map from "../components/Map";
import { mapOptions } from "../components/MapConfiguration";
import { useDispatch,useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { dispatchLogin,fetchUser,dispatchGetUser } from "../components/redux/actions/authAction";
import Newsletter from "../components/Newsletter";
// import {dispatchGetUser}
function Home1() {
  const dispatch=useDispatch()
  const token=useSelector(state=>state.token)
  const auth=useSelector(state=>state.auth)
  const {user,isLogged}=auth
  useEffect(()=>{
    const firstLogin=localStorage.getItem("firstLogin")
    if(firstLogin) {
      console.log("first log created")
      const getToken=async()=>{
        const res=await axios.post("http://localhost:5001/user/refresh_token",null)
        console.log("res is this",res)
        dispatch({type:"GET_TOKEN",payload:res.data.access_token})
      }
      getToken()
    }
  },[auth.isLogged,dispatch])
  useEffect(()=>{
    if(token){
      const getUser=()=>{
        dispatch(dispatchLogin())
        // return fetchUser(token).then(res=>{
        //   dispatch(dispatchGetUser(res)
        //   )

        // }
        // ) 
      }
      getUser()
    }
  },[token],dispatch)
  const {isLoaded}=useJsApiLoader({
    id:mapOptions.googleMapApiKey,
    googleMapApiKey:mapOptions.googleMapApiKey
  });
 
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg={require("../assets/banner.png")}
        title="Help The Poor For Their Better Future"
        txt="Everyday we bring hope to Pakistanis's lives as a sign of God's unconditional love."
        btnClass="show"
        url="/donation"
        btnText="Donate"
      />
      <Mission />
      <Tragedy />
      {isLogged?<Map isLoaded={isLoaded}/>:null}
      <Newsletter />
      <Footer />
    </>
  );
}
export default Home1;
