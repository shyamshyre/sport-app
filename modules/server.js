require('rootpath')();
const express = require('express');
const app = express();
const middleware = require('../middleware');
const logger = require('winston');
var mongoose    = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('../config/components')
var loginRouter = require('../routes/loginrouter');
var userRouter = require('../routes/userrouter');
var errorHandler = require('../handlers/error-handler')

/**
 * 
 * @param {*} serverport 
 * Specifies on which port the application is up and running.
 */
function StartServer(serverport){
  app.listen(serverport, () => console.log(`Server listening on port ${serverport}!`));
  StartDatabase();
}

function StartDatabase(){
  mongoose.connect(config.devconfig.MONGODB_CONNSTRING,function(err,db){
  if (err) throw new Error('Error in creating the Database');
  console.log('Database Created');
  //db.close();
});

  mongoose.Promise = global.Promise;
  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'MongoDB connection error:'));
}
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use(middleware.logger.myLogger);


app.use('/users',userRouter);
app.use('/login',loginRouter);



app.use(errorHandler);



module.exports ={StartServer,app}