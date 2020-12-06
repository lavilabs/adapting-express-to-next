require("dotenv").config();
const AWS = require("aws-sdk")


const { AWS_ACCESS_KEY, AWS_SECRET_KEY } = process.env;

AWS.config.update({
    accessKeyId: AWS_ACCESS_KEY,
    secretAccessKey: AWS_SECRET_KEY
});

var s3 = new AWS.S3();
//AWS is our cloud provider and we are applying s3 on it for upload

module.exports = s3
