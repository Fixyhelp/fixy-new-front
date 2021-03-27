const path = require('path');
const express = require('express');
var forceSSL = require('express-force-ssl');
const app = express();
const port = process.env.PORT || 8080;
const publicPath = path.join(__dirname, 'build');
app.use(express.static(publicPath));
app.use(forceSSL);

app.get('*', (req, res) => {
   res.sendFile(path.join(publicPath, 'index.html'));
 });

 app.listen(port, () => {
    console.log('Server is up!');
 });