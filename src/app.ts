// TODO Add types
import * as express from 'express'
import * as path from 'path'

import router from './server/routes'
import { error } from './server/templates'

const _app = express()
console.log('app: ', _app)

_app.use('/', router)

// catch 404 and forward to error handler
_app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.name = '404' //.status = 404;
  next(err);
});

// error handler
_app.use(function(err, req, res, next) {
  console.log('oops ', err)
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send(error);
})

export default _app
