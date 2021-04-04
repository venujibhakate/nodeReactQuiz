var express = require("express");
var mysql = require("mysql");
var bodyParser = require("body-parser");
var app = express();
app.use(bodyParser.json())




var mysqlConnection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1",
    database: "quizData"
});

mysqlConnection.connect((err) => {
    if (!err)
        console.log("db connected");
    else
        console.log("not connected");
});



// app.get('/get',(req, res) => {
//     let query = "SELECT user,count(count) times FROM QuizInfo group by user , userDate";
//     mysqlConnection.query(query, (err, results) => {
//       if(err) throw err;
//       res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
//     });
// });


app.get('/get',(req, res) => {
    console.log('test')
 
});


app.post('/post',(req, res) => {
    let data = {user:req.body.Username, userDate:req.body.Date,mistakes:req.body.wrong,count:req.body.count};
    // console.log(req, 'test')
    // console.log(data, 't')
    let query = "INSERT INTO QuizInfo SET ?";
    mysqlConnection.query(query, data,(err, results) => {
      if(err) throw err;
      res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    });
  });

  
app.listen(3002, () => {
    console.log("3002 running")
});

