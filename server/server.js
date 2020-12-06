"use strict";

//imports
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const routes = require("./routes/routes.js");
var multer = require('multer');
var AWS = require('aws-sdk');
var s3 = require("./aws/aws.js")
// const webpack = require('webpack');



const PORT = 4000;
//express instance is created inside the app variable, then middleware are added and it and is passed to routes folder ( routes are decoupled from server)
const app = express();
app
  .use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Methods",
      "OPTIONS, HEAD, GET, PUT, POST, DELETE"
    );
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  })
  .use(morgan("tiny"));
// not being used for moment but good to keep
app
  .use(express.static(__dirname + "/assets"))
  //takes a json string and turns it into an object inside req.body
  .use(bodyParser.json())
  .use(express.urlencoded({ extended: false }));
//   .use("/", express.static(__dirname + "/"))

//we add a 
// var storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     var params = {
//       Bucket: 'drive-thru-closet',
//       Key: file.name,
//       Body: data
//     };

//     s3.putObject(params, function (perr, pres) {
//       if (perr) {
//         console.log("Error uploading data: ", perr);
//       } else {
//         console.log("Successfully uploaded data to myBucket/myKey");
//       }
//     });
//     cb(null, '/tmp/my-uploads')
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.fieldname + '-' + Date.now())
//   }
// })



  
  // onFileUploadData: function (file, data, req, res) {
  //   // file : { fieldname, originalname, name, encoding, mimetype, path, extension, size, truncated, buffer }
   
  // }




//FOR AFTER???
// app.post('/upload', function(req, res){
//   if(req.files.image !== undefined){ // `image` is the field name from your form
//       res.redirect("/uploads"); // success
//   }else{
//       res.send("error, no file chosen");
//   }
// });


//below is function that calls the routes and makes them accessible
routes(app);
//above is function that calls the routes and makes them accessible

app.use("/images", express.static(__dirname + "/assets/images"));



app.listen(PORT, () => console.info(`Listening on port ${PORT}`));
