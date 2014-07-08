module.exports = function(app) {

  var DataSetsController    = app.Controllers.DataSetsController;

  app.param('data_set_id', DataSetsController.idParam);

  app.get('/api/data_sets', DataSetsController.index);
  app.post('/api/data_sets', DataSetsController.create);
  app.get('/api/data_sets/tags', DataSetsController.tagIndex);
  app.get('/api/data_sets/count', DataSetsController.count);
  app.get('/api/data_sets/formats', DataSetsController.formatIndex);
  app.get('/api/data_sets/vendors', DataSetsController.vendorIndex);
  app.get('/api/data_sets/:data_set_id', DataSetsController.get);
  app.put('/api/data_sets/:data_set_id', DataSetsController.update);
  app.del('/api/data_sets/:data_set_id', DataSetsController.destroy);
};
