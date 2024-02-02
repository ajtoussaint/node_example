const express = require('express')

let app = express();


//when a client makes a request along the default route this function is called
// try route http://localhost:3000
app.route('/')
    .get((request_content, response_handler) => {
        //request_content contains any data sent with the request
        //response_handler is an object used to send a response to the client
        response_handler.send({
            test:'data',
            color:'red'})
    })


//Change the route argument to send data when other routes are accessed
// try route http://localhost:3000/Page
app.route('/page')
    .get((req, res) => {
        //you can send files to the client to display pages
        res.sendFile(process.cwd() + '/views/Page.html')
    })

// ":" signifies a variable that is recorded in the path
// try route: http://localhost:3000/api/test
// try route: http://localhost:3000/api/(your name)
app.route('/api/:variable')
    .get((req,res) => {
        res.send("Hello " + req.params.variable)
    })

//This function starts the server, must go at the end
const PORT = 3000;
app.listen(PORT, function() {
    console.log("Listening on port " + PORT);
});