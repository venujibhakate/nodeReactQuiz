var express = require("express");
var app = express();
app.use(express.json());
const { Client } = require("pg");

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin,X-Requested-With,Content-Type,Accept"
    );
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    next();
  });
  
const client = new Client({
    user: "tufvcncromtwmh",
    password: "0eff6c9e632c61bca793a380b6ce3eefd8804e36f9a77ef47447530fcebee814",
    database: "deu3gpfknrmphd",
    port: 5432,
    host: "ec2-34-254-69-72.eu-west-1.compute.amazonaws.com",
    ssl: { rejectUnauthorized: false },
});
client.connect(function (res, error) {
 console.log(`Connected!!!`);
});

app.post("/post", function(req,res){
    let name = req.body.Username;
    let wrong = req.body.wrong;
    let count = req.body.count;
    let  date = req.body.Date;
    console.log(name,wrong,count,date);
 client.query("INSERT INTO Quiz (name,wrong,count,date) VALUES($1,$2,$3, $4)",[name,wrong,count,date], function (err, result) {
 if (err) {  
    res.status(400).send(err);
    console.log(err);
}
 else{res.status(200).send(result);}
    console.log("success");
 });
})
app.get("/dummy",function(err,res,next){
    const query=`
    CREATE TABLE Quiz (
        name string,
        wrong int,
        count int,
        date Date
        );
        `;
    client.query(query, function(err,result){
        if(err)
        {
            console.log(err);
            res.status(400).send(err);
        }     
        console.log("successfully inserted");
    });
});
app.get("/getData", function (req, res, next) {
    const query = ` SELECT * FROM Quiz`;
    client.query(query, function (err, result) {
    if (err) { res.status(400).send(err);}
    console.log(result);
    res.send(result);
   
    
    });
   });


var port = process.env.PORT || 2002;
app.listen(port,()=> console.log("Listening on port :",port));