require('dotenv').config()

const express = require("express")
const app = express()

let staticMiddleware = express.static('public')
app.use(staticMiddleware)

app.use(express.urlencoded({ extended: true }));

//interpret JSON data sent in the request body
app.use(express.json());

const router = require('./routes/index.js');
app.use('/api', router);


app.get('/', (req, res) => {

    res.render('index', { color: req.query.color });
})

// app.get('*', (req, res, next) => {

//     //Builds error object:
//     const error = new Error();
//     error.status = 404
//     error.data = ['Not found!']

//     next(error)

// })

///////////////////////////////////////////////////////////////////
// Error Handler:
///////////////////////////////////////////////////////////////////

const errorHandler = (error, req, res, next) => {
    console.log(error);
}

///////////////////////////////////////////////////////////////////

app.use(errorHandler)

//.....

app.set('port', process.env.PORT || 8080)

const server = app.listen(app.get('port'), () => {

    console.log("Server listening on ", app.get('port'))

})
