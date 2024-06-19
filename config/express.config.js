
const express = require( "express" )
const cors = require("cors")
const bodyParser = require("body-parser")

const app = express();
const apiRoutes = require( "../src/router" )

app.use(cors())
app.use(bodyParser.json())
app.use( "/api", apiRoutes )

module.exports = { app }