const nodeMailer=require("nodemailer");
const {google}=require("googleapis");
const {OAuth2}=google.auth;
const OAUTH_PLAYGROUND="https://developers.google.com/oauthplayground"


const {
    CLIENT_ID,
    CLIENT_SECRET,
    MAIL_SERVICE_REFRESH_TOKEN,
    SENDER_EMAIL_ADDRESS
}=process.env;

const oauth2Client=new OAuth2( 
    CLIENT_ID,
    CLIENT_SECRET,
    process.env.MAIL_SERVICE_REFRESH_TOKEN,
    OAUTH_PLAYGROUND
);

//SEND MAIL
const sendEmail= (to,url,txt)=>{
    oauth2Client.setCredentials({
        refresh_token:MAIL_SERVICE_REFRESH_TOKEN
    });
    const accessToken=oauth2Client.getAccessToken();
    const smtpTransport=nodeMailer.createTransport({
        service:"gmail",
        auth:{
            type: "OAuth2",
            user:SENDER_EMAIL_ADDRESS,
            clientId:CLIENT_ID,
            clientSecret:CLIENT_SECRET,
            refreshToken:MAIL_SERVICE_REFRESH_TOKEN,
            accessToken
        }

    })
    const mailOptions={
        from:SENDER_EMAIL_ADDRESS,
        to:to,
        subject: "E-Aid",
        html:`<div style="max-width:700px; margin:auto;border:10px solid orange; padding:50px 20px;">
        <h2 style="text-align:center;text-trnsform:uppercase;color:blue;">Welcome to E-Aid</h2>
        <p>Congratulations! You're almost set to start using E-Aid.
        Just click the button below to validate your email. </p>
        <a href=${url} style="background:orange;text-decoration:none; color:#fff; padding:10px 20px;">${txt}</a>
        <p>If button doesn't work for any reason.You can also click the link below:</p>
        <div><a href=${url}>${url}</a></div>
        </div>` 
    }
    smtpTransport.sendMail(mailOptions,(err,infor)=>{
        if(err) return "error in sending mail";
        return infor;
    })
}

module.exports=sendEmail;

