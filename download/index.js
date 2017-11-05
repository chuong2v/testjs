const express = require('express')
const path = require('path');
const mime = require('mime');
const fs = require('fs');

let app = express()
app.use('/static/:filename', (req, res) => {
  let file = path.resolve(__dirname, './../static/', req.params.filename)
  let filename = path.basename(file);
  let mimetype = mime.lookup(file);
  res.setHeader('Content-disposition', 'attachment; filename=' + filename);
  res.setHeader('Content-type', mimetype);

  let filestream = fs.createReadStream(file);
  filestream.pipe(res);
})
app.listen(3000, () => console.log("Server is listening at port 3000 ..."))