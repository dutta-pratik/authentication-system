/****************IMPORTING PACKAGE*******************************/
const express = require("express");

/****************USING ROUTER************************************/
const router = express.Router();

/**************IMPORTING CONTROLLER******************************/
const signUpController = require("../controller/signup_controller");

/************CONFIGURING DIFFERENT ROUTES***********************/


router.post("/", signUpController.Register);

/*****************EXPORTING ROUTER*******************************/
module.exports = router;  