
var multer = require('multer');

const upload = (multer({ 
    dest: './assets/uploads', 
  }));

  module.exports = upload