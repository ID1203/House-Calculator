const express = require('express')//Allows us to use the express framework
const cors = require('cors');//Allows us to use cors which specifiys which domains can make request from out server 
const { db } = require('./db/db');//Gives us access to the db file in the db folder
const {readdirSync} = require('fs')
const app = express()//creates an application by calling express function 

require('dotenv').config()//Allows us to imoport PORT variable from .env file

const PORT = process.env.PORT//setting the PORT varibale the the enviromental variable set in .env (5000)

//middlewares(runs when server sends and recives requests)
app.use(express.json())//It parses incoming JSON requests and puts the parsed data in req.body.
app.use(cors())//Allows different domains(frontend) to access recourses on this domain(localhost)

//routes
readdirSync('./routes').map((route) => app.use('/api/v1', require('./routes/' + route)))
//reads information in routes folder
//maps files and names them route
//creates base url (/api/v1)
//Then goes to the routes folder and then the rout file

const server = () => {
    db()//Adds db to server 
    app.listen(PORT, () => {
        console.log('listening to port:', PORT)
    })
}
//creates server and tells server which port to listen to 
//Calls db function from db file to commect to database

server()//Calls server function so it runs


//AE4qivC6Ptts4G2L