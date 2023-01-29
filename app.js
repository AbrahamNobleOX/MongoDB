const express = require("express");
const MongoClient = require("mongodb").MongoClient;

const app = express();

const url = "mongodb://localhost:27017/";

MongoClient.connect(url, (err, db) => {
  if (err) throw err;
  // console.log("DB has been created");
  const dbo = db.db("nodemongodb");
  // dbo.createCollection('customers',(err,res)=>{
  //     if(err) throw err;
  //     console.log("Collection has created");
  //     db.close();
  // })

  var myobj = { name: "Seyi Abraham", class: "CVE", work: "Programmer" };

  // dbo.collection('students').insertOne(myobj,(err,res)=>{
  //     if(err) throw err;
  //     console.log("Customers Document Inserted");
  //     db.close();
  // });

  dbo.collection("customers").insertOne(myobj, (err, res) => {
    if (err) throw err;
    console.log("Customers Document Inserted");
    db.close();
  });
});

app.get("/", (req, res) => {
  res.send("Hello..");
});

app.listen(8080);
