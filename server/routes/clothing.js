const MongoClient = require("../mongo/client");
// importing below mongodbs data type of ObjectId
const {ObjectId} = require('mongodb'); // or ObjectID 
const upload = require("./multer.js")
// const assert = require("assert");

const get = async (req, res) => {
  const client = await MongoClient();
  await client.connect();

  const db = client.db("DriveThruCloset");
  let clothing = await db.collection("clothing").find({}).toArray();
  client.close();
  // res.status(200).json({ success: true });
  res.status(200).json(clothing);
};

const post = async (req, res) => {
  console.log(req.body)
  const {name, description,type}=req.body
  //below this parameter is created with multer during app.upload(see routes)
  const {filename}=req.file

  const client = await MongoClient();
  await client.connect();

  const db = client.db("DriveThruCloset");
  let clothing = await db.collection("clothing").insert({name, description, filename, type});
  client.close();
  console.log(req.file)
  res.status(200).json(clothing);

};


const deleter = async (req, res) => {
  const {_id} =req.body
  console.log(req.body);
  const client = await MongoClient();
  await client.connect();

  const db = client.db("DriveThruCloset");
  let clothing = await db.collection("clothing").deleteOne({  _id: ObjectId(_id)});
    // assert as in check that 1 = deletedCount
  // assert.equal(1, clothing.deletedCount);

  client.close();
  //below shos up as response in postman
  // res.status(200).json({ success: true });
  res.status(200).json(clothing);
};



//method:function called on method
// just for upload we add parameter of folder we are sending it to
module.exports = {get, post, upload: upload.single("clothing"), delete:deleter}

// const deleteGreeting = async (req, res) => {
//   const lang = req.params.lang;
//   console.log(req.params.lang);
//   const client = await MongoClient(MONGO_URI);
//   try {
//     await client.connect();
//     const db = client.db("exercise_2");
//     const r = await db.collection("greetings").deleteOne({ lang: lang });
//     assert.equal(1, r.deletedCount);
//     // assert as in check that 1 = deletedCount

//     res.status(204).json({ status: 201, lang });
//     //SENDS THE DATA TO MONGO
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ status: 500, data: req.body, message: err.message });
//   }
//   client.close();
// };