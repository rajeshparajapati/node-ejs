const express  = require("express")
const bodyparser = require("body-parser");
const morgan = require("morgan")
const dotenv = require('dotenv');
const path = require("path");
const route = express.Router();
const db = require("./services/database/connections");
const user = require('./services/model/user_model')
const middleware = require("./services/middleware/utility")
const session = require('express-session');

const app = express();

// configure dotenv file
dotenv.config({path:'config.env'})
PORT = process.env.PORT || 8080


// parse request 
app.use(bodyparser.urlencoded({extended:true}));

// formated string and request confirmation
app.use(morgan("tiny"));

// set engine 
app.set("view engine","ejs");

// set mongodb connection

db.dbConnetion();

// intialization session 
app.use(
    session({
      key: "user_sid",
      secret: "8rhVtVyueee4j5Eu8Dx",
      resave: false,
      saveUninitialized: false,
      cookie: {
        path    : '/',
        httpOnly: false,
        expires: 600000,
      },
    })
  );




// get current api url
app.use('/api/*',(req,res,next)=>{
    AuthFreeApi = ['/api/login',
                    '/api/registration'      
                ]
    freenext = AuthFreeApi.includes(req.baseUrl);
    if(freenext){
        next();
    } else {
        middleware.middleware_connection(req,res,next)
    }
})


// define static path for assets
app.use('/css', express.static(path.resolve(__dirname, 'assets/css')))
app.use('/js', express.static(path.resolve(__dirname, 'assets/js')))
app.use('/img', express.static(path.resolve(__dirname, 'assets/img')))

// import routes 
//app.use("/api/user",require("./services/routes/route"));
app.use("/",require("./services/routes/route"));

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
})

