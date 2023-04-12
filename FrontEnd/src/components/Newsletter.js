import React,{useState} from "react";
import { Button } from "react-bootstrap";
import { isEmail } from "./Validation";
import { showErrMsg,showSuccessMsg } from "./Notification";
import axios from "axios";
import { Label } from "recharts";
import "./NewsletterStyles.css";
import "./NewsletterStyles.css";

const initialState={name:"",email:"",err:"",success:""}

function Newsletter() {
    const [data,setData]=useState(initialState);
    const {name,email,err,success}=data;

    const handleChangeInput=e=>{
        const{name,value}=e.target;
        setData({...data,[name]:value,err:"",success:""})
    }
    const subscribe=async()=>{
        if(!isEmail(email)) return setData({...data,err:"Invalid email",success:""})
        try {
            const res=await axios.post("http://localhost:5001/subscriber/subscribe",{name,email})
            return setData({...data,err:"",success:res.data.msg})
        }catch(err) {
            err.response.data.msg && setData({...data,err:err.response.data.msg,success:""})
        }
    }
    return<> <div className="nl_pass">
    <div className="containfr">

    <h2 >Subscribe For Getting Latest Updates</h2>
    <div className="row">
        {err&&showErrMsg(err)}
        {success&&showSuccessMsg(success)}
        <Label htmlFor="name">Enter your Email</Label>
        <input type="text" name="name" id="name" placeholder="Enter Your Name" value={name} onChange={handleChangeInput}/>
        <Label htmlFor="email">Enter your Email</Label>
        <input type="email" name="email" id="email" placeholder="Enter Your Email" value={email} onChange={handleChangeInput}/>
        <Button className="subsbtn" onClick={subscribe}>Subscribe</Button>
    </div>
    </div>
</div></>
   

}
export default Newsletter;



    
