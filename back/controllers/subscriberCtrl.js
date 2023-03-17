const Subscribers=require("../models/subscriberModel");
const subscribeMail = require("./subscribeMail");

const subscriberCtrl ={
subscribe:async(req,res)=>{
    try {
        const { email, name } = req.body;
        const check=await Subscribers.findOne({email})
        if(check) return res.status(400).json({msg:"This email already exists for subscriptions."});
        const newSubscriber=new Subscribers({
            email,name
        });
        await newSubscriber.save();
        res.json({msg:"Account has been Subcribed successfully!"});
    }catch(err) {
        return res.status(500).json({msg:err.message});
    }
},
newsletter:async(req,res)=>{
    try {
        subscribeMail();
    }catch(err) {
        return res.status(500).json({msg:err.message});
    }
}
}
module.exports=subscriberCtrl;