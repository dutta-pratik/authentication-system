/****************IMPORTING PACKAGE*******************************/
const express = require("express");
const passport = require("passport");
/****************USING ROUTER************************************/
const router = express.Router();

/**************IMPORTING CONTROLLER******************************/
const signInController = require("../controller/signin_controller");

/************CONFIGURING DIFFERENT ROUTES***********************/


router.post("/", passport.authenticate(
    "local",
    {failureRedirect: "/signin/form"},
), signInController.LogIn);

router.get("/form", signInController.SignInForm);

/*****************EXPORTING ROUTER*******************************/
module.exports = router;  