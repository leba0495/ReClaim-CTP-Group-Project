const express = require('express');
const morgan = require('morgan');
const path = require('path');
const db = require('./models');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT;
const multer = require('multer')

const multerMid = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
})


// this lets us parse 'application/json' content in http requests
app.use(express.json());

// Google Cloud Storage
app.disable('x-powered-by')
app.use(multerMid.single('image'))

// add http request logging to help us debug and audit app use
const logFormat = process.env.NODE_ENV==='production' ? 'combined' : 'dev';
app.use(morgan(logFormat));

// this mounts controllers/index.js at the route `/api`
app.use('/api', require('./controllers')); 

// for production use, we serve the static react build folder
if(process.env.NODE_ENV==='production') {
  app.use(express.static(path.join(__dirname, '../client/build')));

  // all unknown routes should be handed to our react app
  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  });
}

// update DB tables based on model updates. Does not handle renaming tables/columns
// NOTE: toggling this to true drops all tables (including data)
db.sequelize.sync({ force: false });

// start up the server
if(PORT) {
  app.listen(PORT, () => console.log(`Listening on ${PORT}`));
} else {
  console.log(process.env.PORT)
  console.log("===== ERROR ====\nCREATE A .env FILE!\n===== /ERROR ====")
}
