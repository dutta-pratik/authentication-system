/*****************IMPORTING MODELS/FILES*******************************/
const User = require("../models/user");
const nodeMailer = require("../config/nodemailer");


/*****************EXPORTING Form MODULE*******************************/
module.exports.Form = function(req, res){
    return res.render("forgot_password");
}


/*****************EXPORTING Reset MODULE*******************************/
module.exports.Reset = async function(req, res){
    try{
        console.log(req.body);
        let user = await User.findOne({email: req.body.email});
        console.log(user);
        if(user){
            
            //nodemailer
            let htmlString = nodeMailer.renderTemplate({link: `http://localhost:8000/forgot/confirm/${user._id}/${Date.now() + 9000000}`}, "/reset.ejs");

            nodeMailer.transporter.sendMail({
            from: 'pratikdutta.786@gmail.com',
            to: req.body.email,
            subject: "Forgot Password!",
            html: htmlString 
            }, (err, info) => {
                if (err){
                    console.log('Error in sending mail', err);
                    return;
                }
        
                // console.log('Message sent', info);
                return res.redirect("/");
            });
        }else{
            console.log("User associated with this email not Found");
            return res.redirect("/");
        }
    }catch(err){
        console.log("Error in resetting password-->", err);
        return;
    }
    
}


/*****************EXPORTING Confirm MODULE*******************************/
module.exports.Confirm = async function(req, res){
    try{
        let isUser = await User.findOne({_id: req.params.id});
        if(isUser){
            let timecheck = Date.now();
            if(timecheck < req.params.expiry){
                return res.render("reset_page",{
                    id: isUser._id
                });
            }else{
                console.log("Link expired");
                return res.redirect("/");
            }
        }else{
            console.log("User not found");
            return res.redirect("/");
        }
    }catch(err){
        console.log("Error in confirming the link-->", err);
        return;
    }
}


/*****************EXPORTING Check MODULE*******************************/
module.exports.Check = async function(req, res){
    try{
        if(req.body.password == req.body.confpassword){
            let isUser = await User.findOne({_id: req.params.id});
            if(isUser){
                isUser.password = req.body.password;
                await isUser.save();
                return res.redirect("/");
            }else{
                console.log("User not found");
            }
        }
    }catch(err){
        console.log("Error in checking the password");
        return;
    }
}