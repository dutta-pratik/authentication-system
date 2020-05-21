/*****************IMPORTING MODELS*******************************/
const User = require("../models/user");

/*****************EXPORTING Register MODULE*******************************/
module.exports.Register =  async function(req, res){
    
    let existUser = await User.findOne({email: req.body.email});
    if(existUser){
       console.log("User Already Exist with this Email");
       return res.redirect("/");
    }else{
        if(req.body.password === req.body.confirmpassword){
            User.create({
                email: req.body.email,
                password: req.body.password
            }, function(err, usr){
                if(err){console.log("Error in creating User"); return;}
                req.flash("success", "User successfully created");
                return res.render("signin");
            });
        }else{
            req.flash("error", "Password didn't match");
            return res.redirect("/");
        }
            
    }
    
}