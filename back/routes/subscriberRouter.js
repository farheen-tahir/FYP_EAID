const router=require("express").Router();
const subscriberCtrl=require("../controllers/subscriberCtrl");


router.post("/subscribe",subscriberCtrl.subscribe);
router.post("/news",subscriberCtrl.newsletter);
module.exports=router;