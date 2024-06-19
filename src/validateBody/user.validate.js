
const responseHelper = require( "../helpers/responses.helper" )

exports.checkLoginBody = ( req, res, next ) => {
    let response = {}
    const { email = "", password = "" } = req.body
    if( email !== "" || password !== "" ) return next()
    response = responseHelper.requiredFields
    return res.send(response)
}

exports.checkRegistrationBody = ( req, res, next ) => {
    let response = {}
    const { firstName = "", lastName = "", email = "", password = "" } = req.body
    if( firstName !== "" || lastName !== "" || email !== "" || password !== "" ) return next()
    response = responseHelper.requiredFields
    return res.send(response)
}