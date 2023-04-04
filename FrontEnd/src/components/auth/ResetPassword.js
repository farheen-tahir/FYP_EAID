import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { showErrMsg,showSuccessMsg } from "../Notification";
import { isLength,isMatch } from "../Validation";
import { Label } from "recharts";
import { Button } from "react-bootstrap";
import "./ForgotPasswordStyles.css"
const initialState={
    password:"",cf_password:"",err:"",success:""
}
function ResetPassword(){
    const {token}=useParams();
    console.log("data token",useParams())
    const[data,setData]=useState(initialState);
    const {password,cf_password,err,success}=data
    

    const handleChangeInput=e=>{
        const{name,value}=e.target;
        setData({...data,[name]:value,err:"",success:""})
    }
    const resetPassword=async()=>{
        if(isLength(password)) return setData({...data,err:"pass must be 6 character",success:""})
        if(!isMatch(password,cf_password)) return setData({...data,err:"pass not matched",success:""})
        try {
            const res=await axios.post("http://localhost:5001/user/reset",{password},{headers:{Authorization:token}})
            return setData({...data,err:"",success:res.data.msg})
        }catch(err) {
            err.response.data.msg && setData({...data,err:err.response.data.msg,success:""})
        }
    }
    return <>
    
     <div className="fg_pass">
        <h2 >Reset Your Password?</h2>
        <div className="row">
            {err&&showErrMsg(err)}
            {success&&showSuccessMsg(success)}
            
            <Label htmlFor="password"> Password</Label>
            <input type="password" name="password" placeholder="New Password" id="name" value={password} onChange={handleChangeInput}/>
            <Label htmlFor="cf_password"> Confirm Password</Label>
            <input type="password" name="cf_password" placeholder="Confirm New Password" id="email" value={cf_password} onChange={handleChangeInput}/>
          
            <Button className="forgetbtn" onClick={resetPassword}>Reset</Button>
        </div>
    </div>
    </>
}
export default ResetPassword;