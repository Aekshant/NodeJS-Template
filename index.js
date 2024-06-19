require("dotenv").config();

const env = process.env.NODE_ENV || 'dev';
const config = require( "./config/config" )[env]
const { app } = require("./config/express.config");

app.get( "/", ( req, res ) => {
    res.send( { status : true, message : "Mos Predication User Server" } )
} )

app.listen(config["PORT"], () => console.log("Running with port " + config["PORT"]));
