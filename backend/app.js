require("dotenv").config();
const express=require("express");
const mongoose=require("mongoose");
const bodyParser=require("body-parser");
const cors=require("cors");
// const passport=require("passport");
// const cookieSession=require("cookie-session");
// const passportSetup=require("./passport");
// const authRoute=require("./routes/auth");
const bcrypt=require("bcrypt");
const saltRounds=10;


const app=express();
app.use(express.json());
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

// app.use(
//     cookieSession({
//         name:"session",
//         key:["cyberwolve"],
//         maxAge:24*60*60*100,
//     })
// );
// app.use(passport.initialize());
// app.use(passport.session());
app.use(cors({
    origin:"http://localhost:3000",
    methods:"GET,POST,PUT,DELETE",
    credentials:true
}));


mongoose.connect("mongodb://localhost:27017/EAid");
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('connected', function() {
console.log('Connected to MongoDB successfully');
});

const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    type:String
});

const USER=mongoose.model("User",userSchema);
app.get("/",function(req,res) {
    res.send("home route")
});
app.post("/signin",function(req,res) {
    const {email,password}=req.body;
    USER.findOne({email:email},(err,user)=>{
        if(user) {
            bcrypt.compare(password, user.password, function(err, result) {
                if(result===true) {
                    res.send({message:"successfully entered the system ",user:user});
                    console.log("successfully entered the system");
                } else {
                    res.send({message:"not same password"});
                    console.log("pin galat");
                }    
            });
        }
        else {
            res.send({message:"no user exist in the system"});
            console.log("no availablle");
        }
    });
});
app.post("/signup",function(req,res){
    const {name,email,password,type}=req.body;
    bcrypt.hash(password, saltRounds).then(function(hash) {
        USER.findOne({email:email},(err,user)=>{
            if(user) {
                res.send({message:"already exist"});
                
            } else {
                const user=new USER ({
                    name:name,email:email,password: hash,type:type
                });
                user.save(function(err) {
                    if(err) {
                        res.send(err);
                    }else {
                        res.send({message:"successfully registered"});
                    }
                });
            }
        });   
    });
    // console.log(req.body);
    
});
// app.use("/auth",authRoute);
app.listen(5001,function(){
    console.log("server is running on port 5001");
});

