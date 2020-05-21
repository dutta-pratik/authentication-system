
/*****************EXPORTING Reset MODULE*******************************/
module.exports.Reset = async function(req, res){
    try{
        return res.render("reset_page",{
            id: req.params.id
        })
    }catch(err){
        console.log("ERRor",err);
    }
}