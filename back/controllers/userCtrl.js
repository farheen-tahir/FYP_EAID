const Users=require("../models/userModel");
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
const {CLIENT_URL}=process.env.CLIENT_URL;
const sendMail=require("./sendMail");

const userCtrl={
    register:async(req,res)=>{
        try{
            console.log(req.body);
            const{name,email,password}=req.body;
            if(!name||!email||!password){
                return res.status(400).json({msg:"please fill in all fields"});
            }
            if(!validateEmail(email)){
                return res.status(400).json({msg:"please correct the email format"});
            }
            const user=await Users.findOne({email});
            if(user){
                return res.status(400).json({msg:"Email already exist"});
            }
            if(password.length<6){
              return  res.status(400).json({msg:"pass must be atleast 6 character"});
            }

            const passwordHash=await bcrypt.hash(password,12);
            // console.log(passwordHash);
           const newUser={
            name,email,password:passwordHash
           } 

           const activation_token=createActivationToken(newUser);

           console.log(activation_token);
           await newUser.save();
           const url=`${process.env.CLIENT_URL}/user/activate/${activation_token}`;
           
           sendMail(email,url,"Verify your Email Address");

           console.log({activation_token});
            res.json({msg:"resgister successfully!please activate your email to start."})
        }catch(err){
            return res.status(500).json({msg:err.message})
        }
    },
    activateEmail:async(req,res)=>{
        try {
        const {activation_token}=req.body;
        const user=jwt.verify(activation_token,process.env.ACTIVATION_TOKEN_SECRET)
        const {name,email,password}=user;
        const check=await Users.findOne({email})
        if(check) return res.status(400).json({msg:"This email already exists."});
        const newUsers=new Users({
            name,email,password
        });
        await newUsers.save();
        res.json({msg:"Account has been activated"});
        }catch(err){
        return res.status(500).json({msg:err.message})
        }
    },
    login:async(req,res)=>{
        try{
            const {email,password}=req.body;
            console.log(email);
            const user=await Users.findOne({email});
            if(!user) return res.status(400).json({msg:"This Email does not exist."})

            const isMatch=await bcrypt.compare(password,user.password)
            if(!isMatch) return res.status(400).json({msg:"Pin is incorrect"})
            console.log(user);
            const refresh_token=createRefreshToken({id:user._id});
            res.cookie("refreshtoken",refresh_token,{
                httpOnly:true,
                path:"/user/refresh_token",
                maxAge:7*24*60*60*1000//7 days
            })
            const accessToken = jwt.sign(user._id, 'secret', {expiresIn:'15m'});
            res.json({msg:"Login Successful", data:{user}, token:accessToken});
            res.status(200);
            console.log(res.status, 'with token : ', accessToken);

        }catch(err) {
            return res.status(500).json({msg:err.message});
        }
    },
    getAccessToken:(req,res)=>{
        try{
            const rf_token=req.cookies.refreshtoken;
            if(!rf_token) return res.status(400).json({msg:"Please! Login now"}); 
            jwt.verify(rf_token,process.env.REFRESH_TOKEN_SECRET,(err,user)=>{
                if(err) return res.status(400).json({msg:"Please! Login now"}); 
                console.log(user);
                const access_token=createAccessToken({id:user.id})
                res.json({access_token});
            })
        }catch(err) {
            return res.status(500).json({msg:err.message}); 
        }
    },
    forgotPassword:async(req,res)=>{
        try{
            const {email}=req.body;
            const user=await Users.findOne({email});
            if(!user) return res.status(400).json({msg:"Email does not exist"});
            const access_token=createAccessToken({id:user._id})
            const url=`${process.env.CLIENT_URL}/user/reset/${access_token}`;
            sendMail(email,url,"Reset Password")
            res.json({msg:"resend the Password,please check email"})

        }catch(err) {
            return res.status(500).json({msg:err.message});
        }
    },
    resetPassword:async(req,res)=>{
        try{
            const {password}=req.body;
            console.log(password);
            const passwordHash=await bcrypt.hash(password,12);

            console.log(req.user)
            await Users.findByIdAndUpdate({_id:req.user.id},{
                password:passwordHash
            });
            res.json({msg:"Password is reset successfully"})
        }catch(err) {
            return res.status(500).json({msg:err.message})
        }
    },
    getUserInfor:async(req,res)=>{
        try {
        const user=await Users.findById(req.user.id).select("-password");
        res.json(user); 
        }catch(err) {
            return res.status(500).json({msg:err.message})
        }
    },
    getUserAllInfor:async(req,res)=>{
        try {
            const user=await Users.findById(req.user.id).select("-password");
            res.json(user); 
        }catch(err) {
            return res.status(500).json({msg:err.message})
        }
    },
    logout:async(req,res)=>{
        try {
            res.clearCookie("refreshtoken",{ path:"/user/refresh_token"})
            return res.json({msg:"Log out successfully!"})
        }catch(err){
            return res.status(500).json({msg:err.message})
        }
    },
    updateUser:async(req,res)=>{
        try {
            const {name,avatar}=req.body;
            await Users.findOneAndUpdate({_id:req.user.id},{
                name,avatar
            })
            res.json({msg:"Successfully Updated"})
        }catch(err){
            return res.status(500).json({msg:err.message});
        }
    },
    updateUsersRole:async(req,res)=>{
        try {
            const {role}=req.body;
            await Users.findOneAndUpdate({_id:req.params.id},{
                role
            })
            res.json({msg:"Successfully Updated"})
        }catch(err){
            return res.status(500).json({msg:err.message});
        }
    },
    deleteUser:async(req,res)=>{
        try {
           
            await Users.findOneAndUpdate(req.params.id)
            res.json({msg:"Successfully Deleted"})
        }catch(err){
            return res.status(500).json({msg:err.message});
        }
    }
}
function validateEmail(email) {
    const re=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return re.test(email);
}
const createActivationToken=(payload)=>{
    return jwt.sign(payload,process.env.ACTIVATION_TOKEN_SECRET,{expiresIn:"5m"});
}
const createAccessToken=(payload)=>{
    return jwt.sign(payload,process.env.ACCESS_TOKEN_SECRET,{expiresIn:"15m"});
}
const createRefreshToken=(payload)=>{
    return jwt.sign(payload,process.env.REFRESH_TOKEN_SECRET,{expiresIn:"7d"});
}
module.exports=userCtrl;