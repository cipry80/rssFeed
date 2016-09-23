'use strict';

const path = require('path');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const expressValidator = require('express-validator');
const serveStatic = require('serve-static');
const nunjucks  = require('nunjucks');
//const session = require('express-session');
//const MongoStore = require('connect-mongo')(session);
const morgan = require('morgan');
const config = require('./index');
const Logger = require('./winston');
const logger = Logger.logger();

module.exports.init = initExpress;

function initExpress(app) {
  logger.debug('Initializing %s configs', 'Express');
  const ROOT = app.get('root');
  let env = app.get('env');
  let sessionOpts = {
    secret: config.session.secret,
    key: 'skey.sid',
    resave: config.session.resave,
    saveUninitialized: config.session.saveUninitialized
  };

  /**
   * Configure view engine
   */
nunjucks.configure('dist/app/views', {
    autoescape: true,
    cache: false,
    express: app
});

// Set Nunjucks as rendering engine for pages with .html suffix
app.engine( 'html', nunjucks.render ) ;
app.set('views', ROOT + '/app/views');
 app.set('view engine', 'html');

  if (config.proxy.trust) {
    app.enable('trust proxy');
  }

  app.use(expressValidator());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(methodOverride());
  app.use(morgan('combined', { stream: Logger.stream() }));
  app.disable('x-powered-by');

  // if (config.session.type === 'mongo') {
  //   sessionOpts.store = new MongoStore({
  //     url: config.mongodb.uri
  //   });
  // }

  // app.use(session(sessionOpts));
  //app.use(passport.initialize());
  //app.use(passport.session());
  if (env === 'development' || config.serveStatic) {
      app.use(serveStatic(path.join(ROOT, 'public')));
    }
  app.use(function(req, res, next) {
    // a simple object that holds resources for each request
    req.resources = req.resources || {};
    next();
  });
}
