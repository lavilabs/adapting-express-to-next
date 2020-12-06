//this could also have been put in server.js
//mongodb handlers are required and called through these routes

// const coats = require("./coats");
// const jackets = require("./jackets");
// const cardigans = require("./cardigans");
// const sweaters = require("./sweaters");
// const blouses = require("./blouses");
// const tshirts = require("./tshirts");
// const dresses = require("./dresses");
// const jumpsuits = require("./jumpsuits");
// const skirts = require("./skirts");
// const pants = require("./pants");
// const shorts = require("./shorts");
// const bags = require("./bags");
// const shoes = require("./shoes");

// module.exports = (app) => {
//method/route/function/
//   app.get("/coats", coats);
//   app.get("/jackets", jackets.get);
//   app.get("/cardigans", cardigans);
//   app.get("/sweaters", sweaters);
//   app.get("/blouses", blouses);
//   app.get("/tshirts", tshirts);
//   app.get("/dresses", dresses);
//   app.get("/jumpsuits", jumpsuits);
//   app.get("/skirts", skirts);
//   app.get("/pants", pants);
//   app.get("/shorts", shorts);
//   app.get("/bags", bags);
//   app.get("/shoes", shoes);
//   app.get("/shoes", shoes);
// }

//mongodb handlers are required and called through these routes
const clothing = require('./clothing');

// module.exports = (app) => {
//   const registerRoute = (options) =>
//     app[options.method.toLowerCase()](options.route, options.handler);
//   registerRoute({
//     method: "get",
//     route: "/clothing",
//     handler: clothing,
//   });
// }; SHORTCUT BELOW

module.exports = (app) => {
  //method/route/function/
  //no need to add here localhost:4000 as is the default prefix(my computer)
  app.get('/clothing', clothing.get);
  app.post('/clothing', clothing.upload, clothing.post);
  app.delete('/clothing', clothing.delete);

  app.get('/clothing/:category', (req, res) => {
    req.params; // jackets or coats
  });
};
