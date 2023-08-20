const mongoose = require('mongoose');//Mongoose helps us turn objects in code to objects in the database 

const db = async () => {//Creates async fucntion to connect to the database
    try {
        mongoose.set('strictQuery', false)//allows fiels not specified in the schema to be svaed to the database
        await mongoose.connect(process.env.MONGO_URL)//How you connect to the database
        console.log('Db Connected')
    } catch (error) {
        console.log('DB Connection Error');
    }
}

module.exports = {db} //Allows us to export database and access it from other files 