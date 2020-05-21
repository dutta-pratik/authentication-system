/****************IMPORTING PACKAGE*******************************/
const express = require("express");
const passport = require("passport");
/****************USING ROUTER************************************/
const router = express.Router();

/**************IMPORTING CONTROLLER******************************/
const formController = require("../controller/form_controller");
const resetController = require("../controller/reset_controller");
const signOutController = require("../controller/signout_controller");
/************CONFIGURING DIFFERENT ROUTES***********************/

router.get("/", formController.home);
router.use("/signup", require("./signup"));
router.use("/signin", require("./signin"));
router.use("/forgot", require("./forgot"));
router.get("/reset/:id", resetController.Reset);
router.get("/signout", signOutController.Signout);

/*****************EXPORTING ROUTER*******************************/
module.exports = router;  