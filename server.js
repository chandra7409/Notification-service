const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

const mongoose = require("mongoose");


/**
 * Initializing the DB connection
 
const {connect}=require("./configs/db.config");
*/

const dbConfig=require("./configs/db.config");


mongoose.connect(dbConfig.DB_URL,()=>{
    console.log("Connected to the mongodb");
},err=>{
    console.log("Some err occured the error",err.message);
}
)
/**
 * Stitch the router to server.js
 */
require("./routes/notification.route")(app);

/**
 * Attach the cron file also
 */
require("./schedulers/emailScheduler");


app.listen(8000, ()=>{  // TODO : Move this port num to the config fodler and .env file
    // await connect();
    console.log("monogodb connected to the server on port")
    console.log("Server started");
})