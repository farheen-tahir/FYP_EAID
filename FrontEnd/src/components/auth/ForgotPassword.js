import React,{useState} from "react";
import axios from "axios";
import { isEmail } from "../Validation";
import { showErrMsg,showSuccessMsg } from "../Notification";
import { Label } from "recharts";
import { Button } from "react-bootstrap";
import "./ForgotPasswordStyles.css";

const initialState={
    email:"",
    err:"",
    success:""
}


function ForgotPassword(){

    const [data,setData]=useState(initialState);
    const {email,err,success}=data;

    const handleChangeInput=e=>{
        const{name,value}=e.target;
        setData({...data,[name]:value,err:"",success:""})
    }
    const forgotPassword=async()=>{
        if(!isEmail(email)) return setData({...data,err:"Invalid email",success:""})
        try {
            const res=await axios.post("http://localhost:5001/user/forgot",{email})
            return setData({...data,err:"",success:res.data.msg})
        }catch(err) {
            err.response.data.msg && setData({...data,err:err.response.data.msg,success:""})
        }
    }

    return <>
    <div className="fg_pass">
        <h2 >Forgot Your Password?</h2>
        <div className="row">
            {err&&showErrMsg(err)}
            {success&&showSuccessMsg(success)}
            <Label htmlFor="email">Enter your Email</Label>
            <input type="email" name="email" placeholder="Enter Your Email" id="email" value={email} onChange={handleChangeInput}/>
            <Button className="forgetbtn" onClick={forgotPassword}>Verify Email</Button>
        </div>
    </div>
    </>
}

export default ForgotPassword