
const router = require( "express" ).Router()

const controller = require( "../controller/auth.controller" )
const validateMiddleware = require( "../validateBody/user.validate" )

router.post( "/login", validateMiddleware.checkLoginBody, controller.login )
router.post( "/registration", validateMiddleware.checkRegistrationBody, controller.registration )

module.exports = router