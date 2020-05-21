/*************IMPORTING PACKAGES**************************/
const express = require("express");
const bodyParser = require("body-parser");
const db = require("./config/mongoose");

const session = require("express-session");
const passport = require("passport");
const passportLocal = require("./config/passport-local-strategy");
// const passportJWT = require("./config/passport-jwt");
const MongoStore = require("connect-mongo")(session);

const flash = require('connect-flash');
const customMware = require('./config/middleware');
/*************CONFIGURE PORTSS**************************/
const port = 8000;

/*************USING REQUIRED FUNCTION**************************/
const app = express();

//body parser
app.use(bodyParser.json());

app.use(express.urlencoded({extended: true}));


//setting up static files
app.use(express.static("assets"));

//setting up view engine
app.set("view engine", "ejs");
app.set("views", "./views");

//mongo store is used to store session cookie in the db
app.use(session({
    name: "Form",
    //TODO change it before production
    secret: "#q3%kGjx[/tC*a^2&L0",
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000 * 60 * 100)
    },
    store: new MongoStore(
        {
            mongooseConnection: db,
            autoRemove: "disabled"
        },function(err){
            console.log(err || "mongostore setup OK");
        }
    )
}));

/******************USING PASSPORT PACKAGE****************************/
app.use(passport.initialize());
app.use(passport.session());

//set the user authentication
app.use(passport.setAuthenticatedUser);

app.use(flash());
app.use(customMware.setFlash);

//using express router
app.use("/", require("./routes/index"));

/******************CHECKING SERVER STATUS****************************/

app.listen(port, function(err){
    if(err){
        console.log(`Error in connecting to server, ${err}`);
    }
    console.log(`Server is up and running successfully at port ${port}`);
});

