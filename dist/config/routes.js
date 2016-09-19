'use strict';

const logger = require('./winston').logger();

module.exports.init = initRoutes;

function initRoutes(app) {
  logger.debug('Initializing %s configs', 'Routes');

  let routesPath = app.get('root') + '/app/routes';

  app.use('/api/', require(routesPath + '/news'));
}
