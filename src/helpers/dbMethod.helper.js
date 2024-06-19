const db = require( "../../models/index" )


exports.fetchOne = async( model, where={} ) => {
    const dbSchema = db[model]
    const data = await dbSchema.findOne( { raw : true, where } )
    return data || null
} 

exports.checkExistsAndCreate = async( model, body, where={}, ) => {
    const dbSchema = db[model]
    const [data, created] = await dbSchema.findOrCreate( { raw : true, where, defaults: body  } )
    return created || false
} 

exports.checkExists = async( model, where={} ) => {
    const dbSchema = db[model]
    const data = await dbSchema.findOne( { raw : true, where } )
    return ( data ? true : false ) || false
}

exports.createOne = async( model, body ) => {
    const dbSchema = db[model]
    const data = await dbSchema.create( body )
    return ( data ? true : false ) || false
} 