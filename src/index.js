const express = require('express');

const feature1 = require('./feature1');

const app = express();

const PORT = process.env.PORT || 3000

const server = app.listen(PORT, () =>
    /* eslint-disable-next-line no-console */
    console.log('Example app listening on port $(PORT)!')
);

app.get('/', (req, res) => {
  res.send(`Hello ${feature1.registerName(req)}`);
});

const stop = () => {
  server.close();
}

module.exports = server;
module.exports.stop = stop;
