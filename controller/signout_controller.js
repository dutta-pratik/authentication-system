/*****************EXPORTING SignOut MODULE*******************************/
module.exports.Signout = function(req, res){
    console.log("Logout");
    req.logout();
    console.log("req",req.body);
    console.log("res",res.locals);
    return res.redirect("/");
}