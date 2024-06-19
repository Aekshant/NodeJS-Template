const { compareSync, genSaltSync, hashSync } = require('bcryptjs');

const services = require( "../services/auth.services" )
const responses = require( "../helpers/responses.helper" )

exports.login = async( req, res ) => {
    try {
        const body = req.body

        const data = await services.login( body )
        return res.send(responses.getResponse( data ))
    } catch (error) {
        return res.send(responses.errorResponse( ))
    }
}

exports.registration = async( req, res ) => {
    try {
        const reqBody = req.body
        reqBody["password"] = hashSync( reqBody["password"], genSaltSync(10) )
        
        const checkExists = await services.registration(reqBody)
        if( checkExists ) return res.send(responses.creationResponse)
        return res.send(responses.dataExists())
    } catch (error) {
        return res.send(responses.errorResponse( ))
    }
}