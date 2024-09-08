const mongoose =  require("mongoose")
const databaseConnection = () =>{
    const url = process.env.DB_URL
    const option = {
        dbName:process.env.DB_NAME
    }
    mongoose.set('strictQuery', false);
    mongoose.connect(url,option)
    .then(
        (response) =>{
            console.log("Connection is successfully")
        }
    ).catch((error) =>{
        console.log(error)
    })
}

module.exports = databaseConnection