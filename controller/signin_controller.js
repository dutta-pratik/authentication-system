/*****************IMPORTING MODELS/FILES*******************************/
const User = require("../models/user");
const jwt = require("jsonwebtoken");

/*****************EXPORTING SignIn MODULE*******************************/
module.exports.SignInForm = function(req, res){
    return res.render("signin");
}

/*****************EXPORTING LogIn MODULE*******************************/
module.exports.LogIn = async function(req, res){
    console.log("req",req.user);
    console.log("res",res.locals);
    
    return res.render("homepage");
}

