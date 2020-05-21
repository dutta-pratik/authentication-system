/****************IMPORTING PACKAGE*******************************/
const express = require("express");

/****************USING ROUTER************************************/
const router = express.Router();

/**************IMPORTING CONTROLLER******************************/
const forgotController = require("../controller/forgot_controller");

/************CONFIGURING DIFFERENT ROUTES***********************/


router.get("/", forgotController.Form);
router.post("/reset", forgotController.Reset);
router.get("/confirm/:id/:expiry", forgotController.Confirm);
router.post("/check/:id", forgotController.Check);

/*****************EXPORTING ROUTER*******************************/
module.exports = router;  