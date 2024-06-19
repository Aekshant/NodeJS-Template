const router = require( "express" ).Router()

const authRoute = require( "./router/auth.routes" )

router.use( "/auth", authRoute )

module.exports = router