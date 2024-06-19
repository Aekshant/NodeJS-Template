
exports.getResponse = ( data, message = "Success", success = true ) => {
    if( !data ) {
        message = "Not Found"
        success = false
        data = {}
    }
    return ({ status : true, success, data, message })
}

exports.errorResponse = ( data = {}, message = "Error, Try After Some Time" ) => {
    return ({ status : false, success : false, data, message })
}

exports.dataExists = ( message = "Already Exists" ) => {
    return ({ status : true, success: false, message })
}

exports.requiredFields = { 
    status : true, 
    success : false, 
    data : {}, 
    message : "Provide a required Fields"
}

exports.creationResponse = { 
    status : true, 
    success : true, 
    message: "Success"
}