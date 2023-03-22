import "./TragedyStyles.css";
import { ModeContext } from "../context/userContext";
import { useEffect,useContext } from "react";
import { Link } from "react-router-dom";
function TragedyData(props) {
  const {userData, setUserData,isLoggedin, setIsLoggedIn} = useContext(ModeContext)

  const handleDataReceived = (data) => {
    console.log(data); // Data from grandchild
  };
  useEffect(() => {
    // console.log("user data in navbar",userData)
    // console.log("is Logged in status in navbar", isLoggedin)
    
    }
  , [userData])
  return (
    <div className="t-card">
      <div className="t-img">
        <img alt="img" src={props.img} />
      </div>
      <h4>{props.heading}</h4>
      <p>{props.text}</p>
      <div className="btn-donate" >{userData?<Link to="/donation">Donate</Link>:<Link to="">Donate</Link>}</div>
      
    </div>
    
  );
}
export default TragedyData;
