//Determine if production set of keys needed or development.
if(process.env.NODE_ENV === 'production'){
    //We are in production - return the prod set of keys
    module.exports = require('./prod')
}else{
    //We are in development - return dev keys
    module.exports = require('./dev')
}