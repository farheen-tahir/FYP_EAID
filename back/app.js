require("dotenv").config();

const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");
const fileUpload=require("express-fileupload");
const cookieParser=require("cookie-parser");


const app=express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(fileUpload({
    useTempFiles:true
}));

//ROUTES
app.use("/user",require("./routes/userRouter"));
app.use("/subscriber",require("./routes/subscriberRouter"));
app.use("/api",require("./routes/upload"));

//DB CONNECTIVITY
mongoose.connect('mongodb://127.0.0.1:27017/eaidSystem');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('connected', function() {
console.log('Connected to MongoDB successfully');
});
// ,{
//     useCreateIndex:true,
//     useFindAndModify:false,
//     useNewUrlParser:true,
//     useUnifiedTopology:true
// },err=>{
//     if(err) throw err;
//     console.log("Connected to DataBase");
// }


const PORT=process.env.PORT;
console.log("Port is : ", PORT)

app.listen(PORT,()=>{
    console.log("SERVER IS RUNNING ON PORT NO. ",PORT)
});
