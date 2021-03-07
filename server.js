const express = require('express');
const favicon = require('serve-favicon');
const path = require('path');

const port = process.env.NODE_ENV === 'production' ? 5000 : 3000;

const app = express();

app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.listen(process.env.PORT || port, () => {
  console.info(`Application running on http://localhost:${port}`);
});