var express = require('express');
var app = express();
// var http = require("http").Server(app);

// let server = http.listen(3000, function () {
//     let host = server.address().address;
//     let port = server.address().port;
//     console.log("My First Nodejs Server!");
//     console.log("Server listening on: "+ host + " port:" + port);
//});

// var bodyParser = require('body-parser');



// app.use (bodyParser.json());

app.use(express.urlencoded({extended: true}));
app.use(express.json())


// app.use(express.urlencoded({extended: true}));
// app.use(express.json())

app.use(express.static(__dirname + "/www"));

app.listen(3000,()=>{
    var d = new Date();
    var n = d.getHours();
    var m = d.getMinutes();
    console.log("server has been started at : "+n+":"+m);
});






app.get("/task2", function (req, res) {
    res.sendFile(__dirname + "/www/task2.html");
    });

// app.get("/test", function (req, res) {
//     res.sendFile(__dirname + "/www/test.html");
//     });

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/www/form.html");
    });

app.get("/endpoint", function (req, res) {
        res.sendFile(__dirname + "/www/endpoint.html");
        });

app.post('/api/login', function(req, res){

    let users = [{'email' : 'abc@com.au', 'pwd' : '123'}, {'email' : 'abd@com.au', 'pwd' : '123'}, {'email' : 'abe@com.au', 'pwd': '123'}]

    if (!req.body) {
        return res.sendStatus(400)
    }


    var customer = {};
    customer.email = req.body.email;
    customer.upwd = req.body.upwd;
    customer.valid = false;

    for (let i=0; i<users.length;i++){
        if (req.body.email == users[i].email && req.body.upwd == users[i].pwd){
            customer.valid = true;
        }
    }

    // if (req.body.email == "abc@com.au" && req.body.upwd == "123"){
    //     customer.valid = true;
    // }else{
    //     customer.valid = false;
    // }

        
    res.send(customer);

});