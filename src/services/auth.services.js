
const dbMethods = require( "../helpers/dbMethod.helper" )

exports.login = async( body ) => {
    const data = await dbMethods.fetchOne( "User", body )
    return data || null
}

exports.checkExist = async( reqBody ) => {
    const checkExists = await dbMethods.checkExists( "User", reqBody )
    return checkExists
}


exports.registration = async( reqBody ) => {
    const whereObj = { email : reqBody["email"] }
    const data = await dbMethods.checkExistsAndCreate( "User", reqBody, whereObj )
    return data
}