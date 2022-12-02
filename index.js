const express = require("express");
const app = express();
const db = require('./db/db')
const router = require('./router')
const cors = require('cors')
const morgan = require('morgan')
const { sequelize } = require('./models/index')
let PORT = process.env.PORT ||3005
var corsOptions = {
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204
  };

 // Middlewares
app.use(express.json())

app.use(cors(corsOptions));
app.use(router)


// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)

    // sequelize.sync({force: true}).then(() =>{
    //     console.log('Conected to database')
    // }).catch(error => console.log(`Conection error ${error}`))

    db.authenticate().then(() =>{
        console.log('Conected to database')
    }).catch(error => console.log(`Conection error ${error}`))
});