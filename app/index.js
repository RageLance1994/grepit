const express = require('express');
const livereload = require('livereload');
const connectLivereload = require('connect-livereload');
const path = require('path');
require('dotenv').config()
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const app = express();
const compression = require('compression')
app.use(compression({ level: 6, threshold: 1024,brotli:true  }));
app.use((req, res, next) => {
  res.setHeader('Connection', 'keep-alive');
  next();

})


const cookieParser = require('cookie-parser');

const port = 3000;

// === LIVE RELOAD SERVER ===
const liveReloadServer = livereload.createServer({
  exts: [ 'css', 'html','ejs','js'],

});
liveReloadServer.watch(path.join(__dirname, 'views'));
liveReloadServer.watch(path.join(__dirname, 'views/wrappers'));
liveReloadServer.watch(path.join(__dirname, 'views/assets/css'));


//Middlewares
app.use(connectLivereload());
app.use(cookieParser());
app.use(fileUpload()); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());


var expressWs = require('express-ws')(app);


// Refresh automatico al primo collegamento
// liveReloadServer.server.once("connection", () => {
//   setTimeout(() => {
//     liveReloadServer.refresh("/");
//   }, 100);
// });

// === EXPRESS CONFIG ===
app.use("/assets", express.static(path.join(__dirname, 'views/assets')));
app.use("/scripts", express.static(path.join(__dirname, '/node_modules')));

var routes = [

  { location: '/', mw: require('./routes/_home') },
  { location: '/dashboard', mw: require('./routes/_dashboard') },
  { location: '/contabilita', mw: require('./routes/_contabilita') },


];

app.set('view engine', 'ejs');

routes.map((r) => {
  var { location, mw } = r;
  app.use(location, mw);
});

// Avvio server
    app.listen(port, () => {
      console.log(`🚀 Server avviato su http://localhost:${port}`);
    });
