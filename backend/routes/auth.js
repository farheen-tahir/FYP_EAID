// const router=require("express").Router();
// const passport=require("passport");

// router.get("/login/success",function(req,res){
//     if(req.user) {
//         res.status(200).json({
//             error:false,
//             message:"login successfully",
//             user:req.user
//         });
//     }else {
//         res.status(403).json({
//             error:true,
//             message:"not authorized"
//         });
//     }
   
// });
// router.get("/login/failed",function(req,res){
//     res.status(401).json({
//         error:true,
//         message:"failed to login"
//     });
// });
// router.get("/google/callback",
//  passport.authenticate("google",{
//  successRedirect: "http://localhost:3000",
//  failureRedirect: "/login/callback"
// })   
// );
// router.get("/google",passport.authenticate("google",["profile","email"]));
// router.get("/logout",function(req,res){
//     req.logout();
//     res.redirect("http://localhost:3000");
// });