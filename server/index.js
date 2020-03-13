const path = require('path');
const express = require('express');
const port = 3001;
const AWS = require('aws-sdk');
const keys = require('../keys.js');


let app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../dist')));

app.get('/get_image', (req, res) => {

  let cloudFront = new AWS.CloudFront.Signer(keys.aws_private_key, keys.aws_public_key);


  cloudFront.getSignedUrl({}, (err, url) => { })

});

app.listen(port, () => {
  console.log(`Server is up and listening on port: ${port}`);
});