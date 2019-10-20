var express = require('express');
var router = express.Router();

express.application.prefix = express.Router.prefix = function (path, configure) {
  var router = express.Router();
  this.use(path, router);
  configure(router);
  return router;
}

const userController = require('../controllers').user;
const roleController = require('../controllers').role;
const todoController = require('../controllers').todo;
const categoryTodoController = require('../controllers').category_todo;

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});

router.prefix('/api/v1', function (router) {
  router.get('/user', userController.list);
  router.get('/user/:id', userController.getById);
  router.post('/user', userController.add);
  router.put('/user/:id', userController.update);
  router.delete('/user/:id', userController.delete);

  router.get('/role', roleController.list);
  router.get('/role/:id', roleController.getById);
  router.post('/role', roleController.add);
  router.put('/role/:id', roleController.update);
  router.delete('/role/:id', roleController.delete);

  router.get('/todo', todoController.list);
  router.get('/todo/:id', todoController.getById);
  router.post('/todo', todoController.add);
  router.put('/todo/:id', todoController.update);
  router.delete('/todo/:id', todoController.delete);

  router.get('/category_todo', categoryTodoController.list);
  router.get('/category_todo/:id', categoryTodoController.getById);
  router.post('/category_todo', categoryTodoController.add);
  router.put('/category_todo/:id', categoryTodoController.update);
  router.delete('/category_todo/:id', categoryTodoController.delete);
});

module.exports = router;